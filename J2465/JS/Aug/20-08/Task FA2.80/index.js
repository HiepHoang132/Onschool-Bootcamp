class Vehicle {
  #name;
  #brand;
  #type;

  constructor(name, brand, type) {
    this.#name = name;
    this.#brand = brand;
    this.#type = type;
  }

  getName() {
    return this.#name;
  }

  getBrand() {
    return this.#brand;
  }

  getType() {
    return this.#type;
  }

  getInfo() {
    return `Name: ${this.#name}, Brand: ${this.#brand}, Type: ${this.#type}`;
  }
}

class Car extends Vehicle {
  #numberOfDoors;

  constructor(name, brand, type, numberOfDoors) {
    super(name, brand, type);
    this.#numberOfDoors = numberOfDoors;
  }

  getInfo() {
    return `${super.getInfo()}, Number of doors: ${this.#numberOfDoors}`;
  }
}

class Motorcycle extends Vehicle {
  #engineCapacity;

  constructor(name, brand, type, engineCapacity) {
    super(name, brand, type);
    this.#engineCapacity = engineCapacity;
  }

  getInfo() {
    return `${super.getInfo()}, Engine capacity: ${this.#engineCapacity}`;
  }
}

function addVehicle() {
  const name = document.getElementById("name").value;
  const brand = document.getElementById("brand").value;
  const type = document.getElementById("type").value;
  const doors = document.getElementById("doors").value;
  const engine = document.getElementById("engine").value;

  if (name && brand && type && doors) {
    const car = new Car(name, brand, type, doors);
    const p = document.createElement("p");
    p.innerHTML = car.getInfo();
    document.getElementById("vehicle-list").append(p);
    resetForm();
  } else if (name && brand && type && engine) {
    const motorcycle = new Motorcycle(name, brand, type, engine);
    const p = document.createElement("p");
    p.innerHTML = motorcycle.getInfo();
    document.getElementById("vehicle-list").append(p);
    resetForm();
  } else {
    alert("Please fill in all fields");
  }
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("brand").value = "";
  document.getElementById("type").value = "";
  document.getElementById("doors").value = "";
  document.getElementById("engine").value = "";
}

document.getElementById("add-vehicle").addEventListener("click", addVehicle);
