var courses = [
  {
    id: 1,
    courseCode: "reactJS",
    coverImage: "assets/images/reactJS.png",
    courseName: "ReactJS - The Complete Guide",
    teacherName: "Maximilian Schwarzmüller",
    courseDesc:
      "Dive in and learn React 16.8 from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
    duration: "45",
    lessons: 146,
    level: "All",
  },
  {
    id: 2,
    courseCode: "nextJS",
    coverImage: "assets/images/nextJS.png",
    courseName: "NextJS - The Complete Guide",
    teacherName: "Jane Smith",
    courseDesc:
      "Get started with NextJS, a powerful React framework for building server-side rendered applications.",
    duration: "20",
    lessons: 40,
    level: "All",
  },
  {
    id: 3,
    courseCode: "vueJS",
    coverImage: "assets/images/vueJS.png",
    courseName: "VueJS Essentials",
    teacherName: "Alice Johnson",
    courseDesc:
      "A comprehensive guide to VueJS, a progressive JavaScript framework for building user interfaces.",
    duration: "10",
    lessons: 28,
    level: "All",
  },
  {
    id: 4,
    courseCode: "JS",
    coverImage: "assets/images/js.png",
    courseName: "JavaScript Basics",
    teacherName: "Bob Brown",
    courseDesc:
      "Learn the basics of JavaScript, the most popular programming language for web development.",
    duration: "9",
    lessons: 24,
    level: "All",
  },
]

function onPageLoading() {
  renderCourseCard()
}

function renderCourseCard() {
  var courseList = document.getElementsByClassName("list-courses")[0]
  courseList.innerHTML = renderAllCoursesToHTML()
}

function renderAllCoursesToHTML() {
  var courseHTML = ""
  for (var course of courses) {
    courseHTML += renderOneCourseToHTML(course)
  }

  return courseHTML
}

function renderOneCourseToHTML(course) {
  return `
        <div class="course-card">
            <div class="course-image">
                <img src="${course.coverImage}" alt="">
            </div>

            <div class="course-text">
                <div class="title">${course.courseName}</div>
                <div class="author">by ${course.teacherName}</div>
                <div class="description">${course.courseDesc}</div>
            </div>

            <div class="course-info">
                <div class="clock">
                    <div class="icon">
                        <img src="assets/images/clock.png" alt="">
                    </div>
                    <div class="text">
                        ${course.duration}<span> hours</span>
                    </div>
                </div>

                <div class="lesson">
                    <div class="icon">
                        <img src="assets/images/lesson.png" alt="">
                    </div>
                    <div class="text">
                        ${course.lessons}<span> lessons</span>
                    </div>
                </div>

                <div class="level">
                    <div class="icon">
                        <img src="assets/images/level.png" alt="">
                    </div>
                    <div class="text">
                        ${course.level}<span> levels</span>
                    </div>
                </div>
            </div>
        </div> 
    `
}

function onButtonFindCourseClick() {
  var courseID = document.getElementById("inp-course-id").value
  var course = getCourseByID(courseID)
  if (course === undefined) {
    alert("Found no course based on given ID")
    renderCourseCard()
  } else {
    var courseList = document.getElementsByClassName("list-courses")[0]
    courseList.innerHTML = renderOneCourseToHTML(course)
  }
}

function getCourseByID(courseID) {
  courseID = Number(courseID)
  var foundCourse = courses.find((course) => course.id === courseID)
  return foundCourse
}
