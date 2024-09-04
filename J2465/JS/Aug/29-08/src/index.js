import "./styles/main.scss";

document.addEventListener("DOMContentLoaded", function () {
  var sidebar = document.getElementById("sidebar");
  var sidebarToggles = document.querySelectorAll(".sidebar-toggle");
  var closeBtn = document.getElementById("close-btn");
  var overlay = document.getElementById("overlay");

  // Loop through all toggle buttons and add click event
  sidebarToggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      sidebar.classList.add("active");
      overlay.classList.add("active");
    });
  });

  closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", function () {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });
});
