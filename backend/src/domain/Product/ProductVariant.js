export default class ProductVariant {
  constructor(id, color, size, price, stock, sku) {
    this.id = id;
    this.color = color;
    this.size = size;
    this.price = price;
    this.stock = stock;
    this.sku = sku;
  }

  increaseStock(quantity) {
    this.stock += quantity;
  }

  decreaseStock(quantity) {
    if (this.stock >= quantity) {
      this.stock -= quantity;
    } else {
      // throw new Error("Insufficient stock");
      return "Insufficient stock to decrease.";
    }
  }

  getVariantPrice(id) {
    if(this.id === id) {
      return this.price;
    }
  }
}
