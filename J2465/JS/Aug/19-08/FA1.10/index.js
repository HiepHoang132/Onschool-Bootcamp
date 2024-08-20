function testVar() {
  console.log("Testing var: ");

  // Hoisting: biến 'a' được hoisting nhưng chưa được khởi tạo (undefined)
  console.log(a); // undefined

  var a = 10;
  console.log(a); // 10

  // Phạm vi hàm: biến 'b' chỉ tồn tại trong hàm
  if (true) {
    var b = 20;
    console.log(b); // 20
  }

  console.log(b); // 20 do var có phạm vi hàm
}

testVar();

function testLet() {
  console.log("Testing let: ");

  try {
    // Temporal dead zone: truy cập 'c' trước khi khai báo gây lỗi
    console.log(c); // ReferenceError : cannot access 'c' before initialization
  } catch (error) {
    console.error(error);
  }

  let c = 30;
  console.log(c); // 30

  // Phạm vi khối: biến 'd' chỉ tồn tại trong khối if
  if (true) {
    let d = 40;
    console.log(d); // 40
  }

  try {
    console.log(d); // ReferenceError : d is not defined
  } catch (error) {
    console.error(error);
  }
}

testLet();

function testConst() {
  console.log("Test const");

  try {
    // Temporal dead zone: truy cập 'e' trước khi khai báo gây lỗi
    console.log(e); // ReferenceError : cannot access 'e' before initialization
  } catch (error) {
    console.error(error);
  }

  const e = 50;
  console.log(e); // 50

  // Thử gán lại giá trị cho const
  try {
    e = 60; // TypeError: Assignment to constant variable
  } catch (error) {
    console.error(error);
  }

  // Phạm vi khối: biến 'f' chỉ tồn tại trong khối if
  if (true) {
    const f = 70;
    console.log(f); // 70
  }

  try {
    console.log(f); // ReferenceError: f is not defined
  } catch (error) {
    console.error(error);
  }

  // Nội dung của object/mảng được khai báo với const có thể thay đổi
  const obj = { key: "value" };
  obj.key = "newValue";
  console.log(obj.key); // 'newValue'
}

testConst();

// Rest parameters
/*
    Rest parameters cho phép bạn đại diện cho 
    một số lượng không xác định các đối số dưới dạng một mảng. 
    Điều này rất hữu ích khi bạn muốn viết một hàm 
    có thể chấp nhận bất kỳ số lượng tham số nào.
*/
function sum(...numbers) {
  return numbers.reduce((total, current) => total + current, 0);
}
console.log(sum(1, 2, 3)); // 6

// Spread operator

// Sao chép mảng
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2); // [1, 2, 3]

// Kết hợp mảng
const arr3 = [1, 2, 3];
const arr4 = [1, 2, 3];
const arr5 = [...arr3, ...arr4];
console.log(arr5); // [1, 2, 3, 1, 2, 3]

// Sao chép đối tượng
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 };
console.log(obj2); // {a: 1, b: 2}

const obj3 = { a: 1, b: 2 };
const obj4 = { c: 3, d: 4 };
const combined = { ...obj3, ...obj4 };
console.log(combined); // {a: 1, b: 2, c: 3, d: 4}

function multiply(mulitplier, ...args) {
  return args.map((arg) => arg * mulitplier);
}

/*
Rest Parameters: 
Dùng để gom các đối số lại thành một mảng trong định nghĩa hàm.

Spread Operator: 
Dùng để trải các phần tử của một mảng hoặc 
các thuộc tính của một đối tượng ra trong 
các ngữ cảnh khác nhau (như trong mảng, đối tượng, hoặc lời gọi hàm).
*/
const numbers = [1, 2, 3];
console.log(multiply(2, ...numbers)); // [2, 4, 6]
