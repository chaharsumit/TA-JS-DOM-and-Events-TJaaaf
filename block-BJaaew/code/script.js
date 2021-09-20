  let root = document.querySelector('.container');
  let ul = document.querySelector('ul');
  let search = document.querySelector('.search');
  let allHouses = got.houses.map(house => house.name);
  let rootHouses = document.querySelector('.filter');
  
  let allPeople = got.houses.reduce((acc,curr) => {
    acc = acc.concat(curr.people);
    return acc;
  }, []);

  let activeHouse = "";
  function createHouseUI(allHouses = []){
    rootHouses.innerHTML = "";
    allHouses.forEach((house) => {
      let btn = document.createElement("button");
      btn.classList.add("btn");
      btn.innerText = house;
      if(activeHouse === house){
        btn.classList.add('selected');
      }
      btn.addEventListener('click', () => {
        activeHouse = house;
        let peopleOfHouse =  got.houses.find(currHouse => currHouse.name === house).people || [];
        createUI(peopleOfHouse);
        createHouseUI(allHouses);
      });
      rootHouses.append(btn);
    });
  }

  function createUI(data = []){
    ul.innerHTML = "";
    data.forEach(people => {
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
    });
  }
  function handleSearch(event){
    let searchText = event.target.value;
    let filteredPeople = allPeople.filter(p => p.name.toLowerCase().includes(searchText.toLowerCase()));
    createUI(filteredPeople);
  }
  search.addEventListener('input', handleSearch);
  createUI(allPeople);
  createHouseUI(allHouses);

/*<li class="character-list-item">
          <div class="flex">
            <img src="https://raw.githubusercontent.com/nnnkit/json-data-collections/master/game-of-thrones/game-of-thrones-theon-greyjoy.jpg" alt="">
            <h3 class="text-lg">Eddard "Ned" Stark</h3>
          </div>
          <p class="text-sm">Lord of winterfell - Warden of the North - Hand of the King - Married to Catelyn(Tully) Stark</p>
          <button class="btn text-md">Learn More!</button>
</li>*/