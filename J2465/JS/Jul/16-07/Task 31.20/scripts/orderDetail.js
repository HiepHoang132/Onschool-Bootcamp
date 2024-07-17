const BASE_URL = "http://203.171.20.210:8080/devcamp-pizza365/orders";
const BASE_URL_DRINKS = "http://203.171.20.210:8080/devcamp-pizza365/drinks";

const gREQUEST_STATUS_OK = 200;
const gREQUEST_READY_STATUS_FINISH_AND_OK = 4;

function onPageLoading() {
  getDrinkList();

  const params = new URLSearchParams(window.location.search);

  if (!params.get("id") && !params.get("orderCode")) {
    alert("Id hoặc orderCode bị thiếu ở query string");
    window.location.href = "index.html";
  }

  getOrderByOrderCode(params.get("orderCode"));
}

function getOrderByOrderCode(orderCode) {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", `${BASE_URL}/${orderCode}`, true);
  xmlHttp.send();
  xmlHttp.onload = () => {
    if (
      xmlHttp.readyState === gREQUEST_READY_STATUS_FINISH_AND_OK &&
      xmlHttp.status === gREQUEST_STATUS_OK
    ) {
      displayOrder(xmlHttp);
    }
  };
}

function displayOrder(xmlHttp) {
  const data = JSON.parse(xmlHttp.responseText);

  setInputValue("input-order-code", data["orderCode"]);
  setInputValue("input-duong-kinh", formatDiameter(data["duongKinh"]));
  setInputValue("input-drink", data["idLoaiNuocUong"]);
  setInputValue("input-voucher-id", data["idVourcher"], "Không áp dụng");
  setInputValue("input-salad", formatSalad(data["salad"]));
  setInputValue("input-email", data["email"]);
  setInputValue("input-dia-chi", data["diaChi"]);
  setInputValue("input-trang-thai", data["trangThai"]);
  setInputValue("input-combo", data["kichCo"]);
  setInputValue("input-pizza", data["loaiPizza"]);
  setInputValue("input-ho-va-ten", data["hoTen"]);
  setInputValue("input-sdt", data["soDienThoai"]);
  setInputValue("input-loi-nhan", data["loiNhan"]);

  document.getElementById("input-giam-gia").value = data["giamGia"];
  document.getElementById("input-ngay-cap-nhat").value = data["ngayCapNhat"];
  document.getElementById("input-ngay-tao-don").value = data["ngayTao"];
  document.getElementById("input-suon-nuong").value = data["suon"];
  document.getElementById("input-so-luong-drink").value = data["soLuongNuoc"];
  document.getElementById("input-thanh-tien").value = data["thanhTien"];
}

function setInputValue(elementId, value, defaultValue = "") {
  const element = document.getElementById(elementId);
  element.value = value ? value.trim() : defaultValue;
}

function formatDiameter(diameter) {
  return diameter && diameter.includes("cm")
    ? diameter.trim().split(" ")[0]
    : diameter;
}

function formatSalad(salad) {
  return salad && salad.includes("g") ? salad.trim().split("g")[0] : salad;
}

function getDrinkList() {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", BASE_URL_DRINKS, true);
  xmlHttp.send();
  xmlHttp.onreadystatechange = function () {
    if (
      xmlHttp.readyState === gREQUEST_READY_STATUS_FINISH_AND_OK &&
      xmlHttp.status === gREQUEST_STATUS_OK
    ) {
      displayDrink(this);
    }
  };
}

function displayDrink(xmlHttp) {
  const data = JSON.parse(xmlHttp.responseText);
  const drinkSelect = document.getElementById("input-drink");

  data.forEach((item) => {
    const option = document.createElement("option");
    option.text = item["tenNuocUong"];
    option.value = item["maNuocUong"];
    drinkSelect.appendChild(option);
  });
}
