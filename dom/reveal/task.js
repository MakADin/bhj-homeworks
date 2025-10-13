const reveals = Array.from(document.querySelectorAll('.reveal'));

window.addEventListener('scroll', () => {
  reveals.forEach(r => {
    const { top } = r.getBoundingClientRect();
    if (top < window.innerHeight && top > 0) {
      r.classList.add('reveal_active');
    }
  })
})
// неправильно запушил, без ключа -u