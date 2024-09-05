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

eval("// Function with Type Annotation\nfunction add(a, b) {\n    return a + b;\n}\n// Function with Type Inference\nvar multiply = function (a, b) {\n    return a * b;\n};\n// Function with Optional Parameters\nfunction greet(name, greeting) {\n    if (greeting === void 0) { greeting = \"Hello\"; }\n    return \"\".concat(greeting, \", \").concat(name, \"!\");\n}\n// Function with Rest Parameters\nfunction concatenate(separator) {\n    var items = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        items[_i - 1] = arguments[_i];\n    }\n    return items.join(separator);\n}\n// Object implementing Person interface\nvar person = {\n    name: \"Alice\",\n    age: 25,\n    greet: function () {\n        console.log(\"Hello, my name is \".concat(this.name, \" and I am \").concat(this.age, \" years old.\"));\n    },\n};\n// Display results in HTML\nvar appDiv = document.getElementById(\"app\");\nappDiv.innerHTML = \"\\n<h1>TypeScript v\\u1EDBi Webpack</h1>\\n<div class=\\\"card\\\">\\n  <h2>Functions and Results</h2>\\n  <p><strong>Add (5 + 3):</strong> \".concat(add(5, 3), \"</p>\\n  <p><strong>Multiply (5 * 3):</strong> \").concat(multiply(5, 3), \"</p>\\n  <p><strong>Greet ('Alice'):</strong> \").concat(greet(\"Alice\"), \"</p>\\n  <p><strong>Concatenate ('-', 'a', 'b', 'c'):</strong> \").concat(concatenate(\"-\", \"a\", \"b\", \"c\"), \"</p>\\n  <p><strong>Person Greeting:</strong> \").concat(person.greet(), \"</p>\\n</div>\\n\");\n\n\n//# sourceURL=webpack://task-fa10.10/./src/index.ts?");

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