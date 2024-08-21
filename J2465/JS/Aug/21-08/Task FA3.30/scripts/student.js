const _name = Symbol("name");
const _age = Symbol("age");
const _class = Symbol("class");

class Student {
  constructor(name, age, studentClass) {
    this[_name] = name;
    this[_age] = age;
    this[_class] = studentClass;
  }

  getInfo() {
    return `Name: ${this[_name]}, Age: ${this[_age]}, Class: ${this[_class]}`;
  }
}

export { Student };
