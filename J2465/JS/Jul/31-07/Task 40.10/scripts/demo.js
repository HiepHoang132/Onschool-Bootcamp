$(document).ready(function () {
  //gán sự kiện click cho button my Modal
  $("#btn-show-modal").click(function () {
    $("#my-modal").modal("show");
  });
  // gán sự kiện click cho nút ok ở modal
  $("#btn-modal-ok").click(function () {
    $("#my-modal").modal("hide");
  });

  // khi có sự kiện modal show lên thì sẽ làm gì đó?
  $("#my-modal").on("shown.bs.modal", function () {
    $("#myInput").val("Hello");
    $("#myInput").trigger("focus");
  });

  // khi có sự kiện modal ẩn đi thì sẽ làm gì đó?
  $("#my-modal").on("hidden.bs.modal", function () {
    console.log("Modal hide");
  });
});
