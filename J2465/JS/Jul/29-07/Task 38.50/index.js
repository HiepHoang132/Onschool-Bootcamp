$(document).ready(() => {
  const loadFromLocalStorage = () => {
    const listItems = JSON.parse(localStorage.getItem("listItems")) || [];
    listItems.forEach((item) => $("#list-item").append(`<li>${item}</li>`));
  };

  loadFromLocalStorage();

  $("#input-item").keypress(function (e) {
    if (e.key === "Enter" && $(this).val().trim()) {
      var item = $(this).val().trim();
      $("#list-item").append(`<li>${item}</li>`);
      $(this).val("");
      saveToLocalStorage();
    }
  });

  const saveToLocalStorage = () => {
    const listItems = $("#list-item")
      .children()
      .map(function () {
        return $(this).text();
      })
      .get();
    localStorage.setItem("listItems", JSON.stringify(listItems));
  };

  $("#clearBtn").click(() => {
    $("#list-item").empty();
    localStorage.removeItem("listItems");
  });
});
