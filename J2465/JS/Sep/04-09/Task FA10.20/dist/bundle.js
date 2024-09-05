/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("var person = {\n    name: \"Alice\",\n    age: 25,\n    address: {\n        street: \"123 Main St\",\n        city: \"New York\",\n        country: \"USA\",\n    },\n    greet: function () {\n        return \"Hello, my name is \".concat(this.name, \" and I live at \").concat(this.address.street, \", \").concat(this.address.city, \", \").concat(this.address.country, \".\");\n    },\n};\nvar car = {\n    make: \"Toyota\",\n    model: \"Camry\",\n    year: 2021,\n    getDetails: function () {\n        return \"This car is a \".concat(this.year, \" \").concat(this.make, \" \").concat(this.model, \".\");\n    },\n};\n// Display results in HTML\nvar appDiv = document.getElementById(\"app\");\nappDiv.innerHTML = \"\\n<h1>TypeScript v\\u1EDBi Webpack</h1>\\n<div class=\\\"card\\\">\\n  <h2>Person Details</h2>\\n  <p><strong>Name:</strong> \".concat(person.name, \"</p>\\n  <p><strong>Age:</strong> \").concat(person.age, \"</p>\\n  <p><strong>Address:</strong> \").concat(person.address.street, \", \").concat(person.address.city, \", \").concat(person.address.country, \"</p>\\n  <p><strong>Greeting:</strong> \").concat(person.greet(), \"</p>\\n</div>\\n<div class=\\\"card\\\">\\n  <h2>Vehicle Details</h2>\\n  <p><strong>Make:</strong> \").concat(car.make, \"</p>\\n  <p><strong>Model:</strong> \").concat(car.model, \"</p>\\n  <p><strong>Year:</strong> \").concat(car.year, \"</p>\\n  <p><strong>Details:</strong> \").concat(car.getDetails(), \"</p>\\n</div>\\n\");\n\n\n//# sourceURL=webpack://task-fa10.10/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;