import { User } from "./user.js";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

async function fetchUsers(url, options = {}) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 404) throw new Error("Resource not found.");
      else throw new Error(`HTTP error! Status:${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

$("#get-user-btn").click(async () => {
  const data = await fetchUsers(BASE_URL);
  if (data) {
    const names = [...new Set(data.map((user) => user.name))];
    names.forEach((name) => {
      var $option = $("<option>").text(name);
      $("#select-name").append($option);
    });

    $("#user-title").html("<h4 class='mt-3 mb-2'>Danh sách user</h4>");
    displayUsers(data);

    $("#select-name").change((e) => {
      filterUserByNames(data, e.target.value);
    });
  }
});

function displayUsers(data) {
  $("#user-list").html("");

  data.forEach((item) => {
    const user = new User(item);
    const $div = $("<div>").html(user.getUserInfo());
    $("#user-list").append($div);
  });
}

function filterUserByNames(users, name) {
  if (name !== "") {
    $("#user-title").html("<h4 class='mt-3 mb-2'>User theo bộ lọc</h4>");
    const filteredUsers = users.filter(
      (user) => user.name === name
    );
    displayUsers(filteredUsers);
  } else {
    $("#user-title").html("<h4 class='mt-3 mb-2'>Danh sách user</h4>");
    displayUsers(users);
  }
}
