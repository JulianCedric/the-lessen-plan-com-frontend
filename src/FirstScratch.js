// 2021.08.05 - THU:

// 

var array = ["First Task", "Second Task", "Third Task"];

function renderData(arr) {
  let tasksContainer = document.getElementById("tasks-container");

  for (let i = 0; i < arr.length; i++) {
    let tasksUl = document.createElement("ul");
    tasksUl.innerHTML = `<li>${arr[i]}</li>`;
    tasksContainer.appendChild(tasksUl);
  };

};

let formVisible = false;

let addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", () => {
  if (formVisible == false) {
    formVisible = true;
    console.log("formVisible-within-function:", formVisible);
    renderForm(formVisible);
  };
})

function renderForm(visibility) {
  if (visibility) {
    let mainDiv = document.getElementById("main-div");
    let createNewTaskDiv = document.createElement("div");
    createNewTaskDiv.innerHTML = `
      <input id="new-task" type="text" placeholder="Enter new task">
      <button id="add-task-btn" type="button" onclick="addTask()">Add Task</button>
    `;
    mainDiv.appendChild(createNewTaskDiv);
  }
  addBtn.remove();
};

function addTask() {
  console.log("add-task-btn");
  let userInput = document.getElementById("new-task").value;
  console.log("userInput:", userInput);
	console.log("array:", array);
  array = [...array, userInput];
  console.log("array:", array);
  renderData(array);
};

//

#tasks-container {
  background-color: silver;
}

#my-tasks-header {
  font-family: monospace;
}

#add-btn {
  background-color: black;
  color: white;
}

#add-task-btn {
  background-color: blue;
  color: white;
}

// 2021.08.04 - WED:

var array = ["First Task", "Second Task", "Third Task"];

function renderData(arr) {
	let tasksContainer = document.getElementById("tasks-container");
  
  for (let i=0; i<arr.length; i++) {
    let tasksUl = document.createElement("ul");
    tasksUl.innerHTML = `<li>${arr[i]}</li>`;
    tasksContainer.appendChild(tasksUl);
  };

};

renderData(array);

let formVisible = false;

let addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", () => {
	if (formVisible == false) {
  	formVisible = true;
    console.log("formVisible-within-function:", formVisible);
    renderForm(formVisible);
  };
})

function renderForm(visibility) {
	if (visibility) {
  	let mainDiv = document.getElementById("main-div");
    let createNewTaskDiv = document.createElement("div");
    createNewTaskDiv.innerHTML = `
    	<form id="create-form" action=null>
        <input id="new-task" type="text" placeholder="Enter new task">
        <button id="btn" type="submit">
          Submit
        </button>
      </form>
    `;
    mainDiv.appendChild(createNewTaskDiv);
  }
  addBtn.remove();
};

console.log("formVisible:", formVisible);

<!DOCTYPE html>
<html>
<body>

  <div id="tasks-container">
    <h1 id="my-tasks-header">
    My Tasks:
    </h1>
    <div id="tasks-div">
    </div>
  </div>

</body>
</html>

//

#tasks-container {
    background-color: silver;
  }
  
  #my-tasks-header {
    font-family: monospace;
  }

  //

//   var array = ["First Task", "Second", "Third"];

// function renderStuff(arr) {

//   let tasksDiv = document.getElementById("tasks-div");
//   let task = document.createElement("li");
//   let text = document.createTextNode(arr[0]);

// 	task.appendChild(text);
	
//   return tasksDiv.appendChild(task);
  
// };

// renderStuff(array);

//

var array = ["First Task", "Second Task", "Third Task"];

function renderData(arr) {
	let tasksContainer = document.getElementById("tasks-container");
  
  for (let i=0; i<arr.length; i++) {
    let tasksUl = document.createElement("ul");
    tasksUl.innerHTML = `<li>${arr[i]}</li>`;
    tasksContainer.appendChild(tasksUl);
  };

};

renderData(array);