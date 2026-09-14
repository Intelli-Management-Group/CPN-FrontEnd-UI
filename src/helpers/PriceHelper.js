// A product/variant is on sale only when it has a sale price greater than 0,
// matching the backend's `sell_price > 0` check (see ProductController@index).
export const isOnSale = (sellPrice) => Number(sellPrice) > 0;

// originalPrice: the non-sale price to fall back to (product.price or variant.originalPrice).
export const getEffectivePrice = (sellPrice, originalPrice) =>
  isOnSale(sellPrice) ? sellPrice : originalPrice;
