$(document).ready(function () {
  //gán sự kiện cho nút btn-show-modal-1
  $("#btn-show-modal-1").click(function () {
    $("#p-text-modal").html($("#inp-modal-message").val()); //đọc giá trị ở inp-modal-message và gán vào <p> trên modal
    $("#modal-1").modal();
  });
  //gán sự kiện cho nút btn-close-modal
  $("#btn-close-modal").click(function () {
    $("#modal-1").modal("hide");
  });

  $("#btn-show-modal-2").click(function () {
    $("#p-text-modal-2").html($("#inp-modal-message").val()); //đọc giá trị ở inp-modal-message và gán vào <p> trên modal
    $("#modal-2").modal();
  });

  //gán sự kiện cho nút btn-close-modal
  $("#btn-close-modal-2").click(function () {
    $("#modal-2").modal("hide");
    console.log($("#p-text-modal-2").html());
  });
});
