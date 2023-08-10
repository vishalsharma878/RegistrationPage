/*const ul = document.querySelector('.items')

ul.firstElementChild.textContent = 'Hello';

const li = document.querySelector('.item1')
li.style.background ='green';

const l2 = document.querySelector('.item2')
l2.style.background ='yellow'; */

const btn = document.querySelector('.btn');

const body = document.querySelector('body');
// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Click Event
/*
btn.addEventListener('click', e => {
    e.preventDefault();
    myForm.style.background = 'red';
  });
  
  // Mouseover Event
  btn.addEventListener('mouseover', e => {
    e.preventDefault();
    body.classList.add('bg1-dark');
    body.classList.remove('bg2-dark');
  });
  
  // Mouseout Event
  btn.addEventListener('mouseout', e => {
    e.preventDefault();
    body.classList.remove('bg1-dark');
    body.classList.add('bg2-dark');
  });*/
    // Listen for form submit
  myForm.addEventListener('submit', e => {;
  
   e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    setTimeout(() => msg.remove(), 2000);
  } else {
    
    const li = document.createElement('li');

    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }

  }); 
  
  
  
  

