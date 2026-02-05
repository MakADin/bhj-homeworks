document.addEventListener('DOMContentLoaded', function () {
  const formAuth = document.getElementById('signin__form');
  const welcomeBlock = document.getElementById('welcome');
  const userIDSpan = document.getElementById('user_id');

  if (localStorage.getItem('user_id')) {
    showWelcome();
  }

  formAuth.addEventListener('submit', async function (event) {
    event.preventDefault();
    let login = this.elements['login'].value.trim();
    let password = this.elements['password'].value.trim();

    try {
      const data = { login, password };

      const response = await fetch(this.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        localStorage.setItem('user_id', result['user_id']);

        this.elements['login'].value = '';
        this.elements['password'].value = '';

        showWelcome(userID);
      } else {
        alert('Неверный логин/пароль');
      }
    } catch (error) {
      console.log(error);

      console.error('Error: ', error.message);
    }
  });

  function showWelcome(userID) {
    const currentUserID = userID || localStorage.getItem('user_id');
    userIDSpan.textContent = currentUserID;
    welcomeBlock.classList.add('welcome_active');
    document.querySelector('.signin_active').classList.remove('signin_active');
  }
});
