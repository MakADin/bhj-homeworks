const reveal = Array.from(document.querySelectorAll('.reveal'));

window.addEventListener('scroll', () => {
  reveal.forEach(r => {
    const { top } = r.getBoundingClientRect();
    if (top < window.innerHeight && top > 0) {
      console.log(top);
      r.classList.add('reveal_active');
    }
  })
})



