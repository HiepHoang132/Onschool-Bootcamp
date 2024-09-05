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

eval("var _a;\n// Type Annotation\nvar greeting = \"Hello, TypeScript with Webpack!\";\nconsole.log(greeting);\n// Type Inference\nvar year = 2024;\nconsole.log(\"The year is \".concat(year));\n// Type Annotation\nvar isTypescriptAwesome = true;\nconsole.log(\"Is TypeScript awesome? \".concat(isTypescriptAwesome));\n// Type Inference\nvar numbers = [1, 2, 3, 4, 5];\nconsole.log(\"Numbers:\", numbers);\n// Type Annotation\nvar tuple;\ntuple = [\"John\", 30];\nconsole.log(\"Tuple:\", tuple);\n// Enum\nvar Color;\n(function (Color) {\n    Color[\"Red\"] = \"RED\";\n    Color[\"Green\"] = \"GREEN\";\n    Color[\"Blue\"] = \"BLUE\";\n})(Color || (Color = {}));\nvar color = Color.Green;\nconsole.log(\"Color: \".concat(color));\n// Function with Type Annotation\nfunction add(a, b) {\n    return a + b;\n}\nconsole.log(\"Sum: \".concat(add(5, 3)));\n// Function with Type Inference\nvar multiply = function (a, b) {\n    return a * b;\n};\nconsole.log(\"Product: \".concat(multiply(5, 3)));\n// Optional chaining (TypeScript 3.7+)\nvar user = null;\nconsole.log((_a = user === null || user === void 0 ? void 0 : user.profile) === null || _a === void 0 ? void 0 : _a.name); // Undefined\n// Nullish coalescing (TypeScript 3.7+)\nvar input = null;\nvar defaultValue = input !== null && input !== void 0 ? input : \"Default Value\";\nconsole.log(defaultValue);\n// Hiển thị kết quả trên HTML\nvar appDiv = document.getElementById(\"app\");\nappDiv.innerHTML = \"\\n<h1>TypeScript v\\u1EDBi Webpack</h1>\\n<p>Greeting: \".concat(greeting, \"</p>\\n<p>Year: \").concat(year, \"</p>\\n<p>Is TypeScript Awesome?: \").concat(isTypescriptAwesome, \"</p>\\n<p>Numbers: \").concat(numbers.join(\", \"), \"</p>\\n<p>Tuple: \").concat(tuple.join(\", \"), \"</p>\\n<p>Color: \").concat(color, \"</p>\\n<p>Sum: \").concat(add(5, 3), \"</p>\\n<p>Product: \").concat(multiply(5, 3), \"</p>\\n<p>Default Value: \").concat(defaultValue, \"</p>\\n\");\n\n\n//# sourceURL=webpack://task-fa10.10/./src/index.ts?");

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