const _name = Symbol("name");
const _age = Symbol("age");
const _role = Symbol("role");

class Employee {
  constructor(name, age, role) {
    this[_name] = name;
    this[_age] = age;
    this[_role] = role;
  }

  getInfo() {
    return `Name: ${this[_name]}, Age: ${this[_age]}, Role: ${this[_role]}`;
  }
}

export { Employee };
