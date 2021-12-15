let task = document.querySelector('#task');
let button = document.querySelector('#submit_button');
let taskList = document.querySelector('#list_container');

button.addEventListener('click', () => {
    let newTaskContainer = document.createElement('div');
    let newTask = document.createElement('input');
    newTask.setAttribute('type', 'checkbox');
    let newTaskValue = document.createElement('label');
    newTaskValue.innerHTML = task.value;
    
    taskList.appendChild(newTaskContainer);
    newTaskContainer.appendChild(newTask);
    newTask.after(newTaskValue);
});