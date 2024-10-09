const todoList = document.getElementById("todo-list");
const addTaskButton = document.getElementById("add-task");
let selectedCategory = null;

// Load tasks from LocalStorage or add default task if empty
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("todoTasks")) || [];

    if (storedTasks.length === 0) {
        // Add a default showcase task
        const defaultCategory = {
            id: "1",
            imageSrc: "https://iili.io/dL9hYsj.png", // Example task image
            name: "Sport",
        };
        const defaultDesc = "Soccer practice";
        const defaultDate = new Date().toISOString().split("T")[0]; // Today's date
        addTask(defaultCategory, defaultDesc, defaultDate, false);
    } else {
        storedTasks.forEach((task) =>
            addTask(
                task.category,
                task.taskDesc,
                task.taskDate,
                task.isCompleted
            )
        );
    }
}

// Save tasks to LocalStorage
function saveTasks() {
    const tasks = [];
    document.querySelectorAll(".todo-item").forEach((todoItem) => {
        const category = {
            id: todoItem.dataset.categoryId,
            imageSrc: todoItem.querySelector("img").src,
            name: todoItem.querySelector("strong").innerText,
        };
        const taskDesc = todoItem
            .querySelector(".task-desc")
            .textContent.trim();
        const taskDate = todoItem
            .querySelector(".task-date")
            .textContent.replace("Task due: ", "");
        const isCompleted = todoItem.classList.contains("completed");
        tasks.push({ category, taskDesc, taskDate, isCompleted });
    });
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
}

// Function to add a task to the list
function addTask(category, taskDesc, taskDate, isCompleted = false) {
    const currentDateTime = new Date().toLocaleString();

    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    if (isCompleted) {
        todoItem.classList.add("completed");
    }

    todoItem.dataset.categoryId = category.id;
    todoItem.innerHTML = `
        <img src="${category.imageSrc}" alt="${category.name}">
        <div>
            <strong>${category.name}</strong> - <span class="task-desc">${
        taskDesc ? taskDesc : "No description"
    }</span>
            <br>
            <small>Added on: ${currentDateTime}</small>
            <br>
            <small class="task-date">Task due: ${taskDate}</small>
        </div>
        <div class="todo-actions">
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    // Mark task as completed
    todoItem
        .querySelector(".complete-btn")
        .addEventListener("click", function () {
            todoItem.classList.toggle("completed");
            saveTasks();
        });

    // Delete the task
    todoItem
        .querySelector(".delete-btn")
        .addEventListener("click", function () {
            todoItem.remove();
            saveTasks();
        });

    todoList.appendChild(todoItem);
    saveTasks(); // Save tasks after adding
}

// Select a category by clicking on the image
document.querySelectorAll(".category").forEach((category) => {
    category.addEventListener("click", function () {
        document.querySelectorAll(".category").forEach((cat) => {
            cat.style.borderColor = "transparent"; // Reset all borders
        });
        this.style.borderColor = "#2b8ffa"; // Highlight selected category
        selectedCategory = {
            id: this.dataset.id,
            imageSrc: this.querySelector("img").src,
            name: this.querySelector("span").innerText,
        };
    });
});

// Add a task when the button is clicked
addTaskButton.addEventListener("click", function () {
    const taskDesc = document.getElementById("task-desc").value;
    const taskDate = document.getElementById("task-date").value;

    if (!selectedCategory) {
        alert("Please select a category!");
        return;
    }

    if (!taskDate) {
        alert("Please select a date!");
        return;
    }

    // Add the task
    addTask(selectedCategory, taskDesc, taskDate);

    // Reset fields after adding
    document.getElementById("task-desc").value = "";
    document.getElementById("task-date").value = "";
    selectedCategory = null;
    document.querySelectorAll(".category").forEach((cat) => {
        cat.style.borderColor = "transparent"; // Reset all borders
    });
});

// Load tasks when the page loads
window.addEventListener("DOMContentLoaded", () => {
    loadTasks();
});
