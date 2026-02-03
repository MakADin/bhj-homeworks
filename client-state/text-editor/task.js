document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('savedText');

  if (savedData !== null) {
    textarea.value = savedData;
  }
});

const textarea = document.querySelector('#editor');
textarea.addEventListener('input', () => {
  localStorage.setItem('savedText', textarea.value);
});

const clearBtn = document.querySelector('#clearEditorBtn');
clearBtn.addEventListener('click', () => {
  localStorage.removeItem('savedText');
  textarea.value = '';
})