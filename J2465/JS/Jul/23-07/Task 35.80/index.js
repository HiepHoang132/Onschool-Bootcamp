"use strict";
// car brand information
var gJsonCarData = `[
  { "brandId": "0", "brandName": "None", "brandTypes": [] },
  {
    "brandId": "1",
    "brandName": "Audi",
    "brandTypes": [
      { "typeId": "0", "typeName": "Q3" },
      { "typeId": "1", "typeName": "Q5" },
      { "typeId": "2", "typeName": "A4" }
    ]
  },
  {
    "brandId": "2",
    "brandName": "BMW",
    "brandTypes": [
      { "typeId": "0", "typeName": "1 series" },
      { "typeId": "1", "typeName": "X series" },
      { "typeId": "2", "typeName": "Z series" }
    ]
  },
  {
    "brandId": "3",
    "brandName": "Citroen",
    "brandTypes": [
      { "typeId": "0", "typeName": "new C3" },
      { "typeId": "1", "typeName": "C4" },
      { "typeId": "2", "typeName": "BERLINGO" }
    ]
  }
]`;

// country information
var gJsonCountryData = `[
  { "countryId": "0", "countryName": "None", "regionTypes": [] },
  {
    "countryId": "1",
    "countryName": "Việt nam",
    "regionTypes": [
      { "regionId": "0", "regionName": "Hà Nội" },
      { "regionId": "1", "regionName": "Hồ Chí Minh" },
      { "regionId": "2", "regionName": "Đà Nẵng" }
    ]
  },
  {
    "countryId": "2",
    "countryName": "Mỹ",
    "regionTypes": [
      { "regionId": "0", "regionName": "Atlanta" },
      { "regionId": "1", "regionName": "New York" },
      { "regionId": "2", "regionName": "Boston" }
    ]
  },
  {
    "countryId": "3",
    "countryName": "Phần lan",
    "regionTypes": [
      { "regionId": "0", "regionName": "Nam Phần Lan" },
      { "regionId": "1", "regionName": "Tây Phần Lan" },
      { "regionId": "2", "regionName": "Đông Phần Lan" }
    ]
  }
]`;

var gObjectCarData = JSON.parse(gJsonCarData);
var gObjectCountryData = JSON.parse(gJsonCountryData);

/**
 * get brandType by brandId
 * input: brandId of a car
 * output: brandType name of found car. If not found, it returns null
 */
function getBrandTypeByBrandID(paramBrandId) {
  var vBrandFound = false;
  var vBrandTypesResult = null;
  var vIterator = 0;
  while (!vBrandFound && vIterator < gObjectCarData.length) {
    if (gObjectCarData[vIterator].brandId === paramBrandId) {
      vBrandFound = true;
      vBrandTypesResult = gObjectCarData[vIterator].brandTypes;
    } else {
      vIterator++;
    }
  }
  return vBrandTypesResult;
}

$(document).ready(() => {
  var $selectCar = $("#car-select");
  $.each(gObjectCarData, (index, car) => {
    var $option = $("<option>");
    $option.val(car["brandId"]).text(car["brandName"]);
    $selectCar.append($option);
  });

  var $selectCountry = $("#country-select");
  $.each(gObjectCountryData, (index, country) => {
    var $option = $("<option>");
    $option.val(country["countryId"]).text(country["countryName"]);
    $selectCountry.append($option);
  });
});

$("#car-select").change(() => {
  var $selectedBrandId = $("#car-select").val();
  //   var carBrandType = getBrandTypeByBrandID($selectedBrandId);

  var $selectedCar = $.grep(
    gObjectCarData,
    (car) => car.brandId === $selectedBrandId
  );
  var carBrandType = $selectedCar[0]["brandTypes"];

  var $selectElement = $("#car-type-select").prop("disabled", false).empty();

  $.each(carBrandType, (index, type) => {
    var $option = $("<option>");
    $option.val(type["typeId"]).text(type["typeName"]);
    $selectElement.append($option);
  });
});

$(".btn-info").click(() => {
  console.log(`Brand id: ${$("#car-select option:selected").val()}`);
  console.log(`Brand name: ${$("#car-select option:selected").text()}`);
  console.log(`Type id: ${$("#car-type-select option:selected").val()}`);
  console.log(`Type name: ${$("#car-type-select option:selected").text()}`);
});

$("#country-select").change(() => {
  var $selectedCountryId = $("#country-select").val();

  var $selectedCountry = $.grep(
    gObjectCountryData,
    (country) => country.countryId === $selectedCountryId
  );

  var regions = $selectedCountry[0]["regionTypes"];
  var $selectRegion = $("#region-type-select").empty();
  $.each(regions, (index, region) => {
    var $option = $("<option>");
    $option.val(region["regionId"]).text(region["regionName"]);
    $selectRegion.append($option);
  });
});
