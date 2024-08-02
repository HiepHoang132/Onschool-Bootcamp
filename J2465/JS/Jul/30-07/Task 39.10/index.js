// TODO 1 - Import Datatable sau jquery
// Import style bootstrap cho datatable

"use strict";
$(document).ready(function () {
  onPageLoading();

  function onPageLoading() {
   $("#user-table").DataTable({
      paging: true,
      lengthChange: true,
      searching: true,
      ordering: true,
    });
  }
});
