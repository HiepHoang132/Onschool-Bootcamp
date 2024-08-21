import { Employee } from "./employee.js";

const _skill = Symbol("skill");

class Developer extends Employee {
  constructor(name, age, type, skill) {
    super(name, age, type);
    this[_skill] = skill;
  }

  getInfo() {
    return `${super.getInfo()}, Skill: ${this[_skill]}`;
  }
}

export { Developer };
