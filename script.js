console.log("Student: Aktilek Korganbek");
console.log("Group: SE-2428");
alert("Hello, JavaScript World!");

let name = "Aktilek";
let group = "SE-2428";
let num = 10;
let isStudent = true;
let text = "Frontend";

console.log("Variables:", name, group, num, isStudent, text);
console.log("Sum:", num + 5);
console.log("Product:", num * 2);
console.log("Concat:", name + " from " + group);

document.getElementById("btnText").onclick = function() {
  document.getElementById("text").textContent = "Paragraph changed successfully!";
};


const box = document.getElementById("box");
const styleText = document.getElementById("styleText");
document.getElementById("btnColor").onclick = function() {
  box.style.backgroundColor = box.style.backgroundColor === "lightblue" ? "" : "lightblue";
};
document.getElementById("btnFont").onclick = function() {
  const current = parseFloat(window.getComputedStyle(styleText).fontSize);
  styleText.style.fontSize = (current + 2) + "px";
};

const list = document.getElementById("list");
document.getElementById("btnAdd").onclick = function() {
  const li = document.createElement("li");
  li.textContent = "New Item";
  list.appendChild(li);
};
document.getElementById("btnRemove").onclick = function() {
  if (list.lastElementChild) list.removeChild(list.lastElementChild);
};

const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "lightgreen";
});
hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundColor = "";
});

const inputText = document.getElementById("inputText");
const liveOutput = document.getElementById("liveOutput");
inputText.addEventListener("keyup", function() {
  liveOutput.textContent = inputText.value;
});
const numA = document.getElementById("numA");
const numB = document.getElementById("numB");
const result = document.getElementById("result");
const buttons = document.querySelectorAll(".calc");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const a = parseFloat(numA.value);
    const b = parseFloat(numB.value);
    const op = btn.dataset.op;

    if (isNaN(a) || isNaN(b)) {
      result.textContent = "Enter valid numbers";
      return;
    }

    let res;
    if (op === "+") res = a + b;
    else if (op === "-") res = a - b;
    else if (op === "*") res = a * b;
    else if (op === "/") res = b === 0 ? "Cannot divide by 0" : a / b;

    result.textContent = res;
  });
});

let tasks = [];

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const titleEl = document.createElement("strong");
    titleEl.textContent = task.title;
    titleEl.style.cursor = "pointer";

    const descEl = document.createElement("p");
    descEl.textContent = task.desc;

    if (task.completed) {
      titleEl.style.textDecoration = "line-through";
      descEl.style.textDecoration = "line-through";
    }

    titleEl.onclick = () => {
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
    };

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => {
      tasks.splice(index, 1);
      renderTasks();
    };

    li.appendChild(titleEl);
    li.appendChild(descEl);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

function addTask() {
  const title = document.getElementById("taskTitle").value.trim();
  const desc = document.getElementById("taskDesc").value.trim();

  if (title === "" || desc === "") {
    alert("Please enter both title and description!");
    return;
  }

  tasks.push({ title, desc, completed: false });
  document.getElementById("taskTitle").value = "";
  document.getElementById("taskDesc").value = "";
  renderTasks();
}