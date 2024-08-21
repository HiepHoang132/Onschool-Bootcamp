import { Book } from "./scripts/book.js";
import { BookList } from "./scripts/bookList.js";

const bookList = new BookList();

function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const year = document.getElementById("year").value;

  if (title && author && year) {
    const book = new Book(title, author, year);
    bookList.add(book);
    displayBooks();
    resetForm();
  } else {
    alert("Please fill in all fields");
  }
}

function displayBooks() {
  document.getElementById("books").innerHTML = "";

  bookList.get().forEach((book) => {
    const p = document.createElement("p");
    p.innerHTML = book.getInfo();
    document.getElementById("books").appendChild(p);
  });
}

function resetForm() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("year").value = "";
}

document.getElementById("add-book").addEventListener("click", addBook);
