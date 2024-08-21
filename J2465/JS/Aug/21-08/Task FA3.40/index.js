import { Product } from "./scripts/product.js";
import { ProductList } from "./scripts/productList.js";

const productList = new ProductList();

function addProduct() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const category = document.getElementById("category").value;

  if (name && price && category) {
    const product = new Product(name, price, category);
    productList.add(product);
    displayProducts();
    resetForm();
  } else {
    alert("Please fill in all fields");
  }
}

function displayProducts() {
  document.getElementById("products").innerHTML = "";

  productList.get().forEach((product) => {
    const p = document.createElement("p");
    p.innerHTML = product.getInfo();
    document.getElementById("products").appendChild(p);
  });
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("category").value = "";
}

document.getElementById("add-product").addEventListener("click", addProduct);
