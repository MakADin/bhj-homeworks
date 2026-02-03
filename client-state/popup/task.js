document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('#subscribe-modal');
  const closeButton = document.querySelector('.modal__close');

  if (getCookie('subscribed') !== 'true') {
    modal.classList.add('modal_active');
  }

  function setCookie(name, value) {
    document.cookie =
      name + '=' + encodeURIComponent(value);
  }

  function getCookie(name) {
    
    const pairs = document.cookie.split(';');
    console.log(pairs);
    
    for (let i = 0; i < pairs.length; i++) {
      const pair = pairs[i].trim().split('=');
      if (decodeURIComponent(pair[0]) === name) {
        return decodeURIComponent(pair.slice(1).join('='));
      }
    }
    return null;
  }

  closeButton.addEventListener('click', (event) => {
    event.preventDefault();
    modal.classList.remove('modal_active');
    setCookie('subscribed', 'true');
  });
});
