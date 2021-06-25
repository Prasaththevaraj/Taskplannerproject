const createTaskHtml = ( id, name, description, assignedTo, dueDate, status) => {
    const html = `
    
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${description}</p>
      <p class="card-text">${assignedTo}</p>
      <p class="card-text">${dueDate}</p>
      <p class="card-text">${status}</p>
      
      <a href="#" class="done-button btn btn-primary">Done</a>
      
      
      <button type="button" class="btn btn-danger">Delete</button>
      
    
  </div>
  `
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
}




      











