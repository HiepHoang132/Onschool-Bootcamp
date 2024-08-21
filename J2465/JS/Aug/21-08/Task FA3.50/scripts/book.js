const _name = Symbol("name");
const _title = Symbol("title");
const _year = Symbol("year");

class Book {
  constructor(name, title, year) {
    this[_name] = name;
    this[_title] = title;
    this[_year] = year;
  }

  getInfo() {
    return `Name: ${this[_name]}, title: ${this[_title]}, year: ${this[_year]}`;
  }
}

export { Book };
