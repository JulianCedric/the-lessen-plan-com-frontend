// 2021.08.04 - WED:

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

  var array = ["First Task", "Second", "Third"];

function renderStuff(arr) {

  let tasksDiv = document.getElementById("tasks-div");
  let task = document.createElement("li");
  let text = document.createTextNode(arr[0]);

	task.appendChild(text);
	
  return tasksDiv.appendChild(task);
  
};

renderStuff(array);

