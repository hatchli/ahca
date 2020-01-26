export default function calcTotalPrice(cart) {
  console.log(cart);
  const promoItems = cart.filter(cartItem => cartItem.promotionPrice !== null);
  const regularItems = cart.filter(
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

  console.log(promoAmount);
  console.log(regularAmount);
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.item) return tally;
    return regularAmount + promoAmount;
  }, 0);
}
