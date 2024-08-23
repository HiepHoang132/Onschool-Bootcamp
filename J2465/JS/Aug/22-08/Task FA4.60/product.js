class Product {
  constructor(product) {
    const { id, title, price, description, category, image, rating } = product;
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.image = image;
    this.rating = rating;
  }

  getProductInfo() {
    return `
        <img src='${this.image}' class='mb-4' style='width: 9%'>
        <p>Id: ${this.id}</p>
        <p>Title: ${this.title}</p>
        <p>Price: $${this.price}</p>
        <p>Description: ${this.description}</p>
        <p>Category: ${this.category}</p>
        <p>Rate: ${this.rating["rate"]}</p>
        <p>Count: ${this.rating["count"]}</p>
    `;
  }
}

export { Product };
