const BASE_URL = "http://203.171.20.210:8080/devcamp-pizza365/orders";
const BASE_URL_DRINKS = "http://203.171.20.210:8080/devcamp-pizza365/drinks";
const BASE_URL_VOUCHERS =
  "http://203.171.20.210:8080/devcamp-pizza365/voucher_detail";

var phanTramGiamGia = 0;
const REQUEST_STATUS_OK = 200;
const REQUEST_READY_STATUS_FINISH_AND_OK = 4;

function onPageLoading() {
  document.getElementById("button-confirm").disabled = false;
  document.getElementById("button-cancel").disabled = false;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (!id && !params.get("orderCode")) {
    alert("Id hoặc orderCode bị thiếu ở query string");
    window.location.href = "index.html";
  }
  getOrderByOrderCode(params.get("orderCode"));

  getDrinkList();

  const voucherId = params.get("idVourcher");

  validateVoucher(voucherId)
    .then((response) => {
      const voucher = JSON.parse(response.responseText);
      phanTramGiamGia = voucher["phanTramGiamGia"];
    })
    .catch((error) => {
      alert(error.message);
      giamGiaElement.value = "0";
    });

  document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const submitButton = document.activeElement;
    const submitStatus = submitButton.dataset.submitStatus;

    if (submitStatus === "confirmed") {
      data = getDataForm();
      if (validate(data)) {
        data["trangThai"] = "confirmed";
        sendPutRequest(data, id);
      }
    } else if (submitStatus === "cancel") {
      data = getDataForm();
      if (validate(data)) {
        data["trangThai"] = "cancel";
        sendPutRequest(data, id);
      }
    }
  });

  document
    .getElementById("input-voucher-id")
    .addEventListener("change", (e) => {
      var giamGiaElement = document.getElementById("input-giam-gia");

      if (e.target.value === "") {
        giamGiaElement.value = "0";
        phanTramGiamGia = "0";
      } else {
        validateVoucher(e.target.value)
          .then((response) => {
            const voucher = JSON.parse(response.responseText);
            phanTramGiamGia = voucher["phanTramGiamGia"];
            var tongTien = document.getElementById("input-thanh-tien").value;
            giamGiaElement.value = (phanTramGiamGia * tongTien) / 100;
          })
          .catch((error) => {
            alert(error.message);
            giamGiaElement.value = "0";
            phanTramGiamGia = "0";
          });
      }
    });

  document.getElementById("input-combo").addEventListener("change", (e) => {
    updateAttributes(e);
  });

  document.getElementById("input-thanh-tien").addEventListener("change", () => {
    var giamGiaElement = document.getElementById("input-giam-gia");
    var tongTien = document.getElementById("input-thanh-tien").value;
    giamGiaElement.value = (phanTramGiamGia * tongTien) / 100;
  });
}

function updateAttributes(e) {
  var duongKinhElement = document.getElementById("input-duong-kinh");
  var suonElement = document.getElementById("input-suon-nuong");
  var saladElement = document.getElementById("input-salad");
  var soLuongNuocElement = document.getElementById("input-so-luong-drink");
  var thanhTienElement = document.getElementById("input-thanh-tien");

  if (e.target.value === "S") {
    duongKinhElement.value = "20cm";
    suonElement.value = "2";
    saladElement.value = "200g";
    soLuongNuocElement.value = "2";
    thanhTienElement.value = 150000;

    // Manually trigger the change event on input-thanh-tien
    var event = new Event("change");
    thanhTienElement.dispatchEvent(event);
  } else if (e.target.value === "M") {
    duongKinhElement.value = "25cm";
    suonElement.value = "4";
    saladElement.value = "300g";
    soLuongNuocElement.value = "3";
    thanhTienElement.value = 200000;

    // Manually trigger the change event on input-thanh-tien
    var event = new Event("change");
    thanhTienElement.dispatchEvent(event);
  } else if (e.target.value === "L") {
    duongKinhElement.value = "30cm";
    suonElement.value = "8";
    saladElement.value = "500g";
    soLuongNuocElement.value = "4";
    thanhTienElement.value = 250000;

    // Manually trigger the change event on input-thanh-tien
    var event = new Event("change");
    thanhTienElement.dispatchEvent(event);
  } else {
    duongKinhElement.value = "";
    suonElement.value = "";
    saladElement.value = "";
    soLuongNuocElement.value = "";
    thanhTienElement.value = ""; // Manually trigger the change event on input-thanh-tien
    var event = new Event("change");
    thanhTienElement.dispatchEvent(event);
  }
}

function getOrderByOrderCode(orderCode) {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", `${BASE_URL}/${orderCode}`, true);
  xmlHttp.send();
  xmlHttp.onload = () => {
    if (
      xmlHttp.readyState === REQUEST_READY_STATUS_FINISH_AND_OK &&
      xmlHttp.status === REQUEST_STATUS_OK
    ) {
      console.log(xmlHttp.responseText);
      displayOrder(xmlHttp);
      disableButton(xmlHttp);
    }
  };
}

function disableButton(xmlHttp) {
  var data = JSON.parse(xmlHttp.responseText);
  if (data["trangThai"] === "cancel") {
    document.getElementById("button-confirm").disabled = true;
    document.getElementById("button-cancel").disabled = true;
  }
  if (data["trangThai"] === "confirmed") {
    document.getElementById("button-confirm").disabled = true;
  }
}

function displayOrder(xmlHttp) {
  const data = JSON.parse(xmlHttp.responseText);
  setInputValue("input-order-code", data["orderCode"]);
  setInputValue("input-combo", data["kichCo"]);
  setInputValue("input-drink", data["idLoaiNuocUong"]);
  setInputValue("input-voucher-id", data["idVourcher"]);
  setInputValue("input-email", data["email"]);
  setInputValue("input-dia-chi", data["diaChi"]);
  setInputValue("input-trang-thai", data["trangThai"]);
  setInputValue("input-combo", data["kichCo"]);
  setInputValue("input-pizza", data["loaiPizza"]);
  setInputValue("input-ho-va-ten", data["hoTen"]);
  setInputValue("input-sdt", data["soDienThoai"]);
  setInputValue("input-loi-nhan", data["loiNhan"]);

  document.getElementById("input-duong-kinh").value = data["duongKinh"];
  document.getElementById("input-salad").value = data["salad"];
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

function getDrinkList() {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", BASE_URL_DRINKS, true);
  xmlHttp.send();
  xmlHttp.onreadystatechange = function () {
    if (
      xmlHttp.readyState === REQUEST_READY_STATUS_FINISH_AND_OK &&
      xmlHttp.status === REQUEST_STATUS_OK
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

function getDataForm() {
  var orderCode = document.getElementById("input-order-code").value.trim();
  var duongKinh = document.getElementById("input-duong-kinh").value;
  var idLoaiNuocUong = document.getElementById("input-drink").value;

  var idVourcher = document.getElementById("input-voucher-id").value;
  if (idVourcher) {
    idVourcher = idVourcher.trim();
  }
  var salad = document.getElementById("input-salad").value;
  var giamGia = document.getElementById("input-giam-gia").value;

  var email = document.getElementById("input-email").value.trim();
  var diaChi = document.getElementById("input-dia-chi").value.trim();
  var trangThai = document.getElementById("input-trang-thai").value;

  var ngayCapNhat = document.getElementById("input-ngay-cap-nhat").value.trim();

  var ngayTao = document.getElementById("input-ngay-tao-don").value.trim();
  var kichCo = document.getElementById("input-combo").value;
  var suon = document.getElementById("input-suon-nuong").value;

  var soLuongNuoc = document.getElementById("input-so-luong-drink").value;
  var loaiPizza = document.getElementById("input-pizza").value;
  var thanhTien = document.getElementById("input-thanh-tien").value;

  var hoTen = document.getElementById("input-ho-va-ten").value.trim();
  var soDienThoai = document.getElementById("input-sdt").value.trim();
  var loiNhan = document.getElementById("input-loi-nhan").value.trim();

  return {
    orderCode,
    duongKinh,
    idLoaiNuocUong,
    idVourcher,
    salad,
    giamGia,
    email,
    diaChi,
    trangThai,
    ngayCapNhat,
    ngayTao,
    kichCo,
    suon,
    soLuongNuoc,
    loaiPizza,
    thanhTien,
    hoTen,
    soDienThoai,
    loiNhan,
  };
}

function validate(data) {
  const alerts = [];

  if (data.idLoaiNuocUong === "0") {
    alerts.push("Đồ uống chưa được chọn");
  }

  if (!data.email) {
    alerts.push("Email chưa được nhập");
  }

  if (!data.diaChi) {
    alerts.push("Địa chỉ chưa được nhập");
  }

  if (data.kichCo === "0") {
    alerts.push("Cỡ combo chưa được chọn");
  }

  if (data.loaiPizza === "0") {
    alerts.push("Loại pizza chưa được chọn");
  }

  if (!data.hoTen) {
    alerts.push("Họ và tên chưa được nhập");
  }

  if (!data.soDienThoai) {
    alerts.push("Số điện thoại chưa được nhập");
  } else if (!validatePhoneNumber(data.soDienThoai)) {
    alerts.push(
      "Số điện thoại chưa đúng định dạng. \nPhải có 10 số hoặc +84 ở đầu"
    );
  }

  if (alerts.length > 0) {
    alert(alerts.join("\n"));
    return false;
  }

  return true;
}

function validateVoucher(voucherId) {
  return new Promise((resolve, reject) => {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", `${BASE_URL_VOUCHERS}/${voucherId}`, true);
    xmlHttp.onload = function () {
      if (xmlHttp.status === REQUEST_STATUS_OK) {
        resolve(xmlHttp);
      } else {
        reject(new Error("Không tìm thấy voucher"));
      }
    };
    xmlHttp.send();
  });
}

function validatePhoneNumber(phoneNumber) {
  var phonePattern = /^\d{10}$/;
  return phonePattern.test(phoneNumber);
}

function sendPutRequest(data, id) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("PUT", `${BASE_URL}/${id}`, true);
  xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlHttp.send(JSON.stringify(data));
  xmlHttp.onreadystatechange = function () {
    if (
      this.status === REQUEST_STATUS_OK &&
      this.readyState === REQUEST_READY_STATUS_FINISH_AND_OK
    ) {
      console.log(this.responseText);
    }
  };
}
