function onBtnTaoListVatNuoiClick() {
  var vDanhSachVatNuoi = ["dog", "cat", "parrot", "rabbit"];
  $("#button-add-pet")
    .append(
      $(document.createElement("label"))
        .prop({ for: "select-pets" })
        .html("Chọn vật nuôi:")
    )
    .append($("<select/>").prop({ id: "select-pets", name: "pets" }));

  for (var bVatNuoi of vDanhSachVatNuoi) {
    $("<option/>")
      .val(bVatNuoi)
      .text(bVatNuoi.toUpperCase())
      .appendTo($("#select-pets"));
  }
}

function onBtnTaoListColorClick() {
  var vDanhSachColor = [
    { black: "Đen" },
    { white: "Trắng" },
    { silver: "Bạc" },
    { blue: "Xanh dương" },
  ];

  $("#button-add-color")
    .append(
      $(document.createElement("label"))
        .prop({ for: "select-colors" })
        .html("Chọn màu sắc (color):")
    )
    .append($("<select/>").prop({ id: "select-colors", name: "colors" }));

  $.each(vDanhSachColor, (index, color) => {
    var colorKey = Object.keys(color)[0];
    var colorValue = color[colorKey];
    console.log(colorValue);
    $("<option/>").val(colorKey).text(colorValue).appendTo($("#select-colors"));
  });
}
