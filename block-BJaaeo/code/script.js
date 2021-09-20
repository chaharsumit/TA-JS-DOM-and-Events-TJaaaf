let input = document.querySelector('input');

initialValue = "";
input.value = initialValue;

let btn = document.querySelectorAll('.btn');

function eventHandler(event){
  if(event.target.innerText === "="){
    input.value = eval(input.value);
  }
  else if(event.target.innerText === "C"){
    input.value = initialValue;
  }
  else{
    input.value += event.target.innerText;
  }
}

btn.forEach(button => {
  button.addEventListener('click', eventHandler);
});