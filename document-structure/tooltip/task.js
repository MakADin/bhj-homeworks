const links = [...document.querySelectorAll('.has-tooltip')];
let divTooltip = null;
let activeLink = null;

const updateTooltipPosition = () => {
  if (activeLink) {
    const activeLinkRect = activeLink.getBoundingClientRect();

    const topPositionTooltip = activeLinkRect.top + window.pageYOffset + 25;
    const leftPositionTooltip = activeLinkRect.left + window.pageXOffset;

    divTooltip.style.top = `${topPositionTooltip}px`;
    divTooltip.style.left = `${leftPositionTooltip}px`;
  }
};

const handleClickOnLink = (event) => {
  event.preventDefault();

  const currentLink = event.currentTarget.closest('.has-tooltip');
  const titleLink = currentLink.getAttribute('title');

  if (currentLink === activeLink) {
    activeLink = null;
    divTooltip.classList.toggle('tooltip_active');
    return;
  }

  if (activeLink && activeLink !== currentLink) {
    divTooltip.classList.remove('tooltip_active');
  }
  activeLink = currentLink;

  divTooltip.textContent = titleLink;
  divTooltip.classList.add('tooltip_active');

  updateTooltipPosition();
};

document.addEventListener('DOMContentLoaded', () => {
  divTooltip = document.createElement('div');
  divTooltip.classList.add('tooltip');
  divTooltip.textContent = '';
  document.body.appendChild(divTooltip);
});

links.forEach((link) => {
  link.addEventListener('click', handleClickOnLink);
});

window.addEventListener('scroll', updateTooltipPosition);

window.addEventListener('resize', updateTooltipPosition);

/*  (event) => {
    event.preventDefault();

    const titleLink = event.currentTarget.getAttribute('title');

    getPositionClickedLink(link);

    divTooltip.textContent = titleLink;

    if (!divTooltip.classList.contains('tooltip_active')) {
      divTooltip.classList.add('tooltip_active');
    } else if (divTooltip.textContent === titleLink) {
      divTooltip.classList.toggle('tooltip_active');
    }
  } */

/* ============================================================= */

// const createTooltipHTML = (text) => {
//   const divTooltip = document.createElement('div');
//   divTooltip.classList.add('tooltip');
//   divTooltip.textContent = text;
//   return divTooltip;
// };

// const removeAllTooltips = () => {
//   const activeTooltips = [...document.querySelectorAll('.tooltip')];
//   activeTooltips.forEach((tip) => {
//     tip.remove();
//   });
//   currentTooltip = null;
// };

const displayTooltip = (link, tooltip) => {
  link.insertAdjacentElement('afterend', tooltip);
  tooltip.classList.add('tooltip_active');
};

const switchClassActiveTooltip = () => {
  currentTooltip.classList.toggle('tooltip_active');
  currentTooltip = null;
};

/* Обработчик события click по ссылкам

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

    displayTooltip(link, newTooltip);

    currentTooltip = newTooltip;
    // console.log(Boolean(document.querySelector('.tooltip')));
  });
});
*/
