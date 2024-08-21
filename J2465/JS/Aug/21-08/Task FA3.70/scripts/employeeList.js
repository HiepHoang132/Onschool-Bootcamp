import { Employee } from "./employee.js";

class EmployeeList {
  constructor() {
    this.employees = [];
  }

  add(employee) {
    if (employee instanceof Employee) {
      this.employees.push(employee);
    }
  }

  *[Symbol.iterator]() {
    for (let employee of this.employees) {
      yield employee;
    }
  }

  get() {
    return [...this];
  }
}

export { EmployeeList };
