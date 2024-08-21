const _name = Symbol("name");
const _age = Symbol("age");
const _type = Symbol("type");

class Pet {
  constructor(name, age, type) {
    this[_name] = name;
    this[_age] = age;
    this[_type] = type;
  }

  getInfo() {
    return `Name: ${this[_name]}, Age: ${this[_age]}, Type: ${this[_type]}`;
  }
}

export { Pet };
