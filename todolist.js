document.getElementById("addTask").addEventListener("click", function() {
    let taskInput = document.getElementById("taskInput").value;
    if (taskInput.trim() !== '') {
        let li = document.createElement("li");
        li.textContent = taskInput;
        li.addEventListener("click", function() {
            this.classList.toggle("completed");
        });
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", function() {
            this.parentElement.remove();
        });
        li.appendChild(deleteButton);
        document.getElementById("taskList").appendChild(li);
        document.getElementById("taskInput").value = '';
    } else {
        alert("Please enter a task!");
    }
});

document.getElementById("clearTasks").addEventListener("click", function() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = '';
});
