export default class ProductVariant {
  constructor(id, color, size, price, stock, sku) {
    this.id = id;
    this.color = color;
    this.size = size;
    this.price = price;
    this.stock = stock;
    this.sku = sku;
  }

  findVariantById(id) {
    if(this.id === id) {
      return this;
    }
  }

  getVariantPrice(id) {
    if(this.id === id) {
      return this.price;
    }
  }
}
