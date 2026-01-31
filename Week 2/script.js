const addBtn = document.querySelector(".add-btn");
const taskNameInput = document.querySelector(".task-input");
const taskContainer = document.querySelector(".task-container");
const errorMessage = document.querySelector(".error-message");
const deleteIcon = document.querySelector(".delete-icon");
let markAsDone; 
const tasksArray = [];
const exampleObject = {
    name: "me", status: "active", index: 1
};

// add Tasks to tasksArray
addBtn.addEventListener('click', function(){
 let taskName = taskNameInput.value;
 let taskStatus = "not Started";
 if(taskName){
  const task = Object.create(exampleObject);
  task.name = taskName;
  task.status = taskStatus;
  tasksArray.unshift(task);
  taskNameInput.value = '';
  localStorage.setItem('taskList', JSON.stringify(tasksArray))
  const storedTaskList = localStorage.getItem('taskList')
  const retrieveTaskList = JSON.parse(storedTaskList);
  console.log(retrieveTaskList);
  const taskItem =retrieveTaskList.map(task => `<div class="task-div">
  <section class="name-delete">
     <article>
         <input class="status-check" type="checkbox">
          <p class="task-name">${task.name}</p>
     </article>
         <img class="delete-icon" src="icons8-trash.svg" alt= "trash icon">
 </section>
          <p class ="task-status">${task.status}</p>
  </div>`).join('');
  
  console.log(taskItem);
  taskContainer.innerHTML = taskItem;
errorMessage.classList.add('hidden');
 }else{
    console.log("write something in the task input");
    errorMessage.classList.remove('hidden')
 }
})
//marking tasks as done
taskContainer.addEventListener('click',function(event){
    if (event.target.classList.contains('status-check')){
        const taskDiv = event.target.closest('.task-div');
        const statusCheck = taskDiv.querySelector('.status-check')
        const nameOfTask = taskDiv.querySelector('.task-name')
        const taskStatus = taskDiv.querySelector('.task-status');
        nameOfTask.style.textDecoration = 'line-through'
        taskStatus.textContent = 'done';
        statusCheck.checked = true;
        statusCheck.disabled = true;
        
    }else if(event.target.classList.contains('delete-icon')){
       const taskDiv = event.target.closest('.task-div');
       const taskStatus = taskDiv.querySelector('.task-status');
       taskStatus.textContent = 'deleted';
       console.log(taskContainer);
       console.log(tasksArray);
       const notStartedTasks = tasksArray.filter((task) => task.status === 'not started' );
       console.log(notStartedTasks);
      
    }
})

