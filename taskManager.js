const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => {
    const html = `<li class="card" data-task-id="${id}" style="min-width: 50vw">
    
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${description}</p>
      <p class="card-text">${assignedTo}</p>
      <p class="card-text">${dueDate}</p>
      <p class="card-text">${status}</p>
      
      <a href="#" class="done-button btn btn-primary ${status.toLowerCase() == "done" ? "d-none" : ""}" >Done</a>
      
      
      <button type="button" class="btn btn-danger">Delete</button>
      
    
  </div>
  </li>`
    return html;
  };





class TaskManager {
    constructor(currentId = 0){
        this.tasks = [];
        this.currentId = currentId;
    }
    addTask(name, description, assignedTo, dueDate, status) {
    

        const task = {
          id: this.currentId++,
          name: name,
          description: description,
          assignedTo: assignedTo,
          dueDate: dueDate,
          status: status,
        };
    
        this.tasks.push(task);
        
      }  

      getTaskById(taskId) {
        let foundTask;
        for (let i = 0; i < this.tasks.length; i++) {
          const task = this.tasks[i];
        if (task.id === taskId) {
            foundTask = task;
          }
        }
        return foundTask;
      }
    
      render() {
        let tasksHtmlList = [];
        for (let i = 0; i < this.tasks.length; i++) {
          const task = this.tasks[i];
          const date = new Date(task.dueDate);
          const formattedDate =
          date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(); 
          
          const taskHtml = createTaskHtml(
            task.id,
            task.name,
            task.description,
            task.assignedTo,
            formattedDate,
            task.status
          );
         
          tasksHtmlList.push(taskHtml);
      }

      const tasksHtml = tasksHtmlList.join("\n");
      const tasksName = document.querySelector("#taskname");
      taskName.innerHTML = tasksHtml;
    }

save() {
  // Create a JSON string of the tasks
  const tasksJson = JSON.stringify(this.tasks);

  // Store the JSON string in localStorage
  localStorage.setItem("tasks", tasksJson);

  // Convert the currentId to a string;
  const currentId = String(this.currentId);

  // Store the currentId in localStorage
  localStorage.setItem("currentId", currentId);
}

load() {
  // Check if any tasks are saved in localStorage
  if (localStorage.getItem("tasks")) {
    // Get the JSON string of tasks in localStorage
    const tasksJson = localStorage.getItem("tasks");

    // Convert it to an array and store it in our TaskManager
    this.tasks = JSON.parse(tasksJson);
  }

  // Check if the currentId is saved in localStorage
  if (localStorage.getItem("currentId")) {
    // Get the currentId string in localStorage
    const currentId = localStorage.getItem("currentId");

    // Convert the currentId to a number and store it in our TaskManager
    this.currentId = Number(currentId);
  }
}
}



      











