const taskForm = document.getElementById('tasks__form');
const inputTask = document.getElementById('task__input');
const buttonAddTask = document.getElementById('tasks__add');
const taskList = document.querySelector('.tasks__list');
let removeButtons = [...document.querySelectorAll('.task__remove')] || [];

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const createTaskHTML = (text) => {
  const taskHTML = `
                <div class="task">
                  <div class="task__title">
                    ${text}
                  </div>
                  <a href="#" class="task__remove">&times;</a>
                </div>`;
  return taskHTML;
};

const renderTasks = () => {
  taskList.innerHTML = '';
  tasks.forEach((taskText) => {
    const taskElement = createTaskHTML(taskText);
    taskList.insertAdjacentHTML('beforeend', taskElement);
  });
  removeButtons = [...document.querySelectorAll('.task__remove')];
  removeButtons.forEach((button) => {
    button.addEventListener('click', handleRemoveClick);
  });
};

const handleRemoveClick = (event) => {
  event.preventDefault();
  const index = removeButtons.indexOf(event.target);
  tasks.splice(index, 1);
  updateLocalStorage();
  renderTasks();
};

const updateLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const taskValue = inputTask.value.trim();

  if (!taskValue) {
    alert('Поле ввода пустое');
    inputTask.value = '';
    return;
  }

  tasks.push(taskValue);
  updateLocalStorage();
  renderTasks();

  inputTask.value = '';
});

document.addEventListener('DOMContentLoaded', renderTasks);