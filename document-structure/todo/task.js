const taskForm = document.getElementById('tasks__form');
const inputTask = document.getElementById('task__input');
const buttonAddTask = document.getElementById('tasks__add');
const taskList = document.querySelector('.tasks__list');

const getTaskValue = () => {
  const taskValue = inputTask.value;
  return taskValue;
};

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

// const createEventListenerRemove = () => {
//   const removeBtn = document.querySelector('.task__remove');
//   removeBtn.addEventListener('click', (e) => {

//   })
// }

/* Обработка событий click / keypress */

buttonAddTask.addEventListener('click', (e) => {
  e.preventDefault();

  const taskValue = getTaskValue();

  if (!taskValue) {
    alert('Поле ввода пустое');
    return;
  }

  const taskElement = createTaskHTML(taskValue);
  taskList.insertAdjacentHTML('beforeend', taskElement);

  taskList.lastElementChild
    .querySelector('.task__remove')
    .addEventListener('click', function (e, taskValue) {
      e.preventDefault();
      console.log('теперь получилось');
      console.log(this.parentNode);
      this.parentNode.remove();
      alert(`Task removed`);
    });

  // createEventListenerRemove();

  taskForm.reset();
});

inputTask.addEventListener('keypress', (event) => {
  if (event.code === 'Enter') {
    // buttonAddTask.click();
    const taskValue = getTaskValue();
  }
});
