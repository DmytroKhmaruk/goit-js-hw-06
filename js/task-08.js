 const form = document.querySelector('.login-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {};
    for (let i = 0; i < form.elements.length - 1; i++ ) {
      if (!form.elements[i].value) {
        alert('Please, fill all fields!');
        return false;
      }
      formData[form.elements[i].name] = form.elements[i].value;
    }

    console.log(formData);
    form.reset();
  });
