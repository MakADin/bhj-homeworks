const fontSizes = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');

const textColors = Array.from(document.querySelectorAll('.color'));
const bgColors = Array.from(document.querySelectorAll('.color'));
console.log(this);

fontSizes.forEach((f) => {
  f.addEventListener('click', handleFontSizeChange);
})

function handleFontSizeChange(e) {
  e.preventDefault();
  const size = this.dataset.size;

  fontSizes.forEach(fontSize => {
    fontSize.classList.remove('font-size_active');
  })

  this.classList.add('font-size_active');
  updateBookClasses(size);
}

function updateBookClasses(size) {
  book.classList.remove('book_fs-big', 'book_fs-small');
  switch (size) {
    case 'small':
      book.classList.add('book_fs-small');
      break;
    case 'big':
      book.classList.add('book_fs-big');
      break;
  }
}