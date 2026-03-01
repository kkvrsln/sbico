const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

for (const form of document.querySelectorAll('form')) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    const oldText = button?.textContent;

    if (button) {
      button.disabled = true;
      button.textContent = 'Отправка...';
    }

    setTimeout(() => {
      alert('Спасибо! Ваша заявка принята. Мы скоро с вами свяжемся.');
      form.reset();
      if (button) {
        button.disabled = false;
        button.textContent = oldText || 'Отправить';
      }
    }, 600);
  });
}
