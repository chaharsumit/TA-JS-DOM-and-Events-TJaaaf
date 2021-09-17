function main(){ 
let frm = document.querySelector("form");

let userError = "";
let nameError = "";
let passwordError = "";
let emailError = "";
let numberError = "";

function isNumberContained(str){
  return str.split('').some(x => Number(x));
}

function doesContainAtTheRate(str){
  return str.split('').some(x => x === "@");
}

function userTest(usernameElm){
  if(usernameElm.value.length < 4){
    userError = "username can't be less than 4 characters";
  }else{
    userError = "";
  }
  usernameElm.nextElementSibling.innerText = userError;
}

function nameTest(nameElm){
  if(isNumberContained(nameElm.value)){
    nameError = "You can't use number in the name field";
  }else{
    nameError = "";
  }
  nameElm.nextElementSibling.innerText = nameError;
}

function emailTest(emailElm){
  if(!doesContainAtTheRate(emailElm.value)){
    emailError = "Email must contain the symbol @";
  }else if(emailElm.value.length < 6){
    emailError = "Email must be at least 6 characters";
  }else{
    emailError = "";
  }
  emailElm.nextElementSibling.innerText = emailError;
}

function numberTest(numberElm){
  if(!isNumberContained(numberElm.value)){
    numberError = "You can only use number in this field";
  }else if(numberElm.value.length < 7){
    numberError = "Length of phone number can't be less than 7";
  }else{
    numberError = "";
  }
  numberElm.nextElementSibling.innerText = numberError;
}

function passwordTest(password, confirmPassword){
  if(password.value !== confirmPassword.value){
    passwordError = "passwords don't match";
  }else{
    passwordError = "";
  }
  password.nextElementSibling.innerText = passwordError;
}


function handler(event){
  let usernameElm = event.target.elements.username;
  let nameElm = event.target.elements.name;
  let emailElm = event.target.elements.email;
  let numberElm = event.target.elements.number;
  let password = event.target.elements.password;
  let confirmPassword = event.target.elements.confirmpassword;
  event.preventDefault();
  userTest(usernameElm);
  emailTest(emailElm);
  numberTest(numberElm);
  passwordTest(password,confirmPassword);
  nameTest(nameElm);
  alert("you succesfully filled the form");
}

frm.addEventListener("submit", handler);
}
main();
/*
Username can't be less than 4 characters
Name can't be numbers
Email must contain the symbol @
Email must be at least 6 characters
Phone numbers can only be a number
Length of phone number can't be less than 7
Password and confirm password must be same.
Messages for error:

__ can't be less than __ characters (replace __ with field name)
You can't use number in the name field
Not a valid email
Phone number can only contain numbers
*/