// Object Types
type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  address: Address;
  greet(): string;
};

const person: Person = {
  name: "Alice",
  age: 25,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
  greet() {
    return `Hello, my name is ${this.name} and I live at ${this.address.street}, ${this.address.city}, ${this.address.country}.`;
  },
};

// Interface
interface Vehicle {
  make: string;
  model: string;
  year: number;
  getDetails(): string;
}

const car: Vehicle = {
  make: "Toyota",
  model: "Camry",
  year: 2021,
  getDetails() {
    return `This car is a ${this.year} ${this.make} ${this.model}.`;
  },
};

// Display results in HTML
const appDiv: HTMLElement = document.getElementById("app")!;
appDiv.innerHTML = `
<h1>TypeScript với Webpack</h1>
<div class="card">
  <h2>Person Details</h2>
  <p><strong>Name:</strong> ${person.name}</p>
  <p><strong>Age:</strong> ${person.age}</p>
  <p><strong>Address:</strong> ${person.address.street}, ${
  person.address.city
}, ${person.address.country}</p>
  <p><strong>Greeting:</strong> ${person.greet()}</p>
</div>
<div class="card">
  <h2>Vehicle Details</h2>
  <p><strong>Make:</strong> ${car.make}</p>
  <p><strong>Model:</strong> ${car.model}</p>
  <p><strong>Year:</strong> ${car.year}</p>
  <p><strong>Details:</strong> ${car.getDetails()}</p>
</div>
`;
