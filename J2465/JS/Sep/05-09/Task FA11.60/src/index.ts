type PendingTask = { status: "pending"; dueDate: Date };
type CompletedTask = { status: "completed"; completionDate: Date };
type TaskStatus = PendingTask | CompletedTask;

type Project = { id: number; name: string; deadline: Date };
type Employee = { id: number; name: string; role: string };

type Task = {
  id: number;
  project: Project;
  assignedTo: Employee;
  description: string;
} & TaskStatus;

type ReadonlyTask = Readonly<Task>;
type ReadonlyProject = Readonly<Project>;
type ReadonlyEmployee = Readonly<Employee>;

type RequiredPropertyNames<T> = {
  [K in keyof T]: T[K] extends undefined ? never : K;
}[keyof T];

type OptionalPropertyNames<T> = {
  [K in keyof T]: T[K] extends undefined ? K : never;
}[keyof T];

type RequiredProperties<T> = Pick<T, RequiredPropertyNames<T>>;
type OptionalProperties<T> = Pick<T, OptionalPropertyNames<T>>;

class DataManager<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const projectManager = new DataManager<Project>();
const employeeManager = new DataManager<Employee>();
const taskManager = new DataManager<Task>();

projectManager.add({
  id: 1,
  name: "Project 1",
  deadline: new Date("9/17/2024"),
});
projectManager.add({
  id: 2,
  name: "Project 2",
  deadline: new Date("12/10/2024"),
});

employeeManager.add({ id: 1, name: "John Doe", role: "Senior Developer" });
employeeManager.add({ id: 2, name: "Jane Doe", role: "CEO" });

taskManager.add({
  id: 1,
  project: {
    id: 1,
    name: "Project 1",
    deadline: new Date("9/17/2024"),
  },
  assignedTo: { id: 1, name: "John Doe", role: "Senior Developer" },
  description: "Fix the bug",
  status: "pending",
  dueDate: new Date("12/31/2024"),
});

taskManager.add({
  id: 1,
  project: {
    id: 2,
    name: "Project 2",
    deadline: new Date("12/10/2024"),
  },
  assignedTo: { id: 2, name: "Jane Doe", role: "CEO" },
  description: "Meet with the customers",
  status: "completed",
  completionDate: new Date("10/1/2024"),
});

function displayInfo() {
  const projects = projectManager.getAll();
  const employees = employeeManager.getAll();
  const tasks = taskManager.getAll();

  const infoDiv = document.getElementById("info");
  infoDiv.innerHTML = "";

  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.className = "project";
    projectDiv.textContent = `Name: ${project.name}, Deadline: ${project.deadline}`;
    infoDiv.appendChild(projectDiv);
  });

  employees.forEach((employee) => {
    const employeeDiv = document.createElement("div");
    employeeDiv.className = "employee";
    employeeDiv.textContent = `Name: ${employee.name}, Role: ${employee.role}`;
    infoDiv.appendChild(employeeDiv);
  });

  tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";
    taskDiv.textContent = `Id: ${task.id},
    project: ${task.project.name},
    Assigned to: ${task.assignedTo.name},
    Description: ${task.description},
    Status: ${task.status}`;
    infoDiv.appendChild(taskDiv);
  });
}

displayInfo();

document.getElementById("add-project")!.addEventListener("click", () => {
  const newProject: Project = {
    id: projectManager.getAll().length + 1,
    name: "Project 3",
    deadline: new Date("1/1/2025"),
  };

  projectManager.add(newProject);
  displayInfo();
});

document.getElementById("add-task")!.addEventListener("click", () => {
  const newTask: Task = {
    id: taskManager.getAll().length + 1,
    project: projectManager.getAll()[0],
    assignedTo: employeeManager.getAll()[0],
    description: "Welcome the junior developer",
    status: "pending",
    dueDate: new Date("8/31/2024"),
  };

  taskManager.add(newTask);
  displayInfo();
});

document.getElementById("add-employee")!.addEventListener("click", () => {
  const newEmployee: Employee = {
    id: employeeManager.getAll().length + 1,
    name: "Alice Anderson",
    role: "Junior Developer",
  };

  employeeManager.add(newEmployee);
  displayInfo();
});
