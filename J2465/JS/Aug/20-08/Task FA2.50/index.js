class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getInfo() {
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  add(book) {
    this.books.push(book);
  }

  get() {
    return this.books;
  }
}

const library = new Library();

function addBook() {
  const title = document.getElementById("input-title").value;
  const author = document.getElementById("input-author").value;
  const year = document.getElementById("input-year").value;

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "";

  if (title && author && year) {
    const book = new Book(title, author, year);
    library.add(book);
    resultElement.innerHTML = "Đã thêm sách";
  } else {
    alert("Please fill in all fields");
  }
}

function getBook() {
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "";

  library.get().forEach((book) => {
    const p = document.createElement("p");
    p.innerHTML = book.getInfo();
    resultElement.appendChild(p);
  });
}

document.getElementById("add-book").addEventListener("click", addBook);
document.getElementById("show-books").addEventListener("click", getBook);
