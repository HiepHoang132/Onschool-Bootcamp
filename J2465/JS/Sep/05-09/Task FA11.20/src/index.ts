interface Student {
  name: string;
  age: number;
  scores: {
    math: number;
    english: number;
    science: number;
  };
}

// Mapped Type to create a readonly version of Student
type ReadonlyStudent = {
  readonly [K in keyof Student]: Student[K];
};

// Conditional Type to check if a property is required or optional
type RequiredPropertyNames<T> = {
  [K in keyof T]: T[K] extends undefined ? never : K;
}[keyof T];

type OptionalPropertyNames<T> = {
  [K in keyof T]: T[K] extends undefined ? K : never;
}[keyof T];

type RequiredProperties<T> = Pick<T, RequiredPropertyNames<T>>;
type OptionalProperties<T> = Pick<T, OptionalPropertyNames<T>>;

const students: Student[] = [
  {
    name: "John",
    age: 16,
    scores: {
      math: 90,
      english: 85,
      science: 88,
    },
  },
  {
    name: "Jane",
    age: 17,
    scores: {
      math: 92,
      english: 87,
      science: 91,
    },
  },
];

function displayStudents(students: ReadonlyStudent[]) {
  const studentsDiv = document.getElementById("students")!;
  studentsDiv.innerHTML = ""; // Clear existing content

  students.forEach((student) => {
    const studentDiv = document.createElement("div");
    studentDiv.className = "student";
    studentDiv.textContent = `Name: ${student.name}, Age: ${student.age}, Math: ${student.scores.math}, English: ${student.scores.english}, Science: ${student.scores.science}`;
    studentsDiv.appendChild(studentDiv);
  });
}

// Initial display
displayStudents(students);

document.getElementById("add-student")!.addEventListener("click", () => {
  const newStudent: Student = {
    name: "Alice",
    age: 18,
    scores: {
      math: 95,
      english: 90,
      science: 93,
    },
  };
  students.push(newStudent);
  displayStudents(students);
});
