// Mảng gUserObjects là mảng chứa dữ liệu users
var gUserObjects = [
  {
    id: 2,
    username: "quannv",
    firstname: "Ngo Van",
    lastname: "Quan",
    age: 18,
    email: "quan@gmail.com",
    roleId: 5,
  },
  {
    id: 3,
    username: "longdh",
    firstname: "Do Hoang",
    lastname: "Long",
    age: 19,
    email: "long@gmail.com",
    roleId: 8,
  },
  {
    id: 4,
    username: "hiendt",
    firstname: "Do Thi",
    lastname: "Hien",
    age: 29,
    email: "hien@gmail.com",
    roleId: 11,
  },
  {
    id: 6,
    username: "lanht",
    firstname: "Ho Thi",
    lastname: "Lan",
    age: 27,
    email: "lan@gmail.com",
    roleId: 13,
  },
];

// Mảng gRoleObjects là mảng chứa dữ liệu các roles
var gRoleObjects = [
  {
    roleId: 5,
    roleName: "Admin",
  },
  {
    roleId: 8,
    roleName: "Manager",
  },
  {
    roleId: 11,
    roleName: "Teacher",
  },
  {
    roleId: 13,
    roleName: "Staff",
  },
];

$(document).ready(() => {
  loadOptionsToSelect();
  loadDataToTable(gUserObjects);

  $("#filter-btn").click(() => {
    filterRole();
  });

  $("#user-table").on("click", ".dice-history", function () {
    redirectToDiceHistory($(this).closest("tr"));
  });
});

function loadDataToTable(data) {
  $userTable.clear().rows.add(data).draw();
}

function loadOptionsToSelect() {
  var $selectElement = $("#select-role");
  const options = gRoleObjects.map((role) =>
    $("<option>").val(role.roleId).text(role.roleName)
  );
  $selectElement.append(options);
}

function redirectToDiceHistory($row) {
  const queryParams = new URLSearchParams({
    username: $row.find("td:eq(1)").html(),
    firstname: $row.find("td:eq(2)").html(),
    lastname: $row.find("td:eq(3)").html(),
  });

  window.location.href = `diceHistory.html?${queryParams.toString()}`;
}

let index = 0;
var arrayColumns = [
  "id",
  "username",
  "firstname",
  "lastname",
  "email",
  "age",
  "roleId",
  "action",
];

var $userTable = $("#user-table").DataTable({
  columns: arrayColumns.map((col) => ({ data: col })),
  columnDefs: [
    {
      targets: 0,
      render: generateIndex,
    },
    {
      targets: 6,
      render: generateRole,
    },
    {
      targets: 7,
      defaultContent: `
        <i class="fas fa-dice mr-2 dice-history" style='color: blue; cursor: pointer'></i> 
        <i class="fas fa-gift" style='color: blue; cursor: pointer''></i>        
        `,
    },
  ],
});

function generateIndex() {
  return ++index;
}

function generateRole(roleId) {
  var role = gRoleObjects.find((role) => role.roleId === roleId);
  return role ? role.roleName : "";
}

function filterRole() {
  var roleId = $("#select-role").find(":selected").text();

  $userTable
    .column(6)
    .search(roleId !== "0" ? roleId : "")
    .draw();
}
