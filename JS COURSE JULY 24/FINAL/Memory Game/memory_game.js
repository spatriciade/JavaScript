document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "bulbasaur",
      img: "img/bulbasaur.jpg",
    },
    {
      name: "bulbasaur",
      img: "img/bulbasaur.jpg",
    },
    {
      name: "charmander",
      img: "img/charmander.jpg",
    },
    {
      name: "charmander",
      img: "img/charmander.jpg",
    },
    {
      name: "pikachu",
      img: "img/pikachu.jpg",
    },
    {
      name: "pikachu",
      img: "img/pikachu.jpg",
    },
    {
      name: "psyduck",
      img: "img/psyduck.jpg",
    },
    {
      name: "psyduck",
      img: "img/psyduck.jpg",
    },
    {
      name: "slowpoke",
      img: "img/slowpoke.jpg",
    },
    {
      name: "slowpoke",
      img: "img/slowpoke.jpg",
    },
    {
      name: "squirtle",
      img: "img/squirtle.jpg",
    },
    {
      name: "squirtle",
      img: "img/squirtle.jpg",
    },
  ];
 
  cardArray.sort(() => 0.5 - Math.random());
 
  let grid = document.querySelector(".grid");
  let resultDisplay = document.querySelector("#result");
  let cardChosen = [];
  let cardChosenId = [];
  let cardWon = [];
 
  //creamos el tablero
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "img/OIP.jpg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }
 
  //funcion para comprobar si hay coincidencias
  function checkMatch() {
    let cards = document.querySelectorAll("img");
    let optionOneId = cardChosenId[0];
    let optionTwoId = cardChosenId[1];
 
    console.log("comprobando coincidencias");
    if (optionOneId === optionTwoId) {
      alert("has clickado dos veces en la misma imagen");
    }
 
    if (cardChosen[0] == cardChosen[1]) {
      alert("has encontrado una coincidencia");
      // cards[optionOneId].setAttribute("src", "img/OIP.jpg");
      // cards[optionTwoId].setAttribute("src", "img/OIP.jpg");
 
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
 
      cardWon.push(cardChosen);
    } else {
      cards[optionOneId].setAttribute("src", "img/OIP.jpg");
      cards[optionTwoId].setAttribute("src", "img/OIP.jpg");
      alert("prueba de nuevo");
    }
    cardChosen = [];
    cardChosenId = [];
    resultDisplay.textContent = cardWon.length;
 
    if (cardWon.length === cardArray.length / 2) {
      resultDisplay.textContent =
        "Enhorabuena, has encontrado todas las parejas";
    }
  }
 
  //funcion que da la vuelta a las cards
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardChosen.push(cardArray[cardId].name);
    cardChosenId.push(cardId);
    console.log(cardChosen);
    console.log(cardChosenId);
    this.setAttribute("src", cardArray[cardId].img);
 
    if (cardChosen.length === 2) {
      setTimeout(checkMatch, 500);
    }
  }
 
  createBoard();
});document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "bulbasaur",
      img: "img/bulbasaur.jpg",
    },
    {
      name: "bulbasaur",
      img: "img/bulbasaur.jpg",
    },
    {
      name: "charmander",
      img: "img/charmander.jpg",
    },
    {
      name: "charmander",
      img: "img/charmander.jpg",
    },
    {
      name: "pikachu",
      img: "img/pikachu.jpg",
    },
    {
      name: "pikachu",
      img: "img/pikachu.jpg",
    },
    {
      name: "psyduck",
      img: "img/psyduck.jpg",
    },
    {
      name: "psyduck",
      img: "img/psyduck.jpg",
    },
    {
      name: "slowpoke",
      img: "img/slowpoke.jpg",
    },
    {
      name: "slowpoke",
      img: "img/slowpoke.jpg",
    },
    {
      name: "squirtle",
      img: "img/squirtle.jpg",
    },
    {
      name: "squirtle",
      img: "img/squirtle.jpg",
    },
  ];
 
  cardArray.sort(() => 0.5 - Math.random());
 
  let grid = document.querySelector(".grid");
  let resultDisplay = document.querySelector("#result");
  let cardChosen = [];
  let cardChosenId = [];
  let cardWon = [];
 
  //creamos el tablero
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "img/OIP.jpg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }
 
  //funcion para comprobar si hay coincidencias
  function checkMatch() {
    let cards = document.querySelectorAll("img");
    let optionOneId = cardChosenId[0];
    let optionTwoId = cardChosenId[1];
 
    console.log("comprobando coincidencias");
    if (optionOneId === optionTwoId) {
      alert("has clickado dos veces en la misma imagen");
    }
 
    if (cardChosen[0] == cardChosen[1]) {
      alert("has encontrado una coincidencia");
      // cards[optionOneId].setAttribute("src", "img/OIP.jpg");
      // cards[optionTwoId].setAttribute("src", "img/OIP.jpg");
 
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
 
      cardWon.push(cardChosen);
    } else {
      cards[optionOneId].setAttribute("src", "img/OIP.jpg");
      cards[optionTwoId].setAttribute("src", "img/OIP.jpg");
      alert("prueba de nuevo");
    }
    cardChosen = [];
    cardChosenId = [];
    resultDisplay.textContent = cardWon.length;
 
    if (cardWon.length === cardArray.length / 2) {
      resultDisplay.textContent =
        "Enhorabuena, has encontrado todas las parejas";
    }
  }
 
  //funcion que da la vuelta a las cards
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardChosen.push(cardArray[cardId].name);
    cardChosenId.push(cardId);
    console.log(cardChosen);
    console.log(cardChosenId);
    this.setAttribute("src", cardArray[cardId].img);
 
    if (cardChosen.length === 2) {
      setTimeout(checkMatch, 500);
    }
  }
 
  createBoard();
});