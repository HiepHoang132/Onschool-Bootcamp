const BASE_URL_ORDERS = "http://203.171.20.210:8080/devcamp-pizza365/orders";
const BASE_URL_VOUCHERS =
  "http://203.171.20.210:8080/devcamp-pizza365/voucher_detail";
const BASE_URL_DRINKS = "http://203.171.20.210:8080/devcamp-pizza365/drinks";

async function fetchUrl(url, options = {}) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Resource not found.");
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

// lấy danh sách order
async function onBtnGetAllOrderClick() {
  const data = await fetchUrl(BASE_URL_ORDERS);
  if (data) {
    console.log("%cPizza orders tìm được", "color: red");
    console.log(JSON.stringify(data, null, 2));
  }
}

// tạo một order mới
async function onBtnCreateOrderClick() {
  var objectRequest = {
    kichCo: "M",
    duongKinh: "25",
    suon: "4",
    salad: "300",
    loaiPizza: "HAWAII",
    idVourcher: "16512",
    idLoaiNuocUong: "PEPSI",
    soLuongNuoc: "3",
    hoTen: "Meow Meowwwwwww",
    thanhTien: "200000",
    email: "catWorld@yahoo.com",
    soDienThoai: "0865241654",
    diaChi: "Hà Nội",
    loiNhan: "Pizza đế dày",
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=UTF-8" },
    body: JSON.stringify(objectRequest),
  };
  const data = await fetchUrl(BASE_URL_ORDERS, options);
  if (data) {
    console.log("%cThêm pizza order", "color: red");
    console.log(JSON.stringify(data, null, 2));
  }
}

// lấy thông tin đơn hàng (order) theo orderCode (mã đơn hàng)
async function onBtnGetOrderByOrderCodeClick() {
  const orderCode = "kUGTPnse6t";
  const url = BASE_URL_ORDERS + "/" + orderCode;
  const data = await fetchUrl(url);
  if (data) {
    console.log(
      `%cPizza tìm được dựa vào order code: ${orderCode}`,
      "color: red"
    );
    console.log(JSON.stringify(data, null, 2));
  }
}

//update một order mới, sử dụng id
async function onBtnUpdateOrderClick() {
  var orderId = 209418; //  là id (209418) của đơn hàng (không phải là orderCode (mã đơn hàng: OGS7BqkrHg))
  // xem chuỗi response Text
  /* 
    {
        "id": 209418,
        "orderCode": "OGS7BqkrHg",
        "kichCo": "M",
        "duongKinh": "25",
        "suon": 4,
        "salad": "300",
        "loaiPizza": "HAWAII",
        "idVourcher": "16512",
        "thanhTien": 200000,
        "giamGia": 20000,
        "idLoaiNuocUong": "PEPSI",
        "soLuongNuoc": 3,
        "hoTen": "Ph?m Thanh Bình",
        "email": "binhpt001@devcamp.edu.vn",
        "soDienThoai": "0865241654",
        "diaChi": "Hà N?i",
        "loiNhan": "Pizza ?? dày",
        "trangThai": "open",
        "ngayTao": 1724315617860,
        "ngayCapNhat": 1724315617860
    }     
  */
  var objectRequest = {
    hoTen: "Trinh Thang Binh",
    trangThai: "confirmed", //3 trạng thái: open, confirmed, cancel
  };

  const url = BASE_URL_ORDERS + "/" + orderId;
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json;charset=UTF-8" },
    body: JSON.stringify(objectRequest),
  };

  const data = await fetchUrl(url, options);
  if (data) {
    console.log("%cSửa thông tin pizza order thành công", "color: red");
    console.log(JSON.stringify(data, null, 2));
  }
}

//check mã giảm giá
async function onBtnCheckVoucherIdClick() {
  var voucherId = "12332"; //một số mã đúng để test: 95531, 81432,...lưu ý test cả mã sai
  const url = BASE_URL_VOUCHERS + "/" + voucherId;
  const data = await fetchUrl(url);
  if (data) {
    console.log("%cTìm thấy voucher", "color: red");
    console.log(JSON.stringify(data, null, 2));
  }
}

//mã nguồn để load data drink list (danh sách loại nước uống) về
async function onBtnGetDrinkListClick() {
  const data = await fetchUrl(BASE_URL_DRINKS);
  if (data) {
    console.log("%cDanh sách nước uống", "color: red");
    console.log(JSON.stringify(data, null, 2));
  }
}
