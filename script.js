// Simple form submission handler (no backend)
const form = document.getElementById('contact-form');
const responseDiv = document.getElementById('form-response');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value;
  responseDiv.textContent = `Thanks, ${name}! I'll get back to you soon.`;
  form.reset();
});
