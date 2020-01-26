import Link from "next/link";
import { Mutation } from "react-apollo";
import { TOGGLE_CART_MUTATION } from "./Cart";
import NavStyles from "./styles/NavStyles";
import User from "./User";
import Signout from "./Signout";
import CartCount from "./CartCount";
import SignUpButton from "./SignUpButton";

const Nav = () => (
  <User>
    {({ data }) => {
      const me = data ? data.me : null;
      console.log(data);
      return (
        <NavStyles data-test="nav">
          <Link href="/shop">
            <a>Shop</a>
          </Link>
          <>
            {me && me.permissions.includes("ADMIN") && (
              <Link href="/sell">
                <a>Sell</a>
              </Link>
            )}
            {me && me.permissions.includes("USER") && (
              <Link href="/orders">
                <a>Orders</a>
              </Link>
            )}
            {/* <Link href="/me">
                <a>Account</a>
              </Link> */}
            {me && !me.permissions.includes("GUEST") && <Signout />}
            {/* {me && me.permissions.includes("GUEST") && <SignUpButton />} */}
            {me && me.permissions.includes("GUEST") && (
              <SignUpButton>Register</SignUpButton>
            )}
            {me && (
              <Mutation mutation={TOGGLE_CART_MUTATION}>
                {toggleCart => (
                  <button onClick={toggleCart}>
                    My Cart
                    <CartCount
                      count={me.cart.reduce(
                        (tally, cartItem) => tally + cartItem.quantity,
                        0
                      )}
                    ></CartCount>
                  </button>
                )}
              </Mutation>
            )}
          </>
        </NavStyles>
      );
    }}
  </User>
);

export default Nav;
