let container = document.querySelector('.container');
let ul = document.querySelector('ul');
let input = document.querySelector('input');

let initialValue = "";
input.value = initialValue;

function addTodo(){
  let li = document.createElement('li');
  let checkbox = document.createElement('input');
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("name", "checkbox");
  checkbox.classList.add('checkbox');
  let p = document.createElement('p');
  p.classList.add('todo-text');
  p.innerText = input.value;
  let removeElm = document.createElement('span');
  removeElm.classList.add("cross");
  removeElm.innerText = "❌";
  li.append(checkbox,p,removeElm);
  input.value = initialValue;
  return li;
}

input.addEventListener("keyup", function(event){
  if(event.key === "Enter"){
    ul.append(addTodo());
  } 
});

container.addEventListener("click", function(event){
  if(event.target.classList.contains("cross")){
    event.target.parentElement.remove();
  }
})