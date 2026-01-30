const addBtn = document.querySelector(".add-btn");
const taskNameInput = document.querySelector(".task-input");
const taskContainer = document.querySelector(".task-container");
const errorMessage = document.querySelector(".error-message");
const deleteIcon = document.querySelector(".delete-icon");
const markAsDone = document.getElementById("status-check");
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
         <input id="status-check" type="checkbox">
          <p class="task-name">${task.name}</p>
     </article>
         <img class="delete-icon" src="icons8-trash.svg" alt= "trash icon">
 </section>
          <p class ="task-status">${task.status}</p>
  </div>`).join('');
  console.log(taskItem);
  taskContainer.innerHTML = taskItem;
errorMessage.classList.add('hidden');

const markAsDone = document.getElementById("status-check");
console.log(markAsDone);
return markAsDone; 
 }else{
    console.log("write something in the task input");
    errorMessage.classList.remove('hidden')
 }
})
// delete task
console.log(markAsDone);

