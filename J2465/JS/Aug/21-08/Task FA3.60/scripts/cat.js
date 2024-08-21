import { Pet } from "./pet.js";

const _color = Symbol("color");

class Cat extends Pet {
  constructor(name, age, type, color) {
    super(name, age, type);
    this[_color] = color;
  }

  getInfo() {
    return `${super.getInfo()}, color: ${this[_color]}`;
  }
}

export { Cat };
