"use strict";
$(document).ready(function () {
  $("#btn-set-color-children").on("click", setColorForChildren);
  $("#btn-set-color-children-class-a").on("click", setColorForChildAClass);
  $("#btn-set-color-children-class-b").on("click", setColorForChildBClass);
  $("#btn-search-parents").on("click", setColorForParents);
  $("#btn-filter-setting").on("click", setFilterSetting);
});

// button 1: set color for children
// TODO: ấn thử nút để xem kết quả
function setColorForChildren() {
  console.log("find the children");
  $(".descendants") // select những element có class descendants
    .children() //chọn children của các element này
    .css({ color: "red", border: "2px solid red" }); //set màu, border...
}

// button 2: set color for child-a class
// TODO: ấn thử nút để xem kết quả
function setColorForChildAClass() {
  $(".descendants") //select những element có class descendants
    .children() //select elemetns
    .find(".child-a") //tìm những element có class child-a
    .css({ color: "blue", border: "2px solid red" });
}

// button 3: set color for child-b class
// TODO: thực hiện code cho nút (3) để set color cho child-b theo cách khác đã làm ở button 2
function setColorForChildBClass() {
  $(".descendants")
    .children()
    .find(".child-b")
    .css({ color: "blue", border: "2px solid red" });
}

// button 4: set color for parents
function setColorForParents() {
  console.log("parents");
  $("#span-d").css({ color: "blue", border: "2px solid blue" });
  // TODO: hãy bỏ comment (mỗi lần CHỈ THỬ 1 dòng) để thử lần lượt các dòng lệnh này
  $("#span-d").parent().css({"color": "blue", "border": "2px dotted green"}); // cha trực tiếp
  $("#span-d").parents("ul").css({"color": "blue", "border": "2px dotted green"});
  $("#span-d").parents().last().css({"color": "blue", "border": "2px dotted green"}); //document body
  $("div").last().find("li").css("border", "1px solid blue");
  $("div.form-group").find("div").last().find("li").css("border", "1px solid blue");
}

// button 5: div filter setting
// TODO: tìm thẻ p đầu tiên là con của thẻ div class .descendants theo 2 cách
function setFilterSetting() {
    
    var firstWay = $(".descendants").children().eq(0)
    console.log("Cách tìm thứ nhất: " + firstWay.html())

    var secondWay = $(".descendants").find("p:first");
    console.log("Cách tìm thứ hai: " + secondWay.html())

}
