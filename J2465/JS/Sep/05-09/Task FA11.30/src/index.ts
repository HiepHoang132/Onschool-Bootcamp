interface Student {
  id: number;
  name: string;
  age: number;
}

interface Course {
  id: number;
  title: string;
  credits: number;
}

interface Enrollment {
  studentId: number;
  courseId: number;
}

class DataManager<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const studentManager = new DataManager<Student>();
const courseManager = new DataManager<Course>();
const enrollmentManager = new DataManager<Enrollment>();

studentManager.add({ id: 1, name: "John", age: 16 });
studentManager.add({ id: 2, name: "Jane", age: 17 });

courseManager.add({ id: 1, title: "Mathematics", credits: 3 });
courseManager.add({ id: 2, title: "English", credits: 2 });

enrollmentManager.add({ studentId: 1, courseId: 1 });
enrollmentManager.add({ studentId: 2, courseId: 2 });

function displayStudents() {
  const students = studentManager.getAll();
  const courses = courseManager.getAll();
  const enrollments = enrollmentManager.getAll();

  const studentsDiv = document.getElementById("students")!;
  studentsDiv.innerHTML = ""; // Clear existing content

  students.forEach((student) => {
    const studentDiv = document.createElement("div");
    studentDiv.className = "student";
    studentDiv.textContent = `Student: ${student.name}, Age: ${
      student.age
    }, Courses: ${getCourses(student.id, enrollments, courses).join(",")}`;
    studentsDiv.appendChild(studentDiv);
  });
}

function getCourses(
  studentId: number,
  enrollments: Enrollment[],
  courses: Course[]
): string[] {
  const filterEnrollments = enrollments.filter(
    (enrollment) => enrollment.studentId === studentId
  );
  if (filterEnrollments.length === 0) return ["Unknown"];

  return filterEnrollments.map((enrollment) => {
    const course = courses.find((course) => course.id === enrollment.courseId);
    return course.title;
  });
}

// Initial display
displayStudents();

document.getElementById("add-student")!.addEventListener("click", () => {
  const newStudent: Student = {
    id: studentManager.getAll().length + 1,
    name: "Alice",
    age: 18,
  };
  studentManager.add(newStudent);
  displayStudents();
});
