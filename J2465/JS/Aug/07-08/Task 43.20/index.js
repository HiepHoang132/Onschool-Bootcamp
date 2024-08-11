// Tổng số bản ghi của hệ thống
var gTotalRecords = 100;

// Tham số limit (Số lượng bản ghi tối đa trên 1 trang)
var gPerpage = 3;

// Tổng số trang. Math ceil để lấy số bản ghi tối đa có được. Ví dụ: 10 / 3 = 3.33 => Cần 4 trang hiển thị
var gTotalPages = Math.ceil(gTotalRecords / gPerpage);

$(document).ready(function () {
  // Thực hiện xử lý hiển thị của trang 1
  makecall(1);
});

function createpagination(vPagenum) {
  // Xóa trắng phần tử cũ
  $("#page_container").html("");

  // Nếu trang hiện tại là trang 1 thì nút Prev sẽ bị disable
  if (vPagenum == 1) {
    $("#page_container").append(
      "<li class='page-item disabled previous'><a href='javascript:void(0)' class='page-link'><</a></li>"
    );
  } else {
    $("#page_container").append(
      "<li class='page-item' onclick='makecall(" +
        (vPagenum - 1) +
        ")'><a href='javascript:void(0)' class='page-link'><</a></li>"
    );
  }

  // Hiển thị 3 trang trong phạm vi
  for (var bi = 0; bi <= 2; bi++) {
    if (vPagenum == vPagenum + bi) {
      $("#page_container").append(
        "<li class='page-item disabled'><a href='javascript:void(0)' class='page-link'>" +
          (vPagenum + bi) +
          "</a></li>"
      );
    } else {
      if (vPagenum + bi <= gTotalPages) {
        $("#page_container").append(
          "<li class='page-item' onclick='makecall(" +
            (vPagenum + bi) +
            ")'><a href='javascript:void(0)' class='page-link'>" +
            (vPagenum + bi) +
            "</a></li>"
        );
      }
    }
  }

  // Nếu trang hiện tại là trang cuối cùng thì nút Next sẽ bị disable
  if (vPagenum == gTotalPages) {
    $("#page_container").append(
      "<li class='page-item disabled'><a href='javascript:void(0)' class='page-link'>></a></li>"
    );
  } else {
    $("#page_container").append(
      "<li class='page-item next' onclick='makecall(" +
        (vPagenum + 1) +
        ")'><a href='javascript:void(0)' class='page-link'>></a></li>"
    );
  }
}

function fetch_data(gPerpage, vPagenum) {
  const vQueryParams = new URLSearchParams({
    _start: vPagenum * gPerpage,
    _limit: gPerpage,
  });

  $.ajax({
    type: "get",
    url:
      "https://jsonplaceholder.typicode.com/comments?" +
      vQueryParams.toString(),
    dataType: "json",
    success: function (paramData) {
      // Xóa trắng phần tử cũ
      $(".100_list_container").html("");

      for (var bIndex = 0; bIndex < paramData.length; bIndex++) {
        const bElement = paramData[bIndex];

        // Với mỗi bản ghi sẽ tiến hành tạo một phần tử con để hiển thị
        $(".100_list_container").append(`
                <li class='list-group-item list-item-contains'>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${bElement.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${bElement.email}</h6>
                            <p class="card-text">${bElement.body}</p>
                        </div>
                    </div>
                </li>`);
      }
    },
    error: function () {
      $(".100_list_container").html("error");
    },
  });
}

function makecall(vPagenum) {
  // Hàm tạo thanh phân trang
  createpagination(vPagenum);

  // Hàm hiển thị dữ liệu dựa vào 2 tham số phân trang
  fetch_data(gPerpage, vPagenum);
}
