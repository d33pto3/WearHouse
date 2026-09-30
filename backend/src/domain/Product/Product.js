import ProductVariant from "./ProductVariant.js";

export default class Product {
  constructor(id, name, category, brand, variants) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.brand = brand;
    this.variants = variants;
  }

  addVariant(variant) {
    this.variants = [...this.variants, variant];
  }

  removeVariant(variantId) {
    this.variants = this.variants.filter((variant) => variant.id !== variantId);
  }

  getVariant(variantId) {
    return this.variants.find((variant) => variant.id === variantId);
  }

  hasVariant(variantId) {
    return this.variants.some((variant) => variant.id === variantId);
  }

  getTotalStocks() {
    return this.variants.reduce((total, variant) => total + variant.stock, 0);
  }

  isAvailable() {
    return this.getTotalStocks() > 0;
  }

  fromPersistence(rawProduct) {
    const variants = rawProduct.variants.map(rawVariant => {
      return new ProductVariant(
        rawVariant.id,
        rawVariant.color,
        rawVariant.size,
        rawVariant.price,
        rawVariant.stock,
        rawVariant.sku
      );
    });

    return new Product(
      rawProduct.id,
      rawProduct.name,
      rawProduct.category,
      rawProduct.brand,
      variants
    );
  }

  toPersistence() {
    return {
      id: this.id,
      name: this.name,
      category: this.category,
      brand: this.brand,
      variants: this.variants.map(variant => ({
        id: variant.id,
        color: variant.color,
        size: variant.size,
        price: variant.price,
        stock: variant.stock,
        sku: variant.sku
      }))
    };
  }
}