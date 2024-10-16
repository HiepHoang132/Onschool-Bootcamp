$(document).ready(() => {
  getProvinces();
});

function getProvinces() {
  $.ajax({
    url: "http://localhost:8080/provinces",
    type: "GET",
    dataType: "json",
    success: (data) => {
      loadToSelect(data, "#select-province");
    },
    erro: (error) => {
      console.log(`Error fetching data: ${error.responseText}`);
    },
  });
}

$("#select-province").change(() => {
  var provinceId = $("#select-province").val();
  $("#select-district").html("");
  getDistricts(provinceId);
});

function getDistricts(id) {
  $.ajax({
    url: `http://localhost:8080/districts?provinceId=${id}`,
    type: "GET",
    dataType: "json",
    success: (data) => {
      loadToSelect(data, "#select-district");
    },
    erro: (error) => {
      console.log(`Error fetching data: ${error.responseText}`);
    },
  });
}

$("#select-district").change(() => {
  var districtId = $("#select-district").val();
  $("#select-ward").html("");
  getWards(districtId);
});

function getWards(id) {
  $.ajax({
    url: `http://localhost:8080/wards?districtId=${id}`,
    type: "GET",
    dataType: "json",
    success: (data) => {
      loadToSelect(data, "#select-ward");
    },
    erro: (error) => {
      console.log(`Error fetching data: ${error.responseText}`);
    },
  });
}

function loadToSelect(data, id) {
  data.forEach((item) => {
    var $option = $("<option/>");
    $option.text(item.name);
    $option.val(item.id);
    $(id).append($option);
  });
}
