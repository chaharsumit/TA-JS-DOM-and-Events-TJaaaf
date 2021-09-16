let boxes = document.querySelector('.boxes');
let boxList = boxes.querySelectorAll('.box');

let newBoxes = document.querySelector('.wrapper .boxes-2');


boxList.forEach((box,index) => 
  box.addEventListener('click', function(){
    box.innerText = index + 1;
    setTimeout(() => {
      box.innerText = "";
    }, 5000);
}));


newBoxes.addEventListener('click',function(event){
    event.target.innerText = event.target.dataset.text;
    setTimeout(() => {
      event.target.innerText = " ";
    }, 5000);
});




