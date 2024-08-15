const BASE_URL = "https://630890e4722029d9ddd245bc.mockapi.io/api/v1";
let popularCourses = [];
let trendingCourses = [];

$(document).ready(() => {
  fetchAllCourses();
  displayCourse("#popular", popularCourses);
  displayCourse("#trending", trendingCourses);
});

function fetchAllCourses() {
  $.ajax({
    url: BASE_URL + "/courses",
    type: "GET",
    dataType: "json",
    async: false,
    success: categorizeCourses,
    errror: (xhr) => console.log(xhr.responseText),
  });
}

function categorizeCourses(courses) {
  courses.forEach((course) => {
    if (course.isPopular) {
      popularCourses.push(course);
    }
    if (course.isTrending) {
      trendingCourses.push(course);
    }
  });
}

function displayCourse(containerId, courseData) {
  var $row = $(`${containerId} .row`);
  let html = "";

  for (var i = 0; i < 4; i++) {
    html += `
        <div class="col-3">
            <div class="card" style="width: 16rem">
            <img src="${courseData[i].coverImage}" class="card-img-top course-image" />

            <div class="card-body">
                <div class="description">
                <h6 class="card-title course-name">
                    ${courseData[i].courseName}
                </h6>
                <div class="d-flex mb-2 align-items-center">
                    <img
                    src="images/clock.png"
                    class="card-img-top"
                    style="height: 15px; width: 15px"
                    />
                    <span class="mx-3 course-duration">${courseData[i].duration}</span>
                    <span class="course-level">${courseData[i].level}</span>
                </div>
                </div>
                <div class="price">
                <span class="font-weight-bold course-discount">$${courseData[i].discountPrice}</span>
                <span
                    class="text-secondary course-price"
                    style="text-decoration: line-through"
                    >$${courseData[i].price}</span
                >
                </div>
            </div>

            <div
                class="card-footer d-flex justify-content-between align-items-center"
            >
                <div>
                <img
                    class="course-teacher-photo rounded-circle" style="width: 20%"
                    src="${courseData[i].teacherPhoto}"
                />
                <span class="ml-2 course-teacher">${courseData[i].teacherName}</span>
                </div>
                <button class="btn">
                <img src="images/save.png" style="height: 20px" />
                </button>
            </div>
            </div>
        </div>
    `;
  }

  $row.html(html);
}
