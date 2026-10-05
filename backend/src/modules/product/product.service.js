import { generateId } from "../database/idGenerator.js";
import Product from "../domain/Product/Product.js";
import ProductVariant from "../domain/Product/ProductVariant.js";

class ProductService {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  createProduct(data) {
    const product = new Product(
      generateId("product"),
      data.name,
      data.category,
      data.brand,
      [],
    );

    return this.productRepository.save(product);
  }

  addVariant(productId, data) {
    const product = this.productRepository.findById(productId);

    if (!product) {
      return "Product not found";
    }

    const variant = new ProductVariant(
      generateId("variant"),
      data.color,
      data.size,
      data.price,
      data.stock,
      data.sku,
    );

    product.addVariant(variant);

    this.productRepository.save(product);

    return product;
  }
}

export default ProductService;
