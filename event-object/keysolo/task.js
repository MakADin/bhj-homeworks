class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerElement = container.querySelector('.timer')
    // this.timer = container.querySelector('.timer');
    // this.timerId = container.getElementById('timer'); //- не работает - ошибка Uncaught TypeError: container.getElementById is not a function
    // почему не удается получить доступ по id="timer" this.timer = container.getElementById('timer');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    document.body.addEventListener('keydown', (event) => {
      if (this.currentSymbol.innerText === event.key) {
        this.success();
      } else {
        this.fail();
      }
    })

    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода символа вызываем this.success()
      При неправильном вводе символа - this.fail();
      DOM-элемент текущего символа находится в свойстве this.currentSymbol.
     */
  }

  success() {
    if (this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
    this.startTimer();
    // debugger;
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);

    this.startTimer(word.length);
  }

  startTimer(time) {
    this.timerElement.textContent = time;
    // console.log(`this.timerElement.textContent ${this.timerElement.textContent} \ntime ${time}`);


    let intervalId = setInterval(() => {
      // console.log(`this.timerElement.textContent ${this.timerElement.textContent} \ntime ${time}`);
      this.timerElement.textContent = --time;
      // console.log(`this.timerElement.textContent ${this.timerElement.textContent} \ntime ${time}`);

      // console.log(intervalId);

      if (time == 0) {
        this.fail();
        this.stopTimer(intervalId);
      }
    }, 1000);
  }

  stopTimer(intervalId) {
    // console.log(intervalId);

    clearInterval(intervalId);
  }

  getWord() {
    const words = [
      'bob',
      'awesome',
      'netology',
      'hello',
      'kitty',
      'rock',
      'youtube',
      'popcorn',
      'cinema',
      'love',
      'javascript'
    ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

