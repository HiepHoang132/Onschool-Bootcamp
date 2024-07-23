const BASE_URL_PHOTOS = "https://jsonplaceholder.typicode.com/albums/3/photos";

$(document).ready(() => {
  $.ajax({
    url: BASE_URL_PHOTOS,
    type: "GET",
    datatype: "json",
    success: loadDataToTable,
    error: (ajaxContent) => console.log(ajaxContent.responseText),
  });
});

function loadDataToTable(res) {
  $.each(res, loadOneDataToTable);
}

function loadOneDataToTable(index, data) {
  var $tableBody = $("#table-photos tbody");
  var $row = $("<tr></tr>");

  var $img = $("<img>")
    .attr("src", data.thumbnailUrl)
    .css("width", "150px")
    .css("height", "150px");

  $row
    .append($("<td></td>").text(index + 1))
    .append($("<td></td>").text(data.albumId))
    .append($("<td></td>").text(data.title))
    .append($("<td></td>").text(data.url))
    .append($("<td></td>").html($img));

  $tableBody.append($row);
}
