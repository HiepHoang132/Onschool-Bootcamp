// Union Types
type SuccessResult = { status: "success"; data: string };
type ErrorResult = { status: "error"; message: string };
type Result = SuccessResult | ErrorResult;

// Intersection Types
type Student = { name: string; age: number };
type Score = { math: number; english: number };
type StudentScore = Student & Score;

function handleResult(result: Result) {
  const resultsDiv = document.getElementById("results")!;
  const resultDiv = document.createElement("div");
  resultDiv.className = "result";

  if (result.status === "success") {
    resultDiv.textContent = `Success: ${result.data}`;
    resultDiv.style.color = "green";
  } else {
    resultDiv.textContent = `Error: ${result.message}`;
    resultDiv.style.color = "red";
  }

  resultsDiv.appendChild(resultDiv);
}

const successResult: SuccessResult = {
  status: "success",
  data: "Operation completed successfully.",
};
const errorResult: ErrorResult = {
  status: "error",
  message: "There was an error processing your request.",
};

// Intersection Type example
const studentScore: StudentScore = {
  name: "John",
  age: 16,
  math: 90,
  english: 85,
};

function displayStudentScore(studentScore: StudentScore) {
  const resultsDiv = document.getElementById("results")!;
  const scoreDiv = document.createElement("div");
  scoreDiv.className = "result";
  scoreDiv.textContent = `Student: ${studentScore.name}, Age: ${studentScore.age}, Math: ${studentScore.math}, English: ${studentScore.english}`;
  scoreDiv.style.color = "blue";
  resultsDiv.appendChild(scoreDiv);
}

// Initial display
handleResult(successResult);
handleResult(errorResult);
displayStudentScore(studentScore);

// Add event listeners to buttons
document.getElementById("add-success")!.addEventListener("click", () => {
  handleResult({ status: "success", data: "New success result added!" });
});

document.getElementById("add-error")!.addEventListener("click", () => {
  handleResult({ status: "error", message: "New error result added!" });
});
