const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const uuidv4 = require("uuid/v4");
const { randomBytes } = require("crypto");
const { promisify } = require("util");
const { transport, makeANiceEmail } = require("../mail");
const { hasPermission, hasPromo } = require("../utils");
const stripe = require("../stripe");
const Mutations = {
  async createItem(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error("You must be logged in to do that!");
    }
    // CHECK THAT they have the permission to do so

    const hasPermissions = ctx.request.user.permissions.some(permission =>
      ["ADMIN", "ITEMCREATE"].includes(permission)
    );

    if (!hasPermissions) {
      throw new Error("You don't have permission to do that!");
    }

    const item = await ctx.db.mutation.createItem(
      {
        data: {
          // This is how to create a relationship between the Item and the User
          ...args,
          user: {
            connect: {
              id: ctx.request.userId
            }
          },
          categories: {
            set: args.categories
          },
          promo: {
            set: args.promo
          },
          features: {
            set: args.features
          },
          highlights: {
            set: args.highlights
          }
        }
      },
      info
    );

   

    return item;
  },
  updateItem(parent, args, ctx, info) {
    // first take a copy of the updates
    const updates = { ...args };
    // remove the ID from the updates
    delete updates.id;
    // run the update method
    return ctx.db.mutation.updateItem(
      {
        data: updates,
        where: {
          id: args.id
        }
      },
      info
    );
  },
  async deleteItem(parent, args, ctx, info) {
    const where = { id: args.id };
    // 1. find the item
    const item = await ctx.db.query.item({ where }, `{ id title user { id }}`);
    // 2. Check if they own that item, or have the permissions
    const ownsItem = item.user.id === ctx.request.userId;
    const hasPermissions = ctx.request.user.permissions.some(permission =>
      ["ADMIN", "ITEMDELETE"].includes(permission)
    );

    if (!ownsItem && !hasPermissions) {
      throw new Error("You don't have permission to do that!");
    }

    // 3. Delete it!
    return ctx.db.mutation.deleteItem({ where }, info);
  },
  async signup(parent, args, ctx, info) {
    const currentUser = ctx.request.userId;

    // lowercase their email
    const email = args.email.toLowerCase();

    const name = args.name;

    // hash their password
    const password = await bcrypt.hash(args.password, 10);

    // create the user in the database
    const user = await ctx.db.mutation.updateUser(
      {
        where: { id: currentUser },
        data: {
          name,
          email,
          password,
          permissions: { set: ["USER"] }
        }
      },
      info
    );
    // Finalllllly we return the user to the browser
    return user;
  },
  async signin(parent, { email, password }, ctx, info) {
    // 1. check if there is a user with that email
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) {
      throw new Error(`No such user found for email ${email}`);
    }
    // 2. Check if their password is correct
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error("Invalid Password!");
    }
    // 3. generate the JWT Token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // 4. Set the cookie with the token
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });
    // 5. Return the user
    return user;
  },
  signout(parent, args, ctx, info) {
    ctx.response.clearCookie("token");
    return { message: "Goodbye!" };
  },
  async requestReset(parent, args, ctx, info) {
    // 1. Check if this is a real user
    const user = await ctx.db.query.user({ where: { email: args.email } });
    if (!user) {
      throw new Error(`No such user found for email ${args.email}`);
    }
    // 2. Set a reset token and expiry on that user
    const randomBytesPromiseified = promisify(randomBytes);
    const resetToken = (await randomBytesPromiseified(20)).toString("hex");
    const resetTokenExpiry = Date.now() + 3600000; // 1 hour from now
    const res = await ctx.db.mutation.updateUser({
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry }
    });
    // 3. Email them that reset token
    const mailRes = await transport.sendMail({
      from: "wes@wesbos.com",
      to: user.email,
      subject: "Your Password Reset Token",
      html: makeANiceEmail(`Your Password Reset Token is here!
      \n\n
      <a href="${process.env.FRONTEND_URL}/reset?resetToken=${resetToken}">Click Here to Reset</a>`)
    });

    // 4. Return the message
    return { message: "Thanks!" };
  },
  async resetPassword(parent, args, ctx, info) {
    // 1. check if the passwords match
    if (args.password !== args.confirmPassword) {
      throw new Error("Yo Passwords don't match!");
    }
    // 2. check if its a legit reset token
    // 3. Check if its expired
    const [user] = await ctx.db.query.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: Date.now() - 3600000
      }
    });
    if (!user) {
      throw new Error("This token is either invalid or expired!");
    }
    // 4. Hash their new password
    const password = await bcrypt.hash(args.password, 10);
    // 5. Save the new password to the user and remove old resetToken fields
    const updatedUser = await ctx.db.mutation.updateUser({
      where: { email: user.email },
      data: {
        password,
        resetToken: null,
        resetTokenExpiry: null
      }
    });
    // 6. Generate JWT
    const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);
    // 7. Set the JWT cookie
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });
    // 8. return the new user
    return updatedUser;
  },
  async updatePhoneLocation(parent, args, ctx, info) {
    // 1. Check if they are logged in
    const currentUser2 = await ctx.db.query.user({
      where: { id: ctx.request.userId }
    });

    const currentName = currentUser2.name;
    const currentPhone = currentUser2.phone;
    const currentEmail = currentUser2.email;
    const currentLocation = currentUser2.location;
    const currentUser = currentUser2.id;
    const name = args.name === "" ? currentName : args.name;

    const phone = args.phone === "" ? currentPhone : args.phone;

    const location = args.location === "" ? currentLocation : args.location;

    const email = args.email === "" ? curentEmail : args.email;

    const user = await ctx.db.mutation.updateUser(
      {
        where: { id: currentUser },
        data: {
          name,
          phone,
          location,
          email
        }
      },
      info
    );
    return user;
  },
  async updatePhoneAddress(parent, args, ctx, info) {
    // 1. Check if they are logged in
    const currentUser2 = await ctx.db.query.user({
      where: { id: ctx.request.userId }
    });

    const currentName = currentUser2.name;
    const currentPhone = currentUser2.phone;
    const currentEmail = currentUser2.email;
    const currentAddress = currentUser2.address;
    const currentPostal = currentUser2.postal;
    const currentUser = currentUser2.id;
    const name = args.name === "" ? currentName : args.name;

    const phone = args.phone === "" ? currentPhone : args.phone;

    const address = args.address === "" ? currentAddress : args.address;
    const postal = args.postal === "" ? currentPostal : args.postal;

    const email = args.email === "" ? currentEmail : args.email;

    const user = await ctx.db.mutation.updateUser(
      {
        where: { id: currentUser },
        data: {
          name,
          phone,
          address,
          postal,
          email
        }
      },
      info
    );
    return user;
  },
  async updatePriceAfterPromoCode(parent, args, ctx, info) {
    const { userId } = ctx.request;
    const { id } = ctx.request;
    const where = { id: args.id };

    const itemPromos = await ctx.db.query.item({ where }, `{id promo }`);

    const matchedPromo = itemPromos.promo.filter(promotion =>
      promotion.includes(args.promotion)
    );

    if (!matchedPromo.length) {
      throw new Error("Invalid Promo Code");
    }


    const promocodeId = await ctx.db.query
      .promoCodes(
        {
          where: {
            item: { id: id }
          }
        },
        `{id}`
      )
      .catch(err => {
        new Error(err);
      });

    const promotionItem = await ctx.db.query
      .promoCode(
        {
          where: {
            id: promocodeId[0].id
          }
        },
        `{promotion
          promotionPrice}`
      )
      .catch(err => {
        new Error(err);
      });

    if (promotionItem.promotion[0] != matchedPromo[0]) {
      throw new Error("Promo Code Does Not Apply");
    }

    // const itemPromoPrice = await ctx.db.query.promoCodes(
    //   {
    //     where: {
    //       item: { id: itemPromos.id },
    //       promotion: { promotion: matchedPromo }
    //     }
    //   },
    //   `{promotionPrice}`
    // );


    const [existingCartItem] = await ctx.db.query.cartItems({
      where: {
        user: { id: userId },
        item: { id: args.id }
      }
    });
 

    if (existingCartItem) {
      return ctx.db.mutation.updateCartItem(
        {
          where: { id: existingCartItem.id },
          data: {
            promotionPrice: promotionItem.promotionPrice
          }
        },
        info
      );
    }
    // return ctx.db.mutation.createCartItem(
    //   {
    //     data: {
    //       user: {
    //         connect: { id: userId }
    //       },
    //       promotionPrice: promotionPrice.promotionPrice,
    //       item: {
    //         connect: { id: args.id }
    //       }
    //     }
    //   },
    //   info
    // );

    // itemPromos.promo.some(promotion => hasPromo(promotion,))

    // const item = await ctx.db.query.item({ where }, `{ id promo }`);

    // //check if discount code is valid
    // const promoCodeCheck = await ctx.db.query.item({
    //   where: {
    //     item: {id: id},
    //     promo: {promo: args.promotion}
    //   }
    // });

    // const [existingCartItem] = await ctx.db.query.cartItems({
    //   where: {
    //     user: { id: userId },
    //     item: { id: args.id }
    //   }
    // });
  },
  async updatePermissions(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error("You must be logged in!");
    }
    // 2. Query the current user
    const currentUser = await ctx.db.query.user(
      {
        where: {
          id: ctx.request.userId
        }
      },
      info
    );
    // 3. Check if they have permissions to do this
    hasPermission(currentUser, ["ADMIN", "PERMISSIONUPDATE"]);
    // 4. Update the permissions
    return ctx.db.mutation.updateUser(
      {
        data: {
          permissions: {
            set: args.permissions
          }
        },
        where: {
          id: args.userId
        }
      },
      info
    );
  },
  async createGuest(parent, args, ctx, info) {
    const email = `Guest${uuidv4()}`;
    const name = email;
    const password = uuidv4();

    const user = await ctx.db.mutation.createUser(
      {
        data: {
          email,
          name,
          password,
          permissions: { set: ["GUEST"] }
        }
      },
      info
    );
    // create the JWT token for them
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // We set the jwt as a cookie on the response
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie
    });

    return user;
    // Finalllllly we return the user to the browser
    // return user;
  },
  async addToCart(parent, args, ctx, info) {
    // 1a Check if signed in already
    const { userId } = ctx.request;
    // 2. Query the users current cart
    const [existingCartItem] = await ctx.db.query.cartItems({
      where: {
        user: { id: userId },
        item: { id: args.id }
      }
    });
    // 3. Check if that item is already in their cart and increment by 1 if it is
    if (existingCartItem) {

      return ctx.db.mutation.updateCartItem(
        {
          where: { id: existingCartItem.id },
          data: { quantity: existingCartItem.quantity + 1 }
        },
        info
      );
    }
    // 4. If its not, create a fresh CartItem for that user!
    return ctx.db.mutation.createCartItem(
      {
        data: {
          user: {
            connect: { id: userId }
          },
          item: {
            connect: { id: args.id }
          }
        }
      },
      info
    );
  },
  async removeFromCart(parent, args, ctx, info) {
    // 1. Find the cart item
    const cartItem = await ctx.db.query.cartItem(
      {
        where: {
          id: args.id
        }
      },
      `{ id, user { id }}`
    );
    // 1.5 Make sure we found an item
    if (!cartItem) throw new Error("No CartItem Found!");
    // 2. Make sure they own that cart item
    if (cartItem.user.id !== ctx.request.userId) {
      throw new Error("Cheatin huhhhh");
    }
    // 3. Delete that cart item
    return ctx.db.mutation.deleteCartItem(
      {
        where: { id: args.id }
      },
      info
    );
  },
  async createOrder(parent, args, ctx, info) {
    // 1. Query the current user and make sure they are signed in
    const { userId } = ctx.request;
    if (!userId)
      throw new Error("You must be signed in to complete this order.");
    const user = await ctx.db.query.user(
      { where: { id: userId } },
      `{
      id
      name
      email
      cart {
        id
        quantity
        promotionPrice
        item { title price id description image largeImage image1 largeImage1 image2 largeImage2 }
      }}`
    );
    // 2. recalculate the total for the price

    const promoItems = user.cart.filter(
      cartItem => cartItem.promotionPrice !== null
    );
    const regularItems = user.cart.filter(
      cartItem => cartItem.promotionPrice === null
    );

    const promoAmount = promoItems.reduce(
      (tally, cartItem) => tally + cartItem.promotionPrice * cartItem.quantity,
      0
    );

    const regularAmount = regularItems.reduce(
      (tally, cartItem) => tally + cartItem.item.price * cartItem.quantity,
      0
    );


    const amount = promoAmount + regularAmount;

    // 3. Create the stripe charge (turn token into $$$)
    const charge = await stripe.charges.create({
      amount,
      currency: "USD",
      source: args.token
    });
    // 4. Convert the CartItems to OrderItems
    const orderItems = user.cart.map(cartItem => {
      const orderItem = {
        ...cartItem.item,
        quantity: cartItem.quantity,
        promotionPrice: cartItem.promotionPrice || null,
        user: { connect: { id: userId } }
      };
      delete orderItem.id;
      return orderItem;
    });

    // 5. create the Order
    const order = await ctx.db.mutation.createOrder({
      data: {
        total: charge.amount,
        charge: charge.id,
        items: { create: orderItems },
        user: { connect: { id: userId } }
      }
    });
    // 6. Clean up - clear the users cart, delete cartItems
    const cartItemIds = user.cart.map(cartItem => cartItem.id);
    await ctx.db.mutation.deleteManyCartItems({
      where: {
        id_in: cartItemIds
      }
    });
    // 7. Return the Order to the client
    return order;
  }
};

module.exports = Mutations;
