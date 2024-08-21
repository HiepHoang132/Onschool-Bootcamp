import { Cat } from "./scripts/cat.js";
import { Dog } from "./scripts/dog.js";
import { PetList } from "./scripts/petList.js";

const petList = new PetList();

function addPet() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const type = document.getElementById("type").value;
  const breed = document.getElementById("breed").value;
  const color = document.getElementById("color").value;

  if (name && age && type && breed) {
    const dog = new Dog(name, age, type, breed);
    petList.add(dog);
    displayPets();
    resetForm();
  } else if (name && age && type && color) {
    const cat = new Cat(name, age, type, color);
    petList.add(cat);
    displayPets();
    resetForm();
  } else {
    alert("Please fill in all fields");
  }
}

function displayPets() {
  document.getElementById("pets").innerHTML = "";

  petList.get().forEach((pet) => {
    const p = document.createElement("p");
    p.innerHTML = pet.getInfo();
    document.getElementById("pets").appendChild(p);
  });
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("type").value = "";
  document.getElementById("breed").value = "";
  document.getElementById("color").value = "";
}

document.getElementById("add-pet").addEventListener("click", addPet);
