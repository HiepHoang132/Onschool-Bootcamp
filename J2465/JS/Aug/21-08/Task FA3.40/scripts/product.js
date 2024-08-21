const _name = Symbol("name");
const _price = Symbol("price");
const _category = Symbol("category");

class Product {
  constructor(name, price, category) {
    this[_name] = name;
    this[_price] = price;
    this[_category] = category;
  }

  getInfo() {
    return `Name: ${this[_name]}, Price: ${this[_price]}, Category: ${this[_category]}`;
  }
}

export { Product };
