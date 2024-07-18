const REQUEST_READY_STATUS_FINISH_AND_OK = 4;
const REQUEST_CREATE_SUCCESS = 201; // status 201 - tạo thành công
const REQUEST_STATUS_OK = 200;

const BASE_URL = "http://203.171.20.210:8080/devcamp-pizza365/orders";
const BASE_URL_DRINKS = "http://203.171.20.210:8080/devcamp-pizza365/drinks";
const BASE_URL_VOUCHERS =
  "http://203.171.20.210:8080/devcamp-pizza365/voucher_detail";

const data = {
  kichCo: "",
  duongKinh: "",
  suon: "",
  salad: "",
  loaiPizza: "",
  idVourcher: "",
  idLoaiNuocUong: "",
  soLuongNuoc: "",
  hoTen: "",
  thanhTien: "",
  giamGia: "",
  email: "",
  soDienThoai: "",
  diaChi: "",
  loiNhan: "",
};

function onPageLoading() {
  getDrinks();
  document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault();
    getDataForm();

    if (validate(data)) {
      addAttributes(data);
      if (data.idVourcher) {
        validateVoucher(data.idVourcher);
      }
      createOrder();
    }
  });
}

function getDrinks() {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", BASE_URL_DRINKS, true);
  xmlHttp.onreadystatechange = function () {
    if (
      this.status === REQUEST_STATUS_OK &&
      this.readyState === REQUEST_READY_STATUS_FINISH_AND_OK
    ) {
      displayDrinkOptions(this);
    }
  };
  xmlHttp.send();
}

function displayDrinkOptions(xmlHttp) {
  var data = JSON.parse(xmlHttp.responseText);
  var drinkSelect = document.getElementById("input-drink");
  data.forEach((item) => {
    var option = document.createElement("option");
    option.value = item["maNuocUong"];
    option.text = item["tenNuocUong"];
    drinkSelect.appendChild(option);
  });
}

function getDataForm() {
  data.kichCo = document.getElementById("input-combo").value;
  data.idVourcher = document.getElementById("input-voucher-id").value.trim();
  data.hoTen = document.getElementById("input-ho-ten").value.trim();
  data.soDienThoai = document.getElementById("input-sdt").value.trim();
  data.idLoaiNuocUong = document.getElementById("input-drink").value;
  data.loaiPizza = document.getElementById("input-pizza").value;
  data.email = document.getElementById("input-email").value.trim();
  data.diaChi = document.getElementById("input-dia-chi").value.trim();
  data.loiNhan = document.getElementById("input-loi-nhan").value.trim();
}

function validate(data) {
  const alerts = [];
  if (data.kichCo === "0") {
    alerts.push("Cỡ combo chưa được chọn");
  }

  if (!data.hoTen) {
    alerts.push("Họ tên chưa được nhập");
  }

  if (!data.soDienThoai) {
    alerts.push("Số điện thoại chưa được nhập");
  } else if (!validatePhone(data.soDienThoai)) {
    alerts.push("Số điện thoại chưa đúng định dạng \nPhải có 10 số");
  }

  if (data.idLoaiNuocUong === "0") {
    alerts.push("Nước uống chưa được chọn");
  }

  if (data.loaiPizza === "0") {
    alerts.push("Loại pizza chưa được chọn");
  }

  if (!data.email) {
    alerts.push("Email chưa được nhập");
  }

  if (!data.diaChi) {
    alerts.push("Địa chỉ chưa được nhập");
  }

  if (alerts.length > 0) {
    alert(alerts.join("\n"));
    return false;
  }

  return true;
}

function validatePhone(phone) {
  var phonePattern = /^\d{10}$/;
  return phonePattern.test(phone);
}

function addAttributes(data) {
  if (data.kichCo === "S") {
    data["duongKinh"] = "20cm";
    data["suon"] = "2";
    data["salad"] = "200g";
    data["soLuongNuoc"] = "2";
    data["thanhTien"] = 150000;
  } else if (data.kichCo === "M") {
    data["duongKinh"] = "25cm";
    data["suon"] = "4";
    data["salad"] = "300g";
    data["soLuongNuoc"] = "3";
    data["thanhTien"] = 200000;
  } else if (data.kichCo === "L") {
    data["duongKinh"] = "30cm";
    data["suon"] = "8";
    data["salad"] = "500g";
    data["soLuongNuoc"] = "4";
    data["thanhTien"] = 250000;
  }
}

function validateVoucher(voucherId) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", `${BASE_URL_VOUCHERS}/${voucherId}`, false);
  xmlHttp.onload = () => {
    if (
      xmlHttp.status === REQUEST_STATUS_OK &&
      xmlHttp.readyState === REQUEST_READY_STATUS_FINISH_AND_OK
    ) {
      const voucher = JSON.parse(xmlHttp.responseText);
      console.log(voucher);
      console.log(`Voucher: ${voucher.phanTramGiamGia}`);
      console.log(`Thanh tien: ${data.thanhTien}`);
      data["giamGia"] =
        (Number(voucher["phanTramGiamGia"]) * Number(data.thanhTien)) / 100;
    } else {
      alert("Không tìm thấy voucher");
      data["giamGia"] = "0";
      data.idVourcher = "";
    }
  };
  xmlHttp.send();
}

function createOrder() {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("POST", BASE_URL, true);
  xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlHttp.send(JSON.stringify(data));
  xmlHttp.onreadystatechange = function () {
    if (
      this.status === REQUEST_CREATE_SUCCESS &&
      this.readyState === REQUEST_READY_STATUS_FINISH_AND_OK
    ) {
      console.log(this.responseText);
    }
  };
}
