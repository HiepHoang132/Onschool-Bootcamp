"use strict";
const BASE_URL_ORDERS = "http://203.171.20.210:8080/devcamp-pizza365/orders";
const BASE_URL_VOUCHERS =
  "http://203.171.20.210:8080/devcamp-pizza365/voucher_detail";
const BASE_URL_DRINKS = "http://203.171.20.210:8080/devcamp-pizza365/drinks";

// lấy danh sách order
function onBtnGetAllOrderClick() {
  console.log("%cDanh sách pizza orders", "color: red");
  fetch(BASE_URL_ORDERS)
    .then((response) => {
      if (!response) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((jsonData) => {
      console.log(JSON.stringify(jsonData, null, 2));
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// tạo một order mới
function onBtnCreateOrderClick() {
  // khai báo object order để chứa thông tin đặt hàng với 14 thuộc tính
  var vObjectRequest = {
    kichCo: "M",
    duongKinh: "25",
    suon: "4",
    salad: "300",
    loaiPizza: "HAWAII",
    idVourcher: "16512",
    idLoaiNuocUong: "PEPSI",
    soLuongNuoc: "3",
    hoTen: "Phạm Thanh Bình",
    thanhTien: "200000",
    email: "binhpt001@devcamp.edu.vn",
    soDienThoai: "0865241654",
    diaChi: "Hà Nội",
    loiNhan: "Pizza đế dày",
  };

  fetch(BASE_URL_ORDERS, {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=UTF-8" },
    body: JSON.stringify(vObjectRequest),
  })
    .then((response) => {
      if (!response) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((jsonData) => {
      console.log("%cPizza order mới được thêm", "color: red");
      console.log(JSON.stringify(jsonData));
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// lấy thông tin đơn hàng (order) theo orderCode (mã đơn hàng)
function onBtnGetOrderByOrderCodeClick() {
  const order_code = "iO1BnnX7Wk";
  fetch(BASE_URL_ORDERS + "/" + order_code)
    .then((response) => {
      if (!response) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((jsonData) => {
      console.log("%cPizza order tìm được", "color: red");
      console.log(JSON.stringify(jsonData));
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

//update một order mới, sử dụng id
function onBtnUpdateOrderClick() {
  var order_id = 209415; //  là id (209415) của đơn hàng (không phải là orderCode (mã đơn hàng: iO1BnnX7Wk))
  // xem chuỗi response Text
  /* 
        {"id":209415, "orderCode":"iO1BnnX7Wk", "kichCo":null, "duongKinh":null, "suon":0, "salad":null, 
        "loaiPizza":"Bacon", "idVourcher":null, "thanhTien":0, "giamGia":0, "idLoaiNuocUong":null, "soLuongNuoc":0, 
        "hoTen":null, "email":"tien.tran@gmail.com", "soDienThoai":null, "diaChi":"thu duc", 
        "loiNhan":"Order ???c t?o t? Khách hàng", "trangThai":"open", "ngayTao":1724311766815, "ngayCapNhat":1724311766815}     
    */
  var objectRequest = {
    hoTen: "Michael Jordan",
    trangThai: "confirmed", //3 trạng thái: open, confirmed, cancel
  };

  fetch(BASE_URL_ORDERS + "/" + order_id, {
    method: "PUT",
    headers: { "Content-Type": "application/json;chartset=UTF-8" },
    body: JSON.stringify(objectRequest),
  })
    .then((response) => {
      if (!response) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((jsonData) => {
      console.log("%cSửa thông tin pizza order thành công", "color: red");
      console.log(JSON.stringify(jsonData));
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

//check mã giảm giá
function onBtnCheckVoucherIdClick() {
  var voucherId = "12332"; //một số mã đúng để test: 95531, 81432,...lưu ý test cả mã sai

  fetch(BASE_URL_VOUCHERS + "/" + voucherId)
    .then((response) => {
      if (!response.ok) {
        // Check for 404 error and handle it separately
        if (response.status === 404) {
          throw new Error("Voucher not found. Please check the voucher ID.");
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      }
      return response.json();
    })
    .then((jsonData) => {
      console.log("%cVoucher tìm được", "color: red");
      console.log(JSON.stringify(jsonData, null, 2));
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

//mã nguồn để load data drink list (danh sách loại nước uống) về
function onBtnGetDrinkListClick() {
  fetch(BASE_URL_DRINKS)
    .then((response) => {
      if (!response) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((jsonData) => {
      console.log("%cDrink list tìm được", "color: red");
      console.log(JSON.stringify(jsonData, null, 2));
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
