const form = document.querySelector('.login-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (form.elements.email.value === '' || form.elements.password.value === '') {
    alert('All fields must be filled');
  } else {
    const formData = {
      email: form.elements.email.value,
      password: form.elements.password.value
    };
    console.log(formData);
    form.reset();
  }
});