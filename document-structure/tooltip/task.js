const links = [...document.querySelectorAll('.has-tooltip')];
let divTooltip = null;
let activeLink = null;

const updateTooltipPosition = (position) => {
  if (activeLink) {
    const activeLinkRect = activeLink.getBoundingClientRect();
    let leftPositionTooltip;
    let topPositionTooltip;

    switch (position) {
      case 'left':
        leftPositionTooltip = activeLinkRect.left;
        topPositionTooltip = activeLinkRect.top;
        divTooltip.style.top = `${topPositionTooltip}px`;
        divTooltip.style.left = `${
          leftPositionTooltip - divTooltip.clientWidth
        }px`;
        break;
      case 'bottom':
        leftPositionTooltip = activeLinkRect.left;
        topPositionTooltip = activeLinkRect.bottom;
        divTooltip.style.top = `${topPositionTooltip}px`;
        divTooltip.style.left = `${leftPositionTooltip}px`;
        break;
      case 'right':
        leftPositionTooltip = activeLinkRect.right;
        topPositionTooltip = activeLinkRect.top;
        divTooltip.style.top = `${topPositionTooltip}px`;
        divTooltip.style.left = `${leftPositionTooltip}px`;
        break;
      case 'top':
        leftPositionTooltip = activeLinkRect.left;
        topPositionTooltip = activeLinkRect.top;
        divTooltip.style.left = `${leftPositionTooltip}px`;
        divTooltip.style.top = `${topPositionTooltip - divTooltip.clientHeight}px`;
        break;
      default:
    }
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
  const dataPosition = currentLink.dataset.position;

  updateTooltipPosition(dataPosition);
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