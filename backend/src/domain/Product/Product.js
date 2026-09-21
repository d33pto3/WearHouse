export default class Product {
  constructor(id, name, category, brand, variants) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.brand = brand;
    this.variants = variants;
  }

  // create(id, name, category, brand, variants) {
  //   if (!id || !name || !category) {
  //     console.log("Some of the required fields were not provided!");
  //     return;
  //   }

  //   return new Product(id, name, category, brand, variants);
  // }

  addVariant(variant) {
    this.variants = [...this.variants, variant];
  }
}