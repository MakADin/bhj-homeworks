const value = document.querySelector('.dropdown__value');
const items = Array.from(document.querySelectorAll('.dropdown__item'));
const list = document.querySelector('.dropdown__list');

value.addEventListener('click', addActiveClass);

function addActiveClass() {
  list.classList.add('dropdown__list_active');
}

function removeActiveClass() {
  list.classList.remove('dropdown__list_active');
}

items.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    value.textContent = event.target.innerText;
    removeActiveClass();
  })
})
