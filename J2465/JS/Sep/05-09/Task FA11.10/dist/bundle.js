/******/ (() => { // webpackBootstrap
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
function handleResult(result) {
    var resultsDiv = document.getElementById("results");
    var resultDiv = document.createElement("div");
    resultDiv.className = "result";
    if (result.status === "success") {
        resultDiv.textContent = "Success: ".concat(result.data);
        resultDiv.style.color = "green";
    }
    else {
        resultDiv.textContent = "Error: ".concat(result.message);
        resultDiv.style.color = "red";
    }
    resultsDiv.appendChild(resultDiv);
}
var successResult = {
    status: "success",
    data: "Operation completed successfully.",
};
var errorResult = {
    status: "error",
    message: "There was an error processing your request.",
};
// Intersection Type example
var studentScore = {
    name: "John",
    age: 16,
    math: 90,
    english: 85,
};
function displayStudentScore(studentScore) {
    var resultsDiv = document.getElementById("results");
    var scoreDiv = document.createElement("div");
    scoreDiv.className = "result";
    scoreDiv.textContent = "Student: ".concat(studentScore.name, ", Age: ").concat(studentScore.age, ", Math: ").concat(studentScore.math, ", English: ").concat(studentScore.english);
    scoreDiv.style.color = "blue";
    resultsDiv.appendChild(scoreDiv);
}
// Initial display
handleResult(successResult);
handleResult(errorResult);
displayStudentScore(studentScore);
// Add event listeners to buttons
document.getElementById("add-success").addEventListener("click", function () {
    handleResult({ status: "success", data: "New success result added!" });
});
document.getElementById("add-error").addEventListener("click", function () {
    handleResult({ status: "error", message: "New error result added!" });
});

/******/ })()
;
//# sourceMappingURL=bundle.js.map