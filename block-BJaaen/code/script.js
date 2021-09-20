function main(){
  let userRoot = document.querySelector('.user-icons');
  let computerRoot = document.querySelector('.computer-icons');
  let reset = document.querySelector('.reset');
  let result = document.querySelector('.result');
  let allIcons = document.querySelectorAll('i');
  let userWins = document.querySelector('.count-user');
  let compWins = document.querySelector('.count-comp');
  let userSelect = document.querySelector('.user-selection');
  let compSelect = document.querySelector('.computer-selection');
  let userSelected, computerSelected, userChoice, computerChoice;
  let userCount = 0;
  let compCount = 0;
  userWins.innerText = userCount;
  compWins.innerText = compCount;

  let dataSet = [
    {
      name : "rock",
      beats : ["scissors","lizard"]
    },
    {
      name : "paper",
      beats : ["rock","spock"]
    },
    {
      name : "scissors",
      beats : ["paper","lizard"]
    },
    {
      name : "lizard",
      beats : ["spock","paper"]
    },
    {
      name : "spock",
      beats : ["scissors","rock"]
    }
  ]

  let arr = [
    "rock",
    "paper",
    "scissors",
    "lizard",
    "spock"
  ];

  function randomNumber(){
    return Math.floor(Math.random() * 5);
  }

  function winner(){
    if(userChoice.beats.join('').includes(computerChoice.name)){
      result.innerText = "user wins!";
      ++userCount;
    }else{
      result.innerText = "computer wins!";
      ++compCount;
    }
    userSelect.innerText = `--- ${userChoice.name}`;
    compSelect.innerText = `--- ${computerChoice.name}`;
  }

  function updateWins(){
    userWins.innerText = userCount;
    compWins.innerText = compCount;
  }

  userRoot.addEventListener('click', (event) => {
    allIcons.forEach(icon => {
      icon.removeAttribute("id");
    });
    for(items of dataSet){
      if(items.name === event.target.dataset.character){
        userChoice = items;
      }
    }
    userSelected = event.target;
    userSelected.setAttribute("id",'active');
    computerSelected = computerRoot.children[randomNumber()];
    for(items of dataSet){
      if(items.name === computerSelected.dataset.character){
        computerChoice = items;
      }
    }
    computerSelected.setAttribute("id", 'active');
    winner();
    updateWins();
  });

  function resetAll(){
    userWins.innerText = 0;
    compWins.innerText = 0;
    userCount = 0;
    userWins = 0;
    result.innerText = "";
    userSelect.innerText = "";
    compSelect.innerText = "";
  }
reset.addEventListener('click', resetAll);
}
main();