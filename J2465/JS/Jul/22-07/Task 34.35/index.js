"use strict";
$(document).ready(function () {
  // button 1: ví dụ về chainning - nhiều action được gọi liên tục trong 01 jquery chain
  /* TODO:
          1. Hãy set css để text thành bold (font-weight property)
          2. Hãy add thêm class text-line-through
      */
  $("#btn-change-text").click(function () {
    $("#para-p1") // truy vấn element #para-p1 by ID
      .css("color", "green") // action SET 1: thay màu thành green
      .css("font-style", "italic") // action SET 2: thay font thành italic
      .addClass("text-bordered") // action SET 3: add thêm class text bordered
      .css("font-weight", "bold")
      .css("text-decoration", "line-through");
  });

  /*
   *  button 2: cũng là 01 chain, nhưng ở cuối có method GET
   *  TODO: Gộp 2 lệnh thay đổi css vào thành 1 (vẫn sử dụng phương thức .css() )
   */
  $("#btn-change-text-alert").click(function () {
    var vInnerText = $("#para-p1") // select hay truy vấn element by ID
      .css({ color: "blue" }, { "font-style": "normal" })
      .removeClass("text-bordered") // action SET 3
      .html(); // action GET 4
    alert(vInnerText); // alert giá trị lấy được
  });

  /*
     * BUTTON 3: 
     * sau Get thì không thể sử dụng action Set được nữa, vì đã được trả lại là 01 literal, 
     * không phải jquery element
     * nếu đổi action get (.html()) thành element cuối cùng của chain thì sẽ hết lỗi
     
     * TODO: sửa lỗi cho button 3
     */
  $("#btn-change-text-hide-error").click(function () {
    $("#para-p1")
      .css("color", "blue") // action SET 1
      .css("font-style", "normal") // action SET 2
      .removeClass("text-bordered") // action SET 3
      .hide() // action SET 5
      .html(); // action GET 4
  });

  /*
   *  BUTTON 4:
   * sau Get thì không thể sử dụng action Set được nữa,
   * vì đã được trả lại là 01 literal, không phải jquery element
   * */
  $("#btn-hide-text").click(function () {
    var v$Par1 = $("#para-p1"); //JQUERY SELECT BY ID => jquery element
    var v$Par2 = v$Par1.css("color", "blue"); //SET ACTION => jquery element
    var v$Par3 = v$Par2.css("font-style", "normal"); //jquery element
    var v$Par4 = v$Par3.removeClass("text-bordered"); //jquery element
    var vHtml = v$Par4.html(); //GET action => literal string, là đoạn văn đơn giản (literal)
    console.log(vHtml);
    var v$Par5 = v$Par4.hide(); // jquery element
  });

  /*
   * BUTTON 5: TODO gán sự kiện và viết lại code đã làm cho BUTTON 4, gộp lại sử dụng jquery chaining
   */
  $("#btn-hide-chaining").click(() => {
    $("#para-p1")
      .css({ color: "blue", "font-style": "normal" })
      .removeClass("text-bordered")
      .hide()
      .html();
  });

  /*
      * BUTTON 6: TODO gán sự kiện và thay đổi text của para-p1 thành "Hello Jquery Chain !!!" 
          và hiển thị thẻ ra, dùng 1 chain
      * (button 4 & button 5 đã ẩn p1 đi, button 6 thực hiện show ra)
      */
  $("#btn-change-text-show").click(() => {
    $("#para-p1").html("Hello Jquery Chain !!!").show();
  });
});
