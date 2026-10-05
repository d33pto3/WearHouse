import Product from "../domain/Product/Product.js";

class ProductRepository {
  constructor(storage) {
    this.storage = storage;
  }

  findById(productId) {
    const rawProduct = this.storage["products"].find(
      (product) => product.id === productId,
    );

    if (!rawProduct) {
      return null;
    }

    return Product.fromPersistence(rawProduct);
  }

  save(product) {
    const rawProduct = product.toPersistence();

    const index = this.storage.products?.findIndex(
      (p) => p.id === rawProduct.id,
    );

    if (index === -1) {
      this.storage.products.push(rawProduct);
    } else {
      this.storage.products[index] = rawProduct;
    }

    return rawProduct;
  }

  findAll() {
    return this.storage.products.map((rawProduct) =>
      Product.fromPersistence(rawProduct),
    );
  }
}

export default ProductRepository;
