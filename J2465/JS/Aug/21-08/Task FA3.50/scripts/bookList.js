import { Book } from "./book.js";

class BookList {
  constructor() {
    this.books = [];
  }

  add(book) {
    if (book instanceof Book) {
      this.books.push(book);
    }
  }

  *[Symbol.iterator]() {
    for (let book of this.books) {
      yield book;
    }
  }

  get() {
    return [...this];
  }
}

export { BookList };
