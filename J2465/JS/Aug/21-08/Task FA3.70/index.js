import { Developer } from "./scripts/developer.js";
import { Manager } from "./scripts/manager.js";
import { EmployeeList } from "./scripts/employeeList.js";

const employeeList = new EmployeeList();

function addEmployee() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const role = document.getElementById("role").value;
  const skill = document.getElementById("skill").value;
  const task = document.getElementById("task").value;

  if (name && age && role && skill) {
    const developer = new Developer(name, age, role, skill);
    employeeList.add(developer);
    displayEmployees();
    resetForm();
  } else if (name && age && role && task) {
    const manager = new Manager(name, age, role, task);
    employeeList.add(manager);
    displayEmployees();
    resetForm();
  } else {
    alert("Please fill in all fields");
  }
}

function displayEmployees() {
  document.getElementById("employees").innerHTML = "";

  employeeList.get().forEach((employee) => {
    const p = document.createElement("p");
    p.innerHTML = employee.getInfo();
    document.getElementById("employees").appendChild(p);
  });
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("role").value = "";
  document.getElementById("skill").value = "";
  document.getElementById("task").value = "";
}

document.getElementById("add-employee").addEventListener("click", addEmployee);
