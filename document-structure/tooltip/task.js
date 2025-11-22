const links = [...document.querySelectorAll('.has-tooltip')];

const createTooltipDiv = (text) => {
  const divTooltip = document.createElement('div');
  divTooltip.classList.add('tooltip');
  divTooltip.textContent = text;
  return divTooltip;
}

const removeAllTooltips = () => {
  const activeTooltips = document.querySelectorAll('.tooltip_active');
  activeTooltips.forEach((tip) => { tip.remove() });
}

/* Обработчик события click по ссылкам */

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    removeAllTooltips();

    const tooltipText = event.currentTarget.getAttribute('title');

    const newTooltip = createTooltipDiv(tooltipText);

    newTooltip.classList.add('tooltip_active');

    event.currentTarget.appendChild(newTooltip);
  })
})