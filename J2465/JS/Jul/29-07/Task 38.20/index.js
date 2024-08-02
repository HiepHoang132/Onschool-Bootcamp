"use strict";
$(document).ready(function () {
  visited();

  $("#btn-clear").on("click", function () {
    clearData();
  });

  function visited() {
    var vVisits = Number(localStorage.getItem("visits"));
    if (vVisits != null) {
      vVisits += 1;
    } else {
      vVisits = 0;
    }

    localStorage.setItem("visits", vVisits);

    $("#visits-element").html(vVisits);
  }

  function clearData() {
    localStorage.clear();
    $("#visits-element").html(0);
  }
});
