/***
* TODO: gán data user vào DataTale, render cột STT và mapping được roleId thành roleName

*** Gợi ý cho cột STT ***
* a) sử dụng phương thức render trong cột STT (định nghĩa ở columnDefs); 
* b) khai báo 1 biến toàn cục STT và mỗi lần render thì tăng lên 1

* *** Gợi ý cho cột role ***
* a) sử dụng phương thức render trong cột Role (định nghĩa ở columnDefs); 
* b) khai báo 1 hàm từ roleId trả về roleName, và đc gọi hàm này trong phương thức render ở trên
*/

$(document).ready(function () {
  var gJsonUser = `{
    "description": "Data user",
    "users": [
        {
            "id": 2,
            "username": "quannv",
            "firstname": "Ngo Van",
            "lastname": "Quan",
            "age": 18,
            "email": "quan@gmail.com",
            "roleId": 5
        },
        {
            "id": 3,
            "username": "longdh",
            "firstname": "Do Hoang",
            "lastname": "Long",
            "age": 19,
            "email": "long@gmail.com",
            "roleId": 8
        },
        {
            "id": 4,
            "username": "hiendt",
            "firstname": "Do Thi",
            "lastname": "Hien",
            "age": 29,
            "email": "hien@gmail.com",
            "roleId": 11
        },
        {
            "id": 6,
            "username": "lanht",
            "firstname": "Ho Thi",
            "lastname": "Lan",
            "age": 27,
            "email": "lan@gmail.com",
            "roleId": 13
        }
    ]}`;

  var gJsonRole = `{
    "description": "User Roles",
    "roles": [
        {
            "roleId": 5,
            "roleName": "Admin" 
        },
        {
            "roleId": 8,
            "roleName": "Manager" 
        },
        {
            "roleId": 11,
            "roleName": "Teacher" 
        },
        {
            "roleId": 13,
            "roleName": "Staff" 
        }
    ]}`;

  var userData = JSON.parse(gJsonUser)["users"];
  var userRoles = JSON.parse(gJsonRole)["roles"];
  var index = 0;

  var arrayCols = [
    "id",
    "username",
    "firstname",
    "lastname",
    "email",
    "age",
    "roleId",
    "action",
  ];

  const generateIndex = () => {
    return ++index;
  };

  const generateRole = (roleId) => {
    const role = userRoles.find((userRole) => userRole.roleId === roleId);
    return role ? role.roleName : "N/A";
  };

  const showUserInfo = (row) => {
    const id = row.find("td:nth-child(1)").html();
    const username = row.find("td:nth-child(2)").html();
    const firstName = row.find("td:nth-child(3)").html();
    const lastName = row.find("td:nth-child(4)").html();
    const email = row.find("td:nth-child(5)").html();
    const age = row.find("td:nth-child(6)").html();
    const roleName = row.find("td:nth-child(7)").html();

    console.log("%cThông tin user", "color: blue");
    console.log(`Id: ${id}`);
    console.log(`Username: ${username}`);
    console.log(`First name: ${firstName}`);
    console.log(`Last name: ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Email: ${email}`);
    console.log(`Role name: ${roleName}`);
  };

  $("#user-table").on("click", ".infoBtn", function () {
    var $row = $(this).closest("tr");
    showUserInfo($row);
  });

  $("#user-table").DataTable({
    columns: arrayCols.map((col) => ({ data: col })),
    data: userData,
    columnDefs: [
      { targets: 0, render: generateIndex },
      { targets: 6, render: generateRole },
      {
        targets: 7,
        defaultContent:
          "<button class='btn btn-info infoBtn'>Chi tiết</button>",
      },
    ],
  });
});
