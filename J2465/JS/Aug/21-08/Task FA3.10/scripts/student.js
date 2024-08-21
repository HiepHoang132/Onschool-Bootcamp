class Student {
  constructor(studentName, studentAge, studentClass) {
    this.studentName = studentName;
    this.studentAge = studentAge;
    this.studentClass = studentClass;
  }

  getInfo() {
    return `Name: ${this.studentName}, Age: ${this.studentAge}, Class: ${this.studentClass}`;
  }
}

export { Student };
