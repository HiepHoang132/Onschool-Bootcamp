class StudentList {
  constructor() {
    this.students = [];
  }

  add(student) {
    this.students.push(student);
  }

  get(student) {
    return this.students;
  }
}

export { StudentList };