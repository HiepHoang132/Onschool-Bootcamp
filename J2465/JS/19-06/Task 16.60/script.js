"use strict"
/*** REGION 1 - Global variables - Vùng khai báo biến, hằng số, tham số TOÀN CỤC */

/*** REGION 2 - Vùng gán / thực thi hàm xử lý sự kiện cho các elements */

/*** REGION 3 - Event handlers - Vùng khai báo các hàm xử lý sự kiện */
//khi click nút new coin
function onNewCoinClick() {
  var vSoMoi = soBatKyTu1Den2()
  console.log("Số mới là: " + vSoMoi)

  var vImgCoin = document.getElementById("img-new-coin-display")

  if (vSoMoi === 1) {
    vImgCoin.src = "images/flip-coin/head.png"
  } else if (vSoMoi == 2) {
    vImgCoin.src = "images/flip-coin/tail.png"
  }
}

/*** REGION 4 - Common funtions - Vùng khai báo hàm dùng chung trong toàn bộ chương trình*/
// hàm sinh số ngẫu nhiên từ 1 đến 2
function soBatKyTu1Den2() {
  var vSoBatKyTu1Den2 = Math.floor(Math.random() * 2 + 1)
  console.log("Số bất kỳ từ 1 đến 2 là: " + vSoBatKyTu1Den2)
  return vSoBatKyTu1Den2
}

function onNewOTTClick() {
  var vSoMoi = soBatKyTu1Den3()
  var vImgOTT = document.getElementById("img-new-OTT-display")

  if (vSoMoi === 1) {
    vImgOTT.src = "images/oantuti/bua_green.png"
  } else if (vSoMoi === 2) {
    vImgOTT.src = "images/oantuti/keo_green.png"
  } else if (vSoMoi === 3) {
    vImgOTT.src = "images/oantuti/giay_green.png"
  }
}

function soBatKyTu1Den3() {
  var vSoBatKyTu1Den3 = Math.floor(Math.random() * 3 + 1)
  return vSoBatKyTu1Den3
}
