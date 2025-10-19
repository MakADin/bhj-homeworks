(function () {
  const spans = Array.from(document.querySelectorAll('.rotator__case'));
  let activeElement = spans[0];

  if (!spans || spans.length === 0) {
    console.error(`Нет элементов с классом .rotator__case`);
    return;
  }

  function changeElement() {
    if (activeElement !== null) {
      activeElement.classList.remove('rotator__case_active');
    }

    let indexCurrentElement = getRandomIndex(spans);
    let currentElement = spans[indexCurrentElement];

    currentElement.classList.add('rotator__case_active');
    currentElement.style.color = currentElement.dataset.color;

    activeElement = currentElement;

    clearInterval(intervalId);
    intervalId = setInterval(changeElement, parseInt(currentElement.dataset.speed))
  }

  function getRandomIndex(elements) {
    return Math.floor(Math.random() * elements.length)
  }

  let intervalId = setInterval(changeElement, 1000);
})()
/*
  1. как сделать с помощью Object.defineProperty ?
  находил подсказку что можно с помощью этого метода сделать смену задержки у setInterval
*/
// const intervalObj = {intervalId: 0, func: changeElement};
// Object.defineProperty(timerObj, 'interval', {
//   set: function()
// })