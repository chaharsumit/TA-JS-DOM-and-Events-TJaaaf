const bgRandom = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  color = "#" + randomColor;
  return color;
}

let first = document.querySelector('.first');
first.addEventListener('click', function(){
  first.style.backgroundColor = bgRandom();
});

let second = document.querySelector('.second');
second.addEventListener('mousemove', function(){
  second.style.backgroundColor = bgRandom();
});