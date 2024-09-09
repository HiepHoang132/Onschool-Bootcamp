// Union Types for results
type SuccessResult = { status: 'success'; data: string; };
type ErrorResult = { status: 'error'; message: string; };
type Result = SuccessResult | ErrorResult;

// Intersection Types for student information
type Student = { id: number; name: string; age: number; };
type Course = { id: number; title: string; credits: number; };
type Enrollment = { studentId: number; courseId: number; };
type StudentScore = Student & { scores: { [subject: string]: number; }; };

// Mapped Types to create readonly versions
type ReadonlyStudent = Readonly<Student>;
type ReadonlyCourse = Readonly<Course>;

// Conditional Types to differentiate between required and optional properties
type RequiredPropertyNames<T> = { [K in keyof T]: T[K] extends undefined ? never : K }[keyof T];
type OptionalPropertyNames<T> = { [K in keyof T]: T[K] extends undefined ? K : never }[keyof T];
type RequiredProperties<T> = Pick<T, RequiredPropertyNames<T>>;
type OptionalProperties<T> = Pick<T, OptionalPropertyNames<T>>;

// Generic class to manage data
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
const resultManager = new DataManager<Result>();

studentManager.add({ id: 1, name: 'John', age: 16 });
studentManager.add({ id: 2, name: 'Jane', age: 17 });

courseManager.add({ id: 1, title: 'Mathematics', credits: 3 });
courseManager.add({ id: 2, title: 'English', credits: 2 });

enrollmentManager.add({ studentId: 1, courseId: 1 });
enrollmentManager.add({ studentId: 2, courseId: 2 });

resultManager.add({ status: 'success', data: 'John has passed Mathematics.' });
resultManager.add({ status: 'error', message: 'Jane needs to retake English.' });

function displayStudents() {
  const students = studentManager.getAll();
  const courses = courseManager.getAll();
  const enrollments = enrollmentManager.getAll();
  const results = resultManager.getAll();

  const studentsDiv = document.getElementById('students')!;
  studentsDiv.innerHTML = ''; // Clear existing content

  students.forEach((student) => {
    const studentDiv = document.createElement('div');
    studentDiv.className = 'student';
    studentDiv.textContent = `Student: ${student.name}, Age: ${student.age}, Courses: ${getCourses(student.id, enrollments, courses).join(', ')}`;
    studentsDiv.appendChild(studentDiv);
  });

  results.forEach((result) => {
    const resultDiv = document.createElement('div');
    resultDiv.className = 'result';
    if (result.status === 'success') {
      resultDiv.textContent = `Success: ${result.data}`;
      resultDiv.style.color = 'green';
    } else {
      resultDiv.textContent = `Error: ${result.message}`;
      resultDiv.style.color = 'red';
    }
    studentsDiv.appendChild(resultDiv);
  });
}

function getCourses(studentId: number, enrollments: Enrollment[], courses: Course[]): string[] {
  return enrollments
    .filter((enrollment) => enrollment.studentId === studentId)
    .map((enrollment) => {
      const course = courses.find((course) => course.id === enrollment.courseId);
      return course ? course.title : 'Unknown';
    });
}

// Initial display
displayStudents();

document.getElementById('add-student')!.addEventListener('click', () => {
  const newStudent: Student = {
    id: studentManager.getAll().length + 1,
    name: 'Alice',
    age: 18,
  };
  studentManager.add(newStudent);
  displayStudents();
});

document.getElementById('add-success')!.addEventListener('click', () => {
  const newResult: SuccessResult = { status: 'success', data: 'New success result added!' };
  resultManager.add(newResult);
  displayStudents();
});

document.getElementById('add-error')!.addEventListener('click', () => {
  const newResult: ErrorResult = { status: 'error', message: 'New error result added!' };
  resultManager.add(newResult);
  displayStudents();
});