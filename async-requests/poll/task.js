document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch(
      'https://students.netoservices.ru/nestjs-backend/poll'
    );
    if (!response.ok) {
      throw new Error(`Ошибка сервера: ${response.status}`);
    }
    const result = await response.json();

    renderPoll(result.data);
  } catch (err) {
    showErrorMessage(err.message);
  }
});

const renderPoll = function ({ title, answers }) {
  const pollTitle = document.querySelector('.poll__title');
  const pollList = document.querySelector('.poll__answers');

  if (!pollTitle || !pollList) {
    console.warn('Элементы не найдены на странице');
    return;
  }

  pollTitle.textContent = title;

  let buttonsHTML = '';
  answers.forEach((answer) => {
    buttonsHTML += `<button class="poll__answer">${answer}</button> `;
  });
  pollList.innerHTML = buttonsHTML;

  pollList.addEventListener('click', (event) => {
    if (event.target.matches('.poll__answer')) {
      event.preventDefault();
      alert('Спасибо, ваш голос засчитан!');
    }
  });
};

const showErrorMessage = (message) => {
  alert(message || 'Произошла ошибка, попробуйте обновить страницу.');
};
