import { Pet } from "./pet.js";

class PetList {
  constructor() {
    this.pets = [];
  }

  add(pet) {
    if (pet instanceof Pet) {
      this.pets.push(pet);
    }
  }

  *[Symbol.iterator]() {
    for (let pet of this.pets) {
      yield pet;
    }
  }

  get() {
    return [...this];
  }
}

export { PetList };
