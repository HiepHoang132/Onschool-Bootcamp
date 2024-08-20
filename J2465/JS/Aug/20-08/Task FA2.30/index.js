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

class Admin extends User {
  constructor(name, age, email) {
    super(name, age, email);
    this.role = "admin";
  }

  getInfo() {
    return `${super.getInfo()}, Role: ${this.role}`;
  }
}

class Guest extends User {
  constructor(name, age, email, guestPass) {
    super(name, age, email);
    this.guestPass = guestPass;
  }

  getInfo() {
    return `${super.getInfo()}, Guest pass: ${this.guestPass}`;
  }
}

const displayUserButton = () => {
  const user = new User("Michel", 30, "michel@example.com");
  document.getElementById("result").innerHTML = user.getInfo();
};

const displayAdminButton = () => {
  const admin = new Admin("Henry", 24, "henry@example.com");
  document.getElementById("result").innerHTML = admin.getInfo();
};

const displayGuestButton = () => {
  const guest = new Guest("Henry", 24, "henry@example.com", "GUEST12345");
  document.getElementById("result").innerHTML = guest.getInfo();
};

document
  .getElementById("show-info-user")
  .addEventListener("click", displayUserButton);

document
  .getElementById("show-info-admin")
  .addEventListener("click", displayAdminButton);

document
  .getElementById("show-info-guest")
  .addEventListener("click", displayGuestButton);
