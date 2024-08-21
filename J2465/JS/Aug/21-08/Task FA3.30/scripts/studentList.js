import { Student } from "./student.js";

class StudentList {
  constructor() {
    this.students = [];
  }

  add(student) {
    if (student instanceof Student) {
      this.students.push(student);
    } else {
      throw new Error("Only instances of Student can be added.");
    }
  }

  *[Symbol.iterator]() {
    for (let student of this.students) {
      yield student;
    }
  }

  get() {
    return [...this];
  }
}

export { StudentList };
