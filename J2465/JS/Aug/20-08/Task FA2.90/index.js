class Pet {
  #name;
  #age;
  #type;

  constructor(name, age, type) {
    this.#name = name;
    this.#age = age;
    this.#type = type;
  }

  getName() {
    return this.#name;
  }

  getAge() {
    return this.#age;
  }

  getType() {
    return this.#type;
  }

  getInfo() {
    return `Name: ${this.#name}, age: ${this.#age}, Type: ${this.#type}`;
  }
}

class Dog extends Pet {
  #breed;

  constructor(name, brand, type, breed) {
    super(name, brand, type);
    this.#breed = breed;
  }

  getInfo() {
    return `${super.getInfo()}, Breed: ${this.#breed}`;
  }
}

class Cat extends Pet {
  #color;

  constructor(name, brand, type, color) {
    super(name, brand, type);
    this.#color = color;
  }

  getInfo() {
    return `${super.getInfo()}, Color: ${this.#color}`;
  }
}

function addVehicle() {
  const name = document.getElementById("name").value;
  const brand = document.getElementById("age").value;
  const type = document.getElementById("type").value;
  const breed = document.getElementById("breed").value;
  const color = document.getElementById("color").value;

  if (name && brand && type && breed) {
    const dog = new Dog(name, brand, type, breed);
    const p = document.createElement("p");
    p.innerHTML = dog.getInfo();
    document.getElementById("pet-list").append(p);
    resetForm();
  } else if (name && brand && type && color) {
    const cat = new Cat(name, brand, type, color);
    const p = document.createElement("p");
    p.innerHTML = cat.getInfo();
    document.getElementById("pet-list").append(p);
    resetForm();
  } else {
    alert("Please fill in all fields");
  }
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("type").value = "";
  document.getElementById("breed").value = "";
  document.getElementById("color").value = "";
}

document.getElementById("add-pet").addEventListener("click", addVehicle);
