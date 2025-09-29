const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");

function addTask() {
    
    const task = inputBox.value.trim();
    
    if (!task) {
        alert("Please write down a task");
        return;
    }
    const li = document.createElement("li");
    li.innerHTML=`
        <div>
            <input type="checkbox">
            <span>${task}</span>
            <button class="delete-btn">Delete</button>
            <button class="edit-btn">Edit</button>
        </div>
    `;
    listContainer.appendChild(li);
    inputBox.value="";

    const checkbox = li.querySelector("input");
    const editBtn = li.querySelector(".edit-btn");
    const taskSpan = li.querySelector("span");
    const deleteBtn = li.querySelector(".delete-btn");

    checkbox.addEventListener( "click" ,function (){
        li.classList.toggle ("completed",checkbox.checked);
        updateCounters();
    });

    editBtn.addEventListener("click", function () {
        const update = prompt("Edit task:", taskSpan.textContent);
        if (update !== null) {
        taskSpan.textContent = update;
        li.classList.remove("completed");
        checkbox.checked = false;
        updateCounters();
        }
    });

    deleteBtn.addEventListener("click", function () {
        if (confirm("Are you sure you want to delete this task?")) {
            li.remove();
            updateCounters();
        }
    });

    function updateCounters() {
        const completedTasks = document.querySelectorAll(".completed").length;
        const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;
        completedCounter.textContent = completedTasks;
        uncompletedCounter.textContent = uncompletedTasks;
    }
}