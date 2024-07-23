const BASE_URL_COMBOS = "https://647406377de100807b1a4df4.mockapi.io/combos";
const BASE_URL_TYPES = "https://647406377de100807b1a4df4.mockapi.io/types";

$(document).ready(() => {
  $.ajax({
    url: BASE_URL_COMBOS,
    type: "GET",
    datatype: "json",
    success: loadComboToCard,
    error: (ajaxContent) => console.log(ajaxContent.responseText),
  });
});

function loadComboToCard(res) {
  $.each(res, loadOneComboToCard);
}

function loadOneComboToCard(index, combo) {
  const $card = $(`.card:eq(${index})`);
  $card.find("#kich-co").html(displayKichCo(combo.kichCo));
  $card.find("#duong-kinh").html(combo.duongKinh);
  $card.find("#suon").html(combo.suonNuong);
  $card.find("#salad").html(combo.salad);
  $card.find("#nuoc-ngot").html(combo.nuocNgot);
  $card.find("#thanh-tien").html(displayThanhTien(combo.thanhTien));
}

function displayKichCo(kichCo) {
  const sizes = {
    S: "Small",
    M: "Medium",
    L: "Large",
  };
  return `${kichCo} (${sizes[kichCo]})`;
}

function displayThanhTien(tien) {
  return tien.replace(/\./g, ",") + " VND";
}
