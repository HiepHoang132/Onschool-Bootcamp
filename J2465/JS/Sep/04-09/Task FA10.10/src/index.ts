// Type Annotation
let greeting: string = "Hello, TypeScript with Webpack!";
console.log(greeting);

// Type Inference
let year = 2024;
console.log(`The year is ${year}`);

// Type Annotation
let isTypescriptAwesome: boolean = true;
console.log(`Is TypeScript awesome? ${isTypescriptAwesome}`);

// Type Inference
let numbers = [1, 2, 3, 4, 5];
console.log("Numbers:", numbers);

// Type Annotation
let tuple: [string, number];
tuple = ["John", 30];
console.log("Tuple:", tuple);

// Enum
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

let color: Color = Color.Green;
console.log(`Color: ${color}`);

// Function with Type Annotation
function add(a: number, b: number): number {
  return a + b;
}
console.log(`Sum: ${add(5, 3)}`);

// Function with Type Inference
const multiply = (a: number, b: number) => {
  return a * b;
};
console.log(`Product: ${multiply(5, 3)}`);

// Optional chaining (TypeScript 3.7+)
let user: any = null;
console.log(user?.profile?.name); // Undefined

// Nullish coalescing (TypeScript 3.7+)
let input: string | null = null;
let defaultValue = input ?? "Default Value";
console.log(defaultValue);

// Hiển thị kết quả trên HTML
const appDiv: HTMLElement = document.getElementById("app")!;
appDiv.innerHTML = `
<h1>TypeScript với Webpack</h1>
<p>Greeting: ${greeting}</p>
<p>Year: ${year}</p>
<p>Is TypeScript Awesome?: ${isTypescriptAwesome}</p>
<p>Numbers: ${numbers.join(", ")}</p>
<p>Tuple: ${tuple.join(", ")}</p>
<p>Color: ${color}</p>
<p>Sum: ${add(5, 3)}</p>
<p>Product: ${multiply(5, 3)}</p>
<p>Default Value: ${defaultValue}</p>
`;
