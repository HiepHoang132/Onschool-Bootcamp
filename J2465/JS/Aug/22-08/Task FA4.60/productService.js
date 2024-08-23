import { Product } from "./product.js";

const BASE_URL = "https://fakestoreapi.com/products";

async function fetchProducts(url, options = {}) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 404) throw new Error("Resource not found.");
      else throw new Error(`HTTP error! Status:${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

$("#get-product-btn").click(async () => {
  const data = await fetchProducts(BASE_URL);
  if (data) {
    const categories = [...new Set(data.map((product) => product.category))];
    categories.forEach((category) => {
      var $option = $("<option>").text(category);
      $("#select-category").append($option);
    });

    $("#product-title").html("<h4 class='mt-3 mb-2'>Danh sách sản phẩm</h4>");
    displayProducts(data);

    $("#select-category").change((e) => {
      filterProductsByCategory(data, e.target.value);
    });
  }
});

function displayProducts(data) {
  $("#product-list").html("");

  data.forEach((item) => {
    const product = new Product(item);
    const $div = $("<div>").html(product.getProductInfo());
    $("#product-list").append($div);
  });
}

function filterProductsByCategory(products, category) {
  if (category !== "") {
    $("#product-title").html("<h4 class='mt-3 mb-2'>Sản phẩm theo bộ lọc</h4>");
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    displayProducts(filteredProducts);
  } else {
    $("#product-title").html("<h4 class='mt-3 mb-2'>Danh sách sản phẩm</h4>");
    displayProducts(products);
  }
}
