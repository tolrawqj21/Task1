import './styles/main.scss'

const container = document.querySelector('.container');
const charactersApi = "https://rickandmortyapi.com/api/character";
const cards = [];
paintCards();
function paintCards() {
  fetch(charactersApi)
      .then(data => {
        return data.json();
      })
      .then(data => {
        let arr = data.results;
        console.log(data);
        arr.forEach(function (item) {
          console.log(createCard(item));
        })

      })
      .catch(error => {
        console.log(error);
      });
}
function filterCardsMale() {
  let chbox0 = document.getElementById('male');
  chbox0.addEventListener("click", function (event) {
    debugger
    cards.forEach(function (item) {
      if ((chbox0.checked == true) && (item.info.gender === 'Female')) {
        container.removeChild(item);
      } else {
        container.appendChild(item);
      }
    })
  })
}
filterCardsMale()
function filterCardsFemale() {
  let chbox1 = document.getElementById('female');
  chbox1.addEventListener("click", function () {
    cards.forEach(function (item) {
      if ((chbox1.checked == true) && (item.info.gender === 'Male')) {
        container.removeChild(item);
      } else {
        container.appendChild(item);
      }
    })
  })
}
filterCardsFemale()
function filterCardsAlive() {
  let chbox2 = document.getElementById('alive');
  chbox2.addEventListener("click", function () {
    cards.forEach(function (item) {
      if ((chbox2.checked === true) && (item.info.status === 'Dead')) {
        container.removeChild(item);
      } else {
        container.appendChild(item);
      }
    })
  })
}
filterCardsAlive();
function filterCardsDead() {
  let chbox3 = document.getElementById('dead');
  chbox3.addEventListener("click", function () {
    cards.forEach(function (item) {
      if ((chbox3.checked === true) && (item.info.status === 'Alive')) {
        container.removeChild(item);
      } else {
        container.appendChild(item);
      }
    })
  })
}
filterCardsDead();



//==============================================//
function createCard(info) {
  const card = document.createElement('div');
  card.info = info;
  card.classList.add('card');
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  const cardTitle = document.createElement('div');
  cardTitle.classList.add('title');
  const cardTitleH1 = document.createElement('h1');
  cardTitleH1.innerHTML = info.name;
  cardTitle.append(cardTitleH1);
  const cardStatus = document.createElement('div');
  cardStatus.classList.add('status');
  const cardLiveStatus = document.createElement('div');
  cardLiveStatus.classList.add('live-status');

  if (info.status==='Dead'){
    cardLiveStatus.classList.add('dead');
  }


  const cardStatusP = document.createElement('p');
  const cardStatusPText = document.createTextNode(info.status);
  cardStatus.append(cardLiveStatus);
  cardStatusP.append(cardStatusPText);
  cardStatus.append(cardStatusP);
  cardTitle.append(cardStatus);
  cardInfo.append(cardTitle);
  const cardContent = document.createElement('div');
  cardContent.classList.add('content');
  const cardContentText = document.createTextNode(info.location.name);
  cardContent.append(cardContentText);
  cardInfo.append(cardContent);
  card.append(cardInfo);
  const cardImage = document.createElement('div');
  cardImage.classList.add('card-image');
  const image = document.createElement('img');
  image.src = info.image;
  image.alt = 'Some image';
  cardImage.append(image);
  card.append(cardImage);
  container.append(card);
  cards.push(card);
}