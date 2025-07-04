const tabs = Array.from(document.querySelectorAll('.tab'));
const contents = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {

    tabs.forEach(element => {
      element.classList.remove('tab_active');
    });
    contents.forEach(content => {
      content.classList.remove('tab__content_active');
    });
    tabs[index].classList.add('tab_active');
    contents[index].classList.add('tab__content_active');
  })
})