const cardArray = [
  {
    name: 'angular',
    img: 'images/angular.png'
  },
  {
    name: 'vue',
    img: 'images/vue.png'
  },
  {
    name: 'node',
    img: 'images/node.png'
  },
  {
    name: 'ember',
    img: 'images/ember.png'
  },
  {
    name: 'react',
    img: 'images/react.png'
  },
  {
    name: 'backbone',
    img: 'images/backbone.png'
  },
  {
    name: 'angular',
    img: 'images/angular.png'
  },
  {
    name: 'vue',
    img: 'images/vue.png'
  },
  {
    name: 'node',
    img: 'images/node.png'
  },
  {
    name: 'ember',
    img: 'images/ember.png'
  },
  {
    name: 'react',
    img: 'images/react.png'
  },
  {
    name: 'backbone',
    img: 'images/backbone.png'
  }
]
cardArray.sort(() => 0.5 - Math.random());
let selectedCards = [], selectedCardIds = [], cardsWon = [];
const grid = document.querySelector(".grid");
const result = document.getElementById("result");
const alert = document.querySelector(".alert");

window.addEventListener("DOMContentLoaded", () => {
  createBoard();
})

// ----- METHODS -----

// method to create cards board for game setup.
createBoard = () => {
  for (let index in cardArray) {
    let element = document.createElement("img");
    element.setAttribute("src", "images/logo.png");
    element.setAttribute("data-id", index);
    grid.appendChild(element);
    element.addEventListener("click", flipCard);
  }
}

// method to flip card on click event.
flipCard = (event) => {
  let img = event.target;
  const imgId = event.currentTarget.dataset.id; // get id of the box clicked
  selectedCards.push(cardArray[imgId].name);
  selectedCardIds.push(imgId);
  img.setAttribute("src", cardArray[imgId].img); // flip image
  if (selectedCards.length === 2) {
    checkForMatch();
  }
}

// method to check if 2 cards match.
checkForMatch = () => {
  const imgs = grid.querySelectorAll("img");
  let id0 = selectedCardIds[0];
  let id1 = selectedCardIds[1];
  // CASE 1: IF SAME CARD IS CLICKED TWICE
  if (id0 === id1) {
    setLogo(id0, id1);
  }
  // CASE 2: ON CORRECT MATCH OF CARDS
  else if (selectedCards[0] === selectedCards[1]) { // name
    cardsWon.push(selectedCards);
    // direct to black image 
    for (let img of imgs) {
      id = img.dataset.id;
      if (id === id0 || id === id1) {
        setTimeout(() => {
          img.setAttribute("src", "images/black.jpg"); // flip image back after 1 second
        }, 1000);

        // block clicking on these images
        img.removeEventListener("click", flipCard);
      }
    }
    setAlert("Card Matched!", "success");
  }
  // CASE 3: ON INCORRECT MATCH OF CARDS
  else {
    setLogo(id0, id1);
  }
  // empty selected card array
  selectedCards = [];
  selectedCardIds = [];
  result.textContent = cardsWon.length;

  // on completion of game
  if (cardsWon.length === cardArray.length / 2) {
    setAlert("Congratulations! You have won the game!", "success");
    result.textContent = cardsWon.length + "! You have won the game!";
  }
}

// method to set logo image back after 1 second
setLogo = (id0, id1) => {
  const imgs = grid.querySelectorAll("img");
  setTimeout(() => {
    imgs[id0].setAttribute("src", "images/logo.png");
    imgs[id1].setAttribute("src", "images/logo.png");
  }, 1000);
  setAlert("Card does not match!", "danger");
}

// method to display alert message
setAlert = (text, styleClass) => {
  alert.textContent = text;
  alert.classList.add(`alert-${styleClass}`);
  setTimeout(() => {
    alert.textContent = ``;
    alert.classList.remove(`alert-${styleClass}`);
  }, 1000);
}