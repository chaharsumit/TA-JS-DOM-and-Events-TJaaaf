let container = document.querySelector('.container');

let input = document.querySelector('input');

let initialValue = "";
input.value = initialValue;

function addMovieContent(){
  let div = document.createElement('div');
  div.classList.add('movie');
  let checkbox = document.createElement('input');
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("name", "checkbox");
  checkbox.classList.add('checkbox');
  let span = document.createElement('span');
  span.classList.add('movie-name');
  span.innerText = input.value;
  let removeElm = document.createElement('span');
  removeElm.classList.add("removeIt");
  removeElm.innerText = "❌";
  div.append(checkbox,span,removeElm);
  input.value = initialValue;
  return div;
}

input.addEventListener("keyup", function(event){
  if(event.key === "Enter"){
    container.append(addMovieContent());
  }
});

container.addEventListener("click", function(event){
  if(event.target.classList.contains("removeIt")){
    event.target.parentElement.remove();
  }
})

