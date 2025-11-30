(function () {
  'use strict';

  const taskForm = document.getElementById('tasks__form');
  const inputTask = document.getElementById('task__input');
  const taskList = document.querySelector('.tasks__list');

  let nextID = 1;
  const storedTasksJSON = localStorage.getItem('tasks');
  const initialTasks = storedTasksJSON ? JSON.parse(storedTasksJSON) : [];

  const createTaskHTML = (task) => {
    return `
    <div class="task" data-id=${task.id}>
      <div class="task__title">${task.text}</div>
      <a href="#" class="task__remove">&times;</a>
    </div>`;
  };

  const renderTasks = () => {
    taskList.innerHTML = '';
    initialTasks.forEach((task) => {
      taskList.insertAdjacentHTML('beforeend', createTaskHTML(task));
    });
  };

  const handleRemoveClick = (event) => {
    event.preventDefault();

    const targetParent = event.currentTarget.parentNode;
    console.log(targetParent);

    const index = Array.from(document.querySelectorAll('.task')).indexOf(
      targetParent
    );
    initialTasks.splice(index, 1);
    updateLocalStorage();
    renderTasks();
  };

  const updateLocalStorage = () => {
    let maxId = Math.max(...initialTasks.map((task) => task.id), 0);
    nextID = maxId + 1;
    localStorage.setItem('tasks', JSON.stringify(initialTasks));
  };

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskValue = inputTask.value.trim();

    if (!taskValue) {
      alert('Поле ввода пустое');
      inputTask.value = '';
      return;
    }

    initialTasks.push({ id: nextID++, text: taskValue });

    updateLocalStorage();
    renderTasks();

    inputTask.value = '';
  });

  taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('task__remove')) {
      handleRemoveClick(event);
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    renderTasks();
    updateLocalStorage();
  });
})();
