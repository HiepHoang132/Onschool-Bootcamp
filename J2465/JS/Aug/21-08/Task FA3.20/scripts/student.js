const _name = Symbol("name");
const _age = Symbol("age");
const _class = Symbol("class");

class Student {
  constructor(studentName, studentAge, studentClass) {
    this[_name] = studentName;
    this[_age] = studentAge;
    this[_class] = studentClass;
  }

  getInfo() {
    return `Name: ${this[_name]}, Age: ${this[_age]}, Class: ${this[_class]}`;
  }
}

export { Student };
