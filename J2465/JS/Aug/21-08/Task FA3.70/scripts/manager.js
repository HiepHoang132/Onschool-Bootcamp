import { Employee } from "./employee.js";

const _task = Symbol("task");

class Manager extends Employee {
  constructor(name, age, type, task) {
    super(name, age, type);
    this[_task] = task;
  }

  getInfo() {
    return `${super.getInfo()}, Task: ${this[_task]}`;
  }
}

export { Manager };
