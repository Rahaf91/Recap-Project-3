console.clear();

import CharacterCard from "./components/CharacterCard/CharacterCard.js";

// von uns:
const character = {
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  name: "Rick Sanchez",
  status: "Alive",
  type: "",
  occurrences: 51,
};

// von uns (nicht ganz verstanden):
const characterCard = CharacterCard(character);

const cardContainer = document.querySelector('[data-js="card-container"]');
// von uns (nicht ganz verstanden) - muss hinter der Konstanten ('const characterCard = CharacterCard(character);
// ')stehen:
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
const searchQuery = "";

async function fetchCharacters() {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  const data = await response.json();
  console.log(data);
  // console.log(data.results);
  const characters = data.results;
  renderCharacters(characters);
}
fetchCharacters();

function renderCharacters(characters) {
  cardContainer.innerHTML = "";
  characters.forEach((character) => {
    const characterCard = CharacterCard(character);
    cardContainer.append(characterCard);
  });
}

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

// - Add an event listener on each of the next and prev buttons which do the following
//   - it is prevented that the page index could go higher than the max page index or below 1
//   - the page index is increased / decreased
//   - the `fetchCharacters` function is called
// - Update the pagination display each time characters are fetched to show the current page index and
//   the current max page index.
