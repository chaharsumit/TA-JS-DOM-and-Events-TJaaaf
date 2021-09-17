let container = document.querySelector('.container');
let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let icons = document.querySelectorAll('.p1 i');
let winner;
let userCount = document.querySelector('.count-user');
let compCount = document.querySelector('.count-comp');
let computerCount = "";
let result = document.querySelector('.result');

let arr = [
  "rock",
  "paper",
  "scissors",
  "lizard",
  "spoke"
];

function p2Handler(){
  let random = Math.floor(Math.random() * 4);
  icons[random].color = "red";
}

p2Handler();



