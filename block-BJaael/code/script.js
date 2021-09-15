let container = document.querySelector('.container');

function randomNumber(){
  let numbers = [0,1,2,3,4,5,6,7,8,9];
  number = "";
  for(let i = 0; i < 3; i++){
    let randomNumber = Math.floor(Math.random() * 10);
    number += numbers[randomNumber];
  };
  return number;
}

function randomBackground(){
  let hexCodeArray = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
  color = "#";
  for(let i = 0; i < 6; i++){
    let randomColor = Math.floor(Math.random() * 16);
    color += hexCodeArray[randomColor];
  };
  return color;
}

let boxCount = 500;
while(boxCount > 0){
  let box = document.createElement("div");
  box.classList.add("box");
  box.innerHTML = randomNumber();
  box.style.backgroundColor = randomBackground();
  container.append(box);
  boxCount--;
};

let randBox = document.querySelectorAll(".box");

function changeBg(){
  randBox.forEach(elm => {
    elm.style.backgroundColor = randomBackground();
    elm.innerText = randomNumber();
  });
}

container.addEventListener('mouseover', changeBg);
