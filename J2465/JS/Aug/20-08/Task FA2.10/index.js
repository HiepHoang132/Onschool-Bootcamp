class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
  }
}

const displayUserButton = () => {
  const user = new User("Henry", 24, "henry@example.com");
  document.getElementById("result").innerHTML = user.getInfo();
};

document
  .getElementById("show-info-btn")
  .addEventListener("click", displayUserButton);
