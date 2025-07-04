class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerElement = container.querySelector('.timer');
    this.firstCorrectInput = true;
    // this.timer = container.querySelector('.timer');
    // this.timerId = container.getElementById('timer'); //- не работает - ошибка Uncaught TypeError: container.getElementById is not a function
    // почему не удается получить доступ по id="timer" this.timer = container.getElementById('timer');
    this.intervalId = null;
    // this.secondsTimer = 0;
    this.reset();

    this.registerEvents();
  }

  reset() {
    this.stopTimer();
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    document.body.addEventListener('keydown', (e) => {
      const isLetterKey = /^[a-zA-Zа-яёА-ЯЁ]$/.test(e.key);
      
      if (!isLetterKey) {
        e.preventDefault();
        return;
      }

      if (this.currentSymbol.innerText.toLowerCase() === e.key) {
        this.success();

        if (this.firstCorrectInput && !this.intervalId) {
          this.startTimer();
          this.firstCorrectInput = false;
        }
      } else {
        this.fail();
      }
    })
  }

  success() {
    if (this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      if (this.currentSymbol.textContent === ' ') {
        this.success();
      }
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
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

    this.timerElement.textContent = word.length;
    this.firstCorrectInput = true;
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      --this.timerElement.textContent;
      if (this.timerElement.textContent <= 0) {
        this.fail();
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  getWord() {
    const words = [
      'bob marley',
      'awesome мир',
      'netology образование',
      'hello Пипл',
      'kitty',
      'rock звезда',
      'youtube',
      'popcorn',
      'Карамельный',
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

