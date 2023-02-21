const toDo = document.querySelector('ul')
const inputTask = document.querySelector('#input-task')
const addTaskBtn = document.querySelector('#add-task-btn')
const taskList = document.querySelector('#tasks');
const deleteTaskBtn = document.querySelector('#delete-task-btn')

addTaskBtn.addEventListener('click', (e) => {
  const created = document.createElement('li');

  if (inputTask.value == '') {
    document.querySelector('#error').style.display = 'inline-block';
  }
  else {

    const newListElement = document.createElement("li");
    const checkBox = document.createElement("input");
    const label = document.createElement('label');

    checkBox.type = "checkbox";
    label.textContent = inputTask.value;
    newListElement.classList.add('task');

    taskList.append(newListElement);
    newListElement.append(checkBox);
    newListElement.append(label);
    document.querySelector('#error').style.display = 'none';
  }
})

deleteTaskBtn.addEventListener('click', (e) => {
  const lastItem = document.querySelector('ul li:last-child');
  lastItem.remove();
})

taskList.addEventListener('click', (e) => {
  const el = e.target.closest('li');

  if (e.target.checked) {
    el.classList.add('completed');
  }
  else {
    el.classList.remove('completed');
  }
})






