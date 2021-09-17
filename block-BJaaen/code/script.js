let userRoot = document.querySelector('.user-icons');
let computerRoot = document.querySelector('.computer-icons');
let userSelected, computerSelected;


let dataSet = [
  {
    name : "rock",
    beats : ["scissors","lizard"]
  }
  {
    name : "paper",
    beats : ["rock","spock"]
  }
  {
    name : "scissors",
    beats : ["paper","lizard"]
  }
  {
    name : "lizard",
    beats : ["spock","paper"]
  }
  {
    name : "spock",
    beats : ["scissors","rock"]
  }
  
]

dataSet.forEach((icon) => {

})



let arr = [
  "rock",
  "paper",
  "scissors",
  "lizard",
  "spoke"
];

function p2Handler(){
  return Math.floor(Math.random() * 4);
}

p2Handler();



