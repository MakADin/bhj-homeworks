const links = [...document.querySelectorAll('.has-tooltip')];
let currentTooltip = null;

const createTooltipHTML = (text) => {
  const divTooltip = document.createElement('div');
  divTooltip.classList.add('tooltip');
  divTooltip.textContent = text;
  return divTooltip;
};

const removeAllTooltips = () => {
  const activeTooltips = [...document.querySelectorAll('.tooltip')];
  activeTooltips.forEach((tip) => {
    tip.remove();
  });
  currentTooltip = null;
};

const displayTooltip = (link, tooltip) => {
  link.insertAdjacentElement('afterend', tooltip);
  tooltip.classList.add('tooltip_active');
};

const switchClassActiveTooltip = () => {
  currentTooltip.classList.toggle('tooltip_active');
  currentTooltip = null;
};

/* Обработчик события click по ссылкам */

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const titleLink = event.currentTarget.getAttribute('title');

    if (currentTooltip !== null && currentTooltip.textContent === titleLink) {
      switchClassActiveTooltip();
      return;
    }

    if (currentTooltip !== null) {
      removeAllTooltips();
    }

    const newTooltip = createTooltipHTML(titleLink);
    displayTooltip(link, newTooltip);

    currentTooltip = newTooltip;
    // console.log(Boolean(document.querySelector('.tooltip')));
  });
});
