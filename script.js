function addTask() {
    let input = document.getElementById("taskInput");

    let task = document.createElement("p");

    task.innerText = input.value;

    document.body.appendChild(task);

    input.value = "";
}