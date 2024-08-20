class Employee {
  #name;
  #age;
  #position;

  constructor(name, age, position) {
    this.#name = name;
    this.#age = age;
    this.#position = position;
  }

  getName() {
    return this.#name;
  }

  getAge() {
    return this.#age;
  }

  getPosition() {
    return this.#position;
  }

  getInfo() {
    return `Name: ${this.#name}, Age: ${this.#age}, Position: ${
      this.#position
    }`;
  }
}

class TechnicalStaff extends Employee {
  #technicalSkill;

  constructor(name, age, position, technicalSkill) {
    super(name, age, position);
    this.#technicalSkill = technicalSkill;
  }

  getTechnicalSkill() {
    return this.#technicalSkill;
  }

  getInfo() {
    return `${super.getInfo()}, Technical skill: ${this.#technicalSkill}`;
  }
}

class AdministrativeStaff extends Employee {
  #administrativeTask;

  constructor(name, age, position, administrativeTask) {
    super(name, age, position);
    this.#administrativeTask = administrativeTask;
  }

  getAdministrativeTask() {
    return this.#administrativeTask;
  }

  getInfo() {
    return `${super.getInfo()}, Administrative task: ${
      this.#administrativeTask
    }`;
  }
}

function addEmployee() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const position = document.getElementById("position").value;
  const technicalSkill = document.getElementById("technical-skill").value;
  const administrativeTask = document.getElementById("administrative-task").value;

  if (name && age && position && technicalSkill) {
    const technicalStaff = new TechnicalStaff(
      name,
      age,
      position,
      technicalSkill
    );
    const p = document.createElement("p");
    p.innerHTML = technicalStaff.getInfo();
    document.getElementById("employee-list").append(p);
    resetForm();
  } else if (name && age && position && administrativeTask) {
    const administrativeStaff = new AdministrativeStaff(
      name,
      age,
      position,
      administrativeTask
    );
    const p = document.createElement("p");
    p.innerHTML = administrativeStaff.getInfo();
    document.getElementById("employee-list").append(p);
    resetForm();
  } else {
    alert("Please fill in all fields");
  }
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("position").value = "";
  document.getElementById("technical-skill").value = "";
  document.getElementById("administrative-task").value = "";
}

document.getElementById("add-employee").addEventListener("click", addEmployee);
