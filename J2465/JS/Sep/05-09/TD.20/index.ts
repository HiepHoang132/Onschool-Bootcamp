enum DiscountType {
  Standard,
  Seasonal,
  Weight,
}

function getDiscountedPrice(
  cartWeight: number,
  totalPrice: number,
  discountType: DiscountType
): number {
  // Write your code here
  if (discountType === DiscountType.Standard) {
    totalPrice = totalPrice * 0.94;
  } else if (discountType === DiscountType.Seasonal) {
    totalPrice = totalPrice * 0.88;
  }

  if (discountType === DiscountType.Weight) {
    if (cartWeight <= 10) {
      totalPrice = totalPrice * 0.94;
    } else {
      totalPrice = totalPrice * 0.82;
    }
  }

  return totalPrice;
}

console.log(getDiscountedPrice(12, 100, DiscountType.Weight));
