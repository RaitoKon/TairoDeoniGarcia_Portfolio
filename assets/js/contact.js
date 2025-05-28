 document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const message = document.querySelector('.message-sent');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.reset();

    message.style.display = 'block';
  });
});
