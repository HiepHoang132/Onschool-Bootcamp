$("#voucher-form-01")
  .children()
  .find(".btn")
  .click(() => {
    var voucherID = $("#voucher-01").val();
    $("#ma-giam-gia-01").addClass("text-success").html(voucherID);
  });

$("#voucher-form-02")
  .children()
  .find(".btn")
  .click(() => {
    $("#ma-giam-gia-02").addClass("border border-danger");
  });

$(".btn-danger").click(() => {
  $("#content-div").removeClass("text-warning").addClass("text-danger");
});

$(".btn-warning").click(() => {
  $("#content-div").removeClass("text-danger").addClass("text-warning");
});
