



const taskManager = new TaskManager(0);

const taskForm = document.querySelector('#taskForm')

taskForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    const inputName= document.querySelector('#inputName')
    const inputDescription = document.querySelector('#inputDescription')
    const inputAssignTo = document.querySelector('#inputAssignTo')
    const inputdueDate = document.querySelector('#inputdueDate')
    const inputStatus = document.querySelector('#inputStatus')
   
    let validationFail = 0;

    event.preventDefault();

     event.stopPropagation();

   
    
    console.log(inputName);
    const clearForms = ()=> {
        inputName.value = "";
        inputDescription.value = "";
        inputAssignTo.value = "";
        inputdueDate.value = "";
        inputStatus.value = "";

        inputName.classList.remove("is-valid");
        inputDescription.classList.remove("is-valid");
        inputAssignTo.classList.remove("is-valid");
        inputdueDate.classList.remove("is-valid");
        inputStatus.classList.remove("is-valid");

    }; 

    if(inputName.value.length > 3) {
        inputName.classList.add("is-valid");
        inputName.classList.remove("is-invalid");
    } else {
        inputName.classList.add("is-invalid");
        inputName.classList.remove("is-valid");
        validationFail++;
    }
    
    
    if(inputDescription.value.length > 5) {
        inputDescription.classList.add("is-valid");
        inputDescription.classList.remove("is-invalid");
    } else {
        inputDescription.classList.add("is-invalid");
        inputDescription.classList.remove("is-valid");
        validationFail++;
    
    }
    
    if(inputAssignTo.value.length > 5) {
        inputAssignTo.classList.add("is-valid");
        inputAssignTo.classList.remove("is-invalid");
    } else {
        inputAssignTo.classList.add("is-invalid");
        inputAssignTo.classList.remove("is-valid");
        validationFail++;
    
    }
    
    
    if (inputdueDate.value !== null && inputdueDate.value !== "") {
        inputdueDate.classList.add("is-valid");
        inputdueDate.classList.remove("is-invalid");
      } else {
        inputdueDate.classList.add("is-invalid");
        inputdueDate.classList.remove("is-valid");
        validationFail++;
      }

      if (inputStatus.value) {
        inputStatus.classList.add("is-valid");
        inputStatus.classList.remove("is-invalid");
      } else {
        inputStatus.classList.add("is-invalid");
        inputStatus.classList.remove("is-valid");
        validationFail++;
      }
    
    
      if (validationFail > 0) {
        validationFail = 0;
        return;
      } else {
           taskManager.addTask(inputName.value, inputDescription.value, inputAssignTo.value, inputdueDate.value, inputStatus.value)
          clearForms(); 
          taskManager.render();
        
        }
});

// task 8 starts 

const taskName = document.querySelector("#taskname");
taskName.addEventListener("click", (event) => {
  if (event.target.classList.contains("done-button")) {
    const parentTask =
      event.target.parentElement.parentElement.parentElement.parentElement;
    const taskId = Number(parentTask.dataset.taskId);
    const task = taskManager.getTaskById(taskId);
    task.status = "Done";

    taskManager.render();
  }
});
