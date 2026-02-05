document.addEventListener('DOMContentLoaded', function () {
  const signinBlock = document.getElementById('signin');
  const formAuth = document.getElementById('signin__form');
  const welcomeBlock = document.getElementById('welcome');
  const userIDSpan = document.getElementById('user_id');
  const logoutButton = document.getElementById('logout_btn');

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

        showWelcome(result['user_id']);
      } else {
        alert('Неверный логин/пароль');
      }
    } catch (error) {
      console.log(error);

      console.error('Error: ', error.message);
    }
  });

  logoutButton.addEventListener('click', (e) => {
    e.preventDefault();

    logout();
  });

  function showWelcome(userID) {
    const currentUserID = userID || localStorage.getItem('user_id');
    userIDSpan.textContent = currentUserID;
    welcomeBlock.classList.add('welcome_active');
    logoutButton.classList.add('loguot_btn__active');
    signinBlock.classList.remove('signin_active');
  }

  function logout() {
    localStorage.removeItem('user_id');
    logoutButton.classList.remove('loguot_btn__active');
    welcomeBlock.classList.remove('welcome_active');
    signinBlock.classList.add('signin_active');
  }
});
