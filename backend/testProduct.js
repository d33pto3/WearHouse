import memoryStorage from "./src/database/testStorage.js";

import ProductRepository from "./src/repositories/ProductRepository.js";
import ProductService from "./src/service/ProductService.js";

const productRepository = new ProductRepository(memoryStorage);

const productService = new ProductService(productRepository);

const product = productService.createProduct({
    name: "Custom Mechanical Keyboard",
    category: "Electronics",
    brand: "Keychron"
});

console.log("Created Product:");
console.log(product);

console.log("Memory Storage:");
console.log(memoryStorage);