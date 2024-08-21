import { Product } from "./product.js";

class ProductList {
  constructor() {
    this.products = [];
  }

  add(product) {
    if (product instanceof Product) {
      this.products.push(product);
    }
  }

  *[Symbol.iterator]() {
    for (let product of this.products) {
      yield product;
    }
  }

  get() {
    return [...this];
  }
}

export { ProductList };
