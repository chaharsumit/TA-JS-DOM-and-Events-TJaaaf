function main(){
let root = document.querySelector('ul');
let inputText = document.getElementById('text');

let all = document.querySelector(".all");
let active = document.querySelector(".active");
let completed = document.querySelector(".completed");
let clear = document.querySelector(".clear");

let defaultSelected = "all"; 

let allTodos = JSON.parse(localStorage.getItem('todos')) || [];

function handleInput(event){
  let value = event.target.value;
  if(event.key === "Enter" && value !== ""){
    let todo = {
      name: value,
      isDone: false,
    }
    allTodos.push(todo);
    event.target.value = "";
    createUI(allTodos, root);
  }
  localStorage.setItem('todos', JSON.stringify(allTodos));
}

function handleDelete(event){
  let id = event.target.dataset.id;
  allTodos.splice(id, 1);
  localStorage.setItem('todos', JSON.stringify(allTodos));
  createUI(allTodos, root);
}

function handleToggle(event){
  let id = event.target.dataset.id;
  allTodos[id].isDone = !allTodos[id].isDone;
  localStorage.setItem('todos', JSON.stringify(allTodos));
  createUI(allTodos, root);
}

function createUI(data = allTodos, rootElm = root){
  rootElm.innerHTML = "";
  data.forEach((todo, index) => {
    let li = document.createElement('li');
    let input = document.createElement('input');
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", "checkbox");
    input.setAttribute("data-id", index);
    input.addEventListener("change", handleToggle);
    input.checked = todo.isDone;
    input.classList.add('checkbox');
    let p = document.createElement('p');
    p.classList.add('todo-text');
    p.innerText = todo.name;
    let span = document.createElement('span');
    span.classList.add("cross");
    span.innerText = "❌";
    span.setAttribute("data-id", index);
    span.addEventListener("click", handleDelete);

    li.append(input, p, span);
    rootElm.append(li);
  });
}

createUI(allTodos, root);

all.classList.add("selected");

clear.addEventListener("click", () => {
  allTodos = allTodos.filter(todo => !todo.isDone);
  createUI();
  localStorage.setItem('todos', JSON.stringify(allTodos));
});

active.addEventListener('click', () => {
  let notCompleted = allTodos.filter(todo => !todo.isDone);
  createUI(notCompleted);
  defaultSelected = "active";
  updateDefaultButton();
});

completed.addEventListener('click', () => {
  let completedTodos = allTodos.filter(todo => todo.isDone);
  createUI(completedTodos);
  defaultSelected = "completed";
  updateDefaultButton();
});

all.addEventListener('click', () => {
  createUI();
  defaultSelected = "all";
  updateDefaultButton();
})

function updateDefaultButton(btn = defaultSelected){
  all.classList.remove("selected");
  active.classList.remove("selected");
  completed.classList.remove("selected");
  if(btn === "all"){
    all.classList.add("selected");
  }
  if(btn === "active"){
    active.classList.add("selected");
  }
  if(btn === "completed"){
    completed.classList.add("selected");
  }
}

updateDefaultButton();

inputText.addEventListener("keyup", handleInput);
}

main();