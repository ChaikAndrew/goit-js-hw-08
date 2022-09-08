import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};

const STORAGE_KEY = 'feedback-form-state';

let formData = {};

populateTextarea();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 200));


function onInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function onFormSubmit(e) {
    e.preventDefault();
    
    const emailEl = e.currentTarget.email.value;
    const messageEl = e.currentTarget.message.value;

    if (emailEl === '' || messageEl === '') {
        Swal.fire({
            title: 'Упс...',
            text: 'Ви маєте ввести дані в поля: Email та Message!',
        })
        return
    } 


  JSON.parse(localStorage.getItem(STORAGE_KEY));

  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function populateTextarea() {
  if (localStorage.getItem(STORAGE_KEY)) {
    const savedInputs = localStorage.getItem(STORAGE_KEY);
    formData = JSON.parse(savedInputs);

    console.log(savedInputs);
    refs.form.email.value = formData.email ? formData.email : '';
    refs.form.message.value = formData.message ? formData.message : '';
  }
}

        
        
