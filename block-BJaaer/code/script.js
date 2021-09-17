let form = document.querySelector('form');
let modal = document.querySelector('.modal');
let allPara = modal.querySelectorAll('p');
let name = document.querySelector('.modal .name');
let email = document.querySelector('.modal .email');
let preference = document.querySelector('.modal .preference');
let color = document.querySelector('.modal .color');
let rating = document.querySelector('.modal .rating');
let bookgenre = document.querySelector('.modal .book-genre');
let terms = document.querySelector('.modal .terms');
let close = document.querySelector('.close');
let userInfo = {};

function inputHandler(){
  name.innerText = `Hello ${userInfo.text}`;
  email.innerText = `Email: ${userInfo.email}`;
  preference.innerText = `You Love: ${userInfo.gender}`;
  color.innerText = `Color: ${userInfo.color}`;
  rating.innerText = `Rating: ${userInfo.range}`;
  bookgenre.innerText = `Book Genre: ${userInfo.drone}`;
  if(userInfo.terms.checked === true){
    terms.innerText = `👉 You agree to Terms and Conditions`;
    terms.style.textDecoration = "underline";
  }else{
    terms.innerText = `👉 You don't agree to Terms and conditions`;
    terms.style.textDecoration = "underline";
  }
}

function handler(event){
  event.preventDefault();
  userInfo.text = form.elements.text.value;
  userInfo.email = form.elements.email.value;
  userInfo.gender = form.elements.gender.value;
  userInfo.color = form.elements.color.value;
  userInfo.range = form.elements.range.value;
  userInfo.drone = form.elements.drone.value;
  userInfo.terms = form.elements.terms.checked;
  form.style.display = "none"; 
  inputHandler();
  modal.style.display = "block";
}

function closeHandler(){
  modal.style.display = "none";
  form.style.display = "block";
}

form.addEventListener('submit', handler);
close.addEventListener('click', closeHandler);