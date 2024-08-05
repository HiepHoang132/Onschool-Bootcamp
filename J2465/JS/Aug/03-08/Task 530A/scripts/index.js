const BASE_URL = "https://63b401c1ea89e3e3db539072.mockapi.io/api/v1/";
let index = 0;
let countries = [];
let categories = [];
let filterQueries = {
  country: "",
  category: "",
};

$(document).ready(() => {
  onPageLoading();

  $(".edit-product").click(function () {
    loadProductInfo(this);
  });

  $("#filterBtn").click(() => {
    getFilterQueries();
    filterProduct();
  });
});

function onPageLoading() {
  fetchAllCountries();
  fetchAllCategories();
  fetchAllProducts();
}

function fetchAllCountries() {
  $.ajax({
    url: BASE_URL + "countries",
    type: "GET",
    dataType: "json",
    async: false,
    success: function (countryData) {
      countries = countryData;
      loadCountriesToSelect(countryData);
    },
    error: (ajaxContent) => console.log(ajaxContent.responseText),
  });
}

function loadCountriesToSelect(countryData) {
  $.each(countryData, createCountryOption);
}

function createCountryOption(index, country) {
  var $countrySelect = $("#select-country");
  var $countryEditSelect = $("#select-edit-country");

  var $option1 = $("<option/>")
    .attr("value", country.id)
    .text(country.countryName);

  var $option2 = $("<option/>")
    .attr("value", country.id)
    .text(country.countryName);

  $countrySelect.append($option1);
  $countryEditSelect.append($option2);
}

function fetchAllCategories() {
  $.ajax({
    url: BASE_URL + "categories",
    type: "GET",
    dataType: "json",
    async: false,
    success: function (categoryData) {
      categories = categoryData;
      loadCategoriesToSelect(categoryData);
    },
    error: (ajaxContent) => console.log(ajaxContent.responseText),
  });
}

function loadCategoriesToSelect(categoryData) {
  $.each(categoryData, createCategoryOption);
}

function createCategoryOption(index, category) {
  var $categorySelect = $("#select-category");
  var $categoryEditSelect = $("#select-edit-category");

  var $option1 = $("<option/>")
    .attr("value", category.id)
    .text(category.categoryName);

  var $option2 = $("<option/>")
    .attr("value", category.id)
    .text(category.categoryName);

  $categorySelect.append($option1);
  $categoryEditSelect.append($option2);
}

function fetchAllProducts() {
  $.ajax({
    url: BASE_URL + "products",
    type: "GET",
    dataType: "json",
    async: false,
    success: loadProductsToTable,
    error: (ajaxContent) => console.log(ajaxContent.responseText),
  });
}

var arrayColumns = [
  "id",
  "productCode",
  "productName",
  "categoryId",
  "countryId",
  "imagUrl",
  "discountPrice",
  "price",
  "action",
];

var $productTable = $("#product-table").DataTable({
  columns: arrayColumns.map((col) => ({ data: col })),
  columnDefs: [
    {
      targets: 0,
      render: generateIndex,
    },
    {
      targets: 3,
      render: (data) => {
        return getCategoryName(data);
      },
    },
    {
      targets: 4,
      render: (data) => {
        return getCountryName(data);
      },
    },
    {
      targets: 5,
      render: (data) => {
        return `<img src='${data}' width='100%' height='auto'>`;
      },
    },
    {
      targets: 8,
      defaultContent: `
                <img class="edit-product" src="https://cdn0.iconfinder.com/data/icons/glyphpack/45/edit-alt-512.png" style="width: 20px;cursor:pointer;">
                <img class="delete-product" src="https://cdn4.iconfinder.com/data/icons/complete-common-version-6-4/1024/trash-512.png" style="width: 20px;cursor:pointer;">
            `,
    },
  ],
});

function loadProductsToTable(productData) {
  $productTable.clear();
  $productTable.rows.add(productData);
  $productTable.draw();
}

function generateIndex() {
  return ++index;
}

function getCountryName(countryId) {
  const country = countries.find((country) => country.id === countryId);
  return country ? country.countryName : "Unknown";
}

function getCategoryName(categoryId) {
  const category = categories.find((category) => category.id === categoryId);
  return category ? category.categoryName : "Unknown";
}

function getProductImage(imageUrl) {
  return imageUrl
    ? `<img src='${imageUrl}' width='100%' height='auto'>`
    : "Unknown";
}

function loadProductInfo(button) {
  var $row = $productTable.row($(button).closest("tr")).data();
  $("#product-img").attr("src", $row.imagUrl).css({ width: "40% " });
  $("#input-edit-product-code").val($row.productCode);
  $("#input-edit-product-name").val($row.productName);
  $("#select-edit-category").val($row.categoryId);
  $("#select-edit-country").val($row.countryId);
  $("#input-edit-discount").val($row.discountPrice);
  $("#input-edit-price").val($row.price);

  $("#edit-product-modal").modal("show");
}

function getFilterQueries() {
  filterQueries.country = $("#select-country").find(":selected").text().trim();
  filterQueries.category = $("#select-category")
    .find(":selected")
    .text()
    .trim();
}

function filterProduct() {
  $("#product-table tbody tr").each(function () {
    var $row = $(this);
    var $category = $row.find("td:eq(3)").text().trim();
    var $country = $row.find("td:eq(4)").text().trim();

    // Determine if the row should be visible
    const showRow =
      (filterQueries.country === "-- Chọn quốc gia --" ||
        filterQueries.country === $country) &&
      (filterQueries.category === "-- Chọn nhóm sản phẩm --" ||
        filterQueries.category === $category);

    $row.toggle(showRow);
  });
}
