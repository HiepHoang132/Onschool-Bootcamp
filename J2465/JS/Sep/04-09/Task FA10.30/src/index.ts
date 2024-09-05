// Function with Type Annotation
function add(a: number, b: number): number {
  return a + b;
}

// Function with Type Inference
const multiply = (a: number, b: number) => {
  return a * b;
};

// Function with Optional Parameters
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

// Function with Rest Parameters
function concatenate(separator: string, ...items: string[]): string {
  return items.join(separator);
}

// Interface for Person
interface Person {
  name: string;
  age: number;
  greet(): void;
}

// Object implementing Person interface
const person: Person = {
  name: "Alice",
  age: 25,
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};

// Display results in HTML
const appDiv: HTMLElement = document.getElementById("app")!;
appDiv.innerHTML = `
<h1>TypeScript với Webpack</h1>
<div class="card">
  <h2>Functions and Results</h2>
  <p><strong>Add (5 + 3):</strong> ${add(5, 3)}</p>
  <p><strong>Multiply (5 * 3):</strong> ${multiply(5, 3)}</p>
  <p><strong>Greet ('Alice'):</strong> ${greet("Alice")}</p>
  <p><strong>Concatenate ('-', 'a', 'b', 'c'):</strong> ${concatenate("-","a","b","c")}</p>
  <p><strong>Person Greeting:</strong> ${person.greet()}</p>
</div>
`;
