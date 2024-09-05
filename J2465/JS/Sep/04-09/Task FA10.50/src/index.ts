import "./styles.css";
interface ToDo {
  id: number;
  task: string;
  completed: boolean;
}
let todos: ToDo[] = [];

function addTodo(task: string): void {
  const newTodo: ToDo = {
    id: Date.now(),
    task,
    completed: false,
  };
  todos.push(newTodo);
  renderTodos();
}

function deleteTodo(id: number): void {
  todos = todos.filter((todo) => todo.id !== id);
  renderTodos();
}

function toggleTodoCompletion(id: number): void {
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    renderTodos();
  }
}

function renderTodos(): void {
  const todoList = document.getElementById("todo-list");
  if (todoList) {
    todoList.innerHTML = "";
    todos.forEach((todo) => {
      const todoItem = document.createElement("li");
      todoItem.textContent = todo.task;
      todoItem.style.textDecoration = todo.completed ? "line-through" : "none";
      todoItem.addEventListener("click", () => toggleTodoCompletion(todo.id));
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => deleteTodo(todo.id));
      todoItem.appendChild(deleteButton);
      todoList.appendChild(todoItem);
    });
  }
}

document
  .getElementById("add-todo-form")
  ?.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("new-todo") as HTMLInputElement;
    if (input.value) {
      addTodo(input.value);
      input.value = "";
    }
  });

renderTodos();
