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
          });
      }
    });
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
  setInputValue("input-duong-kinh", formatDiameter(data["duongKinh"]));
  setInputValue("input-drink", data["idLoaiNuocUong"]);
  setInputValue("input-voucher-id", data["idVourcher"]);
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

  if (!data.orderCode) {
    alerts.push("Order code chưa được nhập");
  }

  if (!data.duongKinh) {
    alerts.push("Đường kính chưa được nhập");
  }

  if (data.idLoaiNuocUong === "0") {
    alerts.push("Đồ uống chưa được chọn");
  }

  if (!data.salad) {
    alerts.push("Salad chưa được nhập");
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

  if (!data.suon) {
    alerts.push("Sườn nướng (miếng) chưa được nhập");
  }

  if (!data.soLuongNuoc) {
    alerts.push("Số lượng nước uống chưa được nhập");
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

  if (!data.ngayCapNhat) {
    alerts.push("Ngày cập nhật chưa được nhập");
  }

  if (!data.ngayTao) {
    alerts.push("Ngày tạo chưa được nhập");
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
