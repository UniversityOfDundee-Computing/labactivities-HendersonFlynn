let inputTask = document.getElementById("inputTask"),
  addButton = document.getElementById("addButton"),
  deleteButton = document.getElementById("deleteButton"),
  tasksToBeDone = document.getElementById("tasksToBeDone"),
  tasksToComplete = document.getElementById("tasksToComplete");



  window.onload = updateTaskList();
  window.onload = updateCompletedTaskList();

  addButton.addEventListener("click", (event) => {
    event.preventDefault();
    addItemToTaskList(); 
  });

  deleteButton.addEventListener("click", (event) => {
    event.preventDefault();
    deleteItemFromTaskList();
  })



  function nothingToBeDone() {
    tasksToBeDone.innerHTML = `
    <div class="col-12 border border-light border-3 px-3 py-2">
        <p class="mb-0"><i class="fa-solid fa-thumbs-up pe-2"> Thumbs up - there's nothing to do!</i></p>
    </div>`;
}

function somethingToBeCompleted() {
    tasksToComplete.innerHTML = `
    <div class="col-12 border border-light border-3 px-3 py-2">
        <p class="mb-0"><i class="fa-solid fa-hourglass pe-2"></i>Times ticking...better get things done</p>
    </div>`;
}

function updateTaskList () {
    //declare variable to make future use easier
    let taskList = localStorage.getItem("taskList");

    if (taskList === null) {
        localStorage.setItem("taskList", JSON.stringify([]));
        nothingToBeDone();
      } else if (taskList === "[]") {
        nothingToBeDone();
      } 
      else {
        tasksToBeDone.innerHTML = "";
        taskList = JSON.parse(taskList);
        taskList.forEach((item, index) => {
          tasksToBeDone.innerHTML += `
                    <div onClick='makeTaskCompleted(${index})' id="item-${index}" class="col-12 bg-warning border border-light border-2 px-3 py-2 mb-1">
                        <p class="mb-0"><i class="fa-solid fa-exclamation pe-2"></i>${item}</p>
                    </div>
                `;
        });
      }
    }


function updateCompletedTaskList() {
  let completedTaskList = localStorage.getItem("completedTasks");

  if (completedTaskList === null) {
    localStorage.setItem("completedTasks", JSON.stringify([]));
    somethingToBeCompleted();
  } else if (completedTaskList === "[]") {
    somethingToBeCompleted();
  } 
  else {
    tasksToComplete.innerHTML = "";
    completedTaskList = JSON.parse(completedTaskList);
    completedTaskList.forEach((item) => {
      tasksToComplete.innerHTML += `
                <div class="col-12 bg-light border border-danger border-2 px-3 py-2 mb-1">
                    <p class="mb-0 text-dark"><i class="fa-solid fa-exclamation pe-2"></i>${item}</p>
                </div>
            `;
    });
  }}


function addItemToTaskList() {
    let taskList = JSON.parse(localStorage.getItem("taskList"));
    taskList.push(inputTask.value);
    localStorage.setItem("taskList", JSON.stringify(taskList));
    updateTaskList();
}


function deleteItemFromTaskList() {
    localStorage.removeItem("completedTasks");
    updateCompletedTaskList();
}

function makeTaskCompleted(indexToDelete) {
    let taskList = JSON.parse(localStorage.getItem("taskList")),
    completedTaskList = JSON.parse(localStorage.getItem("completedTasks"));
completedTaskList.push(taskList[indexToDelete]);
taskList = taskList.filter((item, index) => {
    return index != indexToDelete
})
localStorage.setItem("taskList", JSON.stringify(taskList));
localStorage.setItem("completedTasks", JSON.stringify(completedTaskList));
updateTaskList();
updateCompletedTaskList();
        
}