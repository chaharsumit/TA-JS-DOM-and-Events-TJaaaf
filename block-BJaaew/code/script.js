function main(){
  let ul = document.querySelector('ul');
  let filterPeople = document.querySelector('.filter');
  let btn = document.querySelectorAll('.btn');
  let activeHouse = "";
  function handleBtnUI(event){
    event.target.classList.add("selected");
    createUI();
    activeHouse = event.target;
  }

  function createUI(){
    got.houses.forEach(elm => {
      for(people of elm.people){
        let li = document.createElement('li');
        li.classList.add("character-list-item","flex-col");
        let div = document.createElement('div');
        div.classList.add("flex");
        let img = document.createElement('img');
        img.src = people.image;
        let h3 = document.createElement('h3');
        h3.innerText = people.name;
        h3.classList.add("text-lg");
        let p = document.createElement('p');
        p.innerText = people.description;
        p.classList.add("text-sm");
        let button = document.createElement('button');
        button.innerText = "Learn More!";
        button.classList.add("btn","text-md");
        div.append(img,h3);
        li.append(div,p,button);
        ul.append(li);
      }
    });
  }


  function updateDefaultButton(btn = activeHouse){
    btn.classList.remove("selected");
    activeHouse.classList.add("selected");
  }

  updateDefaultButton();

  btn.addEventListener('click', handleBtnUI);
}
main();

/*<li class="character-list-item">
          <div class="flex">
            <img src="https://raw.githubusercontent.com/nnnkit/json-data-collections/master/game-of-thrones/game-of-thrones-theon-greyjoy.jpg" alt="">
            <h3 class="text-lg">Eddard "Ned" Stark</h3>
          </div>
          <p class="text-sm">Lord of winterfell - Warden of the North - Hand of the King - Married to Catelyn(Tully) Stark</p>
          <button class="btn text-md">Learn More!</button>
</li>*/