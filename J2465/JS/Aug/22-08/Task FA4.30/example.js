"use strict";
const gREQUEST_STATUS_OK = 200;
const gREQUEST_READY_STATUS_FINISH_AND_OK = 4;
const gREQUEST_CREATE_SUCCESS = 201; // status 201 - tạo thành công
// lấy danh sách order
function onBtnGetAllOrderClick() {
  "use strict";
  //base url
  const vBASE_URL = "http://203.171.20.210:8080/devcamp-pizza365/orders";

  // create a request
  var vXmlHttpGetAllOrder = new XMLHttpRequest();
  vXmlHttpGetAllOrder.open("GET", vBASE_URL, true);
  vXmlHttpGetAllOrder.send();
  vXmlHttpGetAllOrder.onreadystatechange = function () {
    if (
      this.readyState == gREQUEST_READY_STATUS_FINISH_AND_OK &&
      this.status == gREQUEST_STATUS_OK
    ) {
      var vOrderList = vXmlHttpGetAllOrder.responseText;
      console.log(vOrderList);
    }
  };
}

// tạo một order mới
function onBtnCreateOrderClick() {
  "use strict";
  //base url
  const vBASE_URL = "http://203.171.20.210:8080/devcamp-pizza365/orders";
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

  var vXmlHttpCreateOrder = new XMLHttpRequest();
  vXmlHttpCreateOrder.open("POST", vBASE_URL, true);
  vXmlHttpCreateOrder.setRequestHeader(
    "Content-Type",
    "application/json;charset=UTF-8"
  );
  vXmlHttpCreateOrder.send(JSON.stringify(vObjectRequest));
  vXmlHttpCreateOrder.onreadystatechange = function () {
    if (
      this.readyState == gREQUEST_READY_STATUS_FINISH_AND_OK &&
      this.status == gREQUEST_CREATE_SUCCESS
    ) {
      // status 201 tao thanh cong
      var vCreatedOrder = vXmlHttpCreateOrder.responseText;
      console.log(vCreatedOrder);
    }
  };
}

// lấy thông tin đơn hàng (order) theo orderCode (mã đơn hàng)
function onBtnGetOrderByOrderCodeClick() {
  "use strict";
  //base url
  const vBASE_URL = "http://203.171.20.210:8080/devcamp-pizza365/orders";
  var vOrderCode = "hdZJRBKkPS";

  var vXmlHttpGetOrderById = new XMLHttpRequest();
  vXmlHttpGetOrderById.open("GET", vBASE_URL + "/" + vOrderCode, true);
  vXmlHttpGetOrderById.send();
  vXmlHttpGetOrderById.onreadystatechange = function () {
    if (
      this.readyState == gREQUEST_READY_STATUS_FINISH_AND_OK &&
      this.status == gREQUEST_STATUS_OK
    ) {
      console.log(vXmlHttpGetOrderById.responseText);
    }
  };
}

//update một order mới, sử dụng id
function onBtnUpdateOrderClick() {
  "use strict";
  //base url
  const vBASE_URL = "http://203.171.20.210:8080/devcamp-pizza365/orders";
  var vId = 66684; //  là id (66684) của đơn hàng (không phải là orderCode (mã đơn hàng: hdZJRBKkPS))
  // xem chuỗi response Text
  /* 
     {"id":66684,"orderCode":"hdZJRBKkPS","kichCo":"M","duongKinh":"25","suon":4,"salad":"300","loaiPizza":"HAWAII","idVourcher":"16512",
     "thanhTien":200000,"giamGia":20000,"idLoaiNuocUong":"PEPSI","soLuongNuoc":3,"hoTen":"Phạm Thanh Bình","email":"binhpt001@devcamp.edu.vn","soDienThoai":"0865241654",
     "diaChi":"Hà Nội","loiNhan":"Pizza đế dày","trangThai":"open","ngayTao":1669276471561,"ngayCapNhat":1669276471561}
     */
  var vObjectRequest = {
    trangThai: "confirmed", //3 trạng thái: open, confirmed, cancel
  };

  var vXmlHttpUpdateOrder = new XMLHttpRequest();
  vXmlHttpUpdateOrder.open("PUT", vBASE_URL + "/" + vId);
  vXmlHttpUpdateOrder.setRequestHeader(
    "Content-Type",
    "application/json;charset=UTF-8"
  );
  vXmlHttpUpdateOrder.send(JSON.stringify(vObjectRequest));
  vXmlHttpUpdateOrder.onreadystatechange = function () {
    if (
      this.readyState == gREQUEST_READY_STATUS_FINISH_AND_OK &&
      this.status == gREQUEST_STATUS_OK
    ) {
      var vUpdatedOrder = vXmlHttpUpdateOrder.responseText;
      console.log(vUpdatedOrder);
    }
  };
}

//check mã giảm giá
function onBtnCheckVoucherIdClick() {
  "use strict";
  const vBASE_URL =
    "http://203.171.20.210:8080/devcamp-pizza365/voucher_detail";
  var vVoucherId = "12332"; //một số mã đúng để test: 95531, 81432,...lưu ý test cả mã sai
  // nếu mã giảm giấ đã nhập, tạo xmlHttp  request và gửi về server
  var vXmlHttp = new XMLHttpRequest();
  vXmlHttp.open("GET", vBASE_URL + "/" + vVoucherId, false);
  vXmlHttp.send(null);
  var vStatusCode = vXmlHttp.status;
  if (vStatusCode == gREQUEST_STATUS_OK) {
    // restFullAPI successful
    // nhận lại response dạng JSON ở xmlHttp.responseText và chuyển thành object
    console.log(vXmlHttp.responseText);
  } else {
    // không nhận lại được data do vấn đề gì đó: khả năng mã voucher không dúng
    console.log("Không tìm thấy voucher " + vVoucherId);
  }
}

//mã nguồn để load data drink list (danh sách loại nước uống) về
function onBtnGetDrinkListClick() {
  "use strict";
  const vBASE_URL = "http://203.171.20.210:8080/devcamp-pizza365/drinks";
  var vXhttp = new XMLHttpRequest();
  vXhttp.onreadystatechange = function () {
    if (
      this.readyState == gREQUEST_READY_STATUS_FINISH_AND_OK &&
      this.status == gREQUEST_STATUS_OK
    ) {
      console.log(vXhttp.responseText); //ghi response text ra console.log
    }
  };
  vXhttp.open("GET", vBASE_URL, true);
  vXhttp.send();
}
