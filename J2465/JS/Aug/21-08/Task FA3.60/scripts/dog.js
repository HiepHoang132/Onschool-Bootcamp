import { Pet } from "./pet.js";

const _breed = Symbol("breed");

class Dog extends Pet {
  constructor(name, age, type, breed) {
    super(name, age, type);
    this[_breed] = breed;
  }

  getInfo() {
    return `${super.getInfo()}, Breed: ${this[_breed]}`;
  }
}

export { Dog };
