console.clear();

import CharacterCard from "./components/CharacterCard/CharacterCard.js";

const character = {
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  name: "Rick Sanchez",
  status: "Alive",
  type: "",
  occurrences: 51,
};

const characterCard = CharacterCard(character);
const cardContainer = document.querySelector('[data-js="card-container"]');
cardContainer.append(characterCard);

const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 42;
let page = 1;
let searchQuery = "";

//fetch data
async function fetchCharacters() {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
  );
  const data = await response.json();
  //console.log(data);
  //console.log(data.results);
  const characters = data.results;
  //filter each character
  /* characters.filter((character) => {
    return character.name.toLowerCase().startsWith(searchQuery.toLowerCase());
  });*/ //That worked but with event type "input"..

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().startsWith(searchQuery.toLowerCase());
  });

  //renderCharacters(Characters);// this if the event type is input
  renderCharacters(filteredCharacters);
}
fetchCharacters();

function renderCharacters(characters) {
  cardContainer.innerHTML = "";
  characters.forEach((character) => {
    const characterCard = CharacterCard(character);
    cardContainer.append(characterCard);
  });
}

//Pagination
prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters();
    pagination.textContent = `${page} / ${maxPage}`;
  }
});

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters();
    pagination.textContent = `${page} / ${maxPage}`;
  }
});

//  Searchbar:
/*searchBar.addEventListener("input", (event) => {
  const input = event.target.value;
  searchQuery = input;
  fetchCharacters();
});*/

// Searchbar:
searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = event.target.query.value;
  searchQuery = input;
  event.target.reset();
  fetchCharacters();
});
