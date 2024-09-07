import "./styles.css";

interface Book {
  id: number;
  name: string;
  author: string;
  isEditing?: boolean;
}

let books: Book[] = [];
let currentId: number = 1;

function addBook(name: string, author: string): void {
  const book: Book = {
    id: currentId++,
    name,
    author,
    isEditing: false,
  };

  books.push(book);
  render();
}

function deleteBook(id: number): void {
  books = books.filter((book) => book.id !== id);
  render();
}

function editBook(id: number, updateName: string, updateAuthor: string) {
  const book = books.find((book) => book.id === id);
  if (book) {
    book.name = updateName;
    book.author = updateAuthor;
    book.isEditing = false;
    render();
  }
}

function toggleEditMode(id: number) {
  const book = books.find((book) => book.id === id);
  if (book) {
    book.isEditing = !book.isEditing;
    render();
  }
}

function render(): void {
  const bookList = document.getElementById("book-list");
  let html = "";

  if (bookList) {
    books.forEach((book) => {
      html += book.isEditing
        ? `
        <li>
          <input type="text" id="edit-name-${book.id}" value="${book.name}">
          <input type="text" id="edit-author-${book.id}" value="${book.author}">
          <button data-id="${book.id}" class="save-btn">Save</button>
        </li>
      `
        : `
        <li>
          <span>Name: ${book.name}, Author: ${book.author}</span>
          <button data-id="${book.id}" class="edit-btn">Edit</button>
          <button data-id="${book.id}" class="delete-btn">Delete</button>
        </li>
      `;
    });
  }

  bookList.innerHTML = html;
  addEventListener();
}

function addEventListener(): void {
  const editButtons = document.querySelectorAll(".edit-btn");
  const saveButtons = document.querySelectorAll(".save-btn");
  const deleteButtons = document.querySelectorAll(".delete-btn");

  editButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = Number((event.target as HTMLButtonElement).dataset.id);
      toggleEditMode(id);
    });
  });

  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = Number((event.target as HTMLButtonElement).dataset.id);
      deleteBook(id);
    });
  });

  saveButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = Number((event.target as HTMLButtonElement).dataset.id);
      const updateName = (
        document.getElementById(`edit-name-${id}`) as HTMLInputElement
      ).value;
      const updateAuthor = (
        document.getElementById(`edit-author-${id}`) as HTMLInputElement
      ).value;
      editBook(id, updateName, updateAuthor);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-btn");

  addButton.addEventListener("click", (event) => {
    event.preventDefault();
    const name = (document.getElementById("book-name") as HTMLInputElement)
      .value;
    const author = (document.getElementById("book-author") as HTMLInputElement)
      .value;
    addBook(name, author);
  });
});

addBook("Harry Potter", "J.K.Rowling");
addBook("The God Father", "Mario Puzo");
