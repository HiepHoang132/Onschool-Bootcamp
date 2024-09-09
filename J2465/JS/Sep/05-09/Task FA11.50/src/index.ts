type PendingOrder = { status: "pending"; estimatedDelivery: Date };
type CompletedOrder = { status: "completed"; deliveryDate: Date };
type OrderStatus = PendingOrder | CompletedOrder;

type Product = { id: number; name: string; price: number };
type Customer = { id: number; name: string; email: string };

type Order = {
  id: number;
  product: Product;
  customer: Customer;
  quantity: number;
} & OrderStatus;

type ReadonlyProduct = Readonly<Product>;
type ReadonlyCustomer = Readonly<Customer>;
type ReadonlyOrder = Readonly<Order>;

type RequiredPropertyNames<T> = {
  [K in keyof T]: T[K] extends undefined ? never : K;
}[keyof T];

type OptionalPropertyNames<T> = {
  [K in keyof T]: T[K] extends undefined ? K : never;
}[keyof T];

type RequiredProperties<T> = Pick<T, RequiredPropertyNames<T>>;
type OptionalProperties<T> = Pick<T, OptionalPropertyNames<T>>;

class DataManager<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const productManager = new DataManager<Product>();
const customerManager = new DataManager<Customer>();
const orderManager = new DataManager<Order>();

productManager.add({ id: 1, name: "Television", price: 30 });
productManager.add({ id: 2, name: "PS5", price: 500 });

customerManager.add({ id: 1, name: "John Doe", email: "johnDoe@gmail.com" });
customerManager.add({ id: 2, name: "Jane Doe", email: "janeDoe@gmail.com" });

orderManager.add({
  id: 1,
  product: { id: 1, name: "Television", price: 30 },
  customer: { id: 1, name: "John Doe", email: "johnDoe@gmail.com" },
  quantity: 1,
  status: "pending",
  estimatedDelivery: new Date("30/9/2024"),
});

orderManager.add({
  id: 2,
  product: { id: 2, name: "PS5", price: 500 },
  customer: { id: 2, name: "Jane Doe", email: "janeDoe@gmail.com" },
  quantity: 1,
  status: "completed",
  deliveryDate: new Date("30/5/2024"),
});

function displayInfo() {
  const products = productManager.getAll();
  const customers = customerManager.getAll();
  const orders = orderManager.getAll();

  const infoDiv = document.getElementById("info");
  infoDiv.innerHTML = "";

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.textContent = `Name: ${product.name}, Price: $${product.price}`;
    infoDiv.appendChild(productDiv);
  });

  customers.forEach((customer) => {
    const customerDiv = document.createElement("div");
    customerDiv.className = "customer";
    customerDiv.textContent = `Name: ${customer.name}, Email: ${customer.email}`;
    infoDiv.appendChild(customerDiv);
  });

  orders.forEach((order) => {
    const orderDiv = document.createElement("div");
    orderDiv.className = "order";
    orderDiv.textContent = `Id: ${order.id},
    Product: ${order.product.name},
    Customer: ${order.customer.name},
    Quantity: ${order.quantity},
    Status: ${order.status}`;
    infoDiv.appendChild(orderDiv);
  });
}

displayInfo();

document.getElementById("add-product")!.addEventListener("click", () => {
  const newProduct: Product = {
    id: productManager.getAll().length + 1,
    name: "Laptop",
    price: 1000,
  };

  productManager.add(newProduct);
  displayInfo();
});

document.getElementById("add-order")!.addEventListener("click", () => {
  const newOrder: Order = {
    id: orderManager.getAll().length + 1,
    product: productManager.getAll()[0],
    customer: customerManager.getAll()[0],
    quantity: 2,
    status: "pending",
    estimatedDelivery: new Date("20/7/2024"),
  };

  orderManager.add(newOrder);
  displayInfo();
});

document.getElementById("add-customer")!.addEventListener("click", () => {
  const newCustomer: Customer = {
    id: customerManager.getAll().length + 1,
    name: "Alice Anderson",
    email: "aliceAnderson@gmail.com",
  };

  customerManager.add(newCustomer);
  displayInfo();
});
