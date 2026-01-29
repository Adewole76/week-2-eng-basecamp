const addBtn = document.querySelector(".add-btn");
const taskNameInput = document.querySelector(".task-input");
const taskContainer = document.querySelector(".task-container");
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
  tasksArray.push(task);
  taskNameInput.value = '';
  localStorage.setItem('taskList', JSON.stringify(tasksArray))
  const storedTaskList = localStorage.getItem('taskList')
  const retrieveTaskList = JSON.parse(storedTaskList);
  console.log(retrieveTaskList);
  
  const taskItem =tasksArray.map(task => `<div>
          <p class="task-name">${task.name}</p>
          <p>${task.status}</p>
  
  </div>`).join('');
  console.log(taskItem);
  taskContainer.innerHTML = taskItem;

 }else{
    console.log("write something in the task input")
 }
})


