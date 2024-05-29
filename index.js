console.clear();

import CharacterCard from "./components/CharacterCard/CharacterCard.js";
import { NavButton } from "./components/NavButton/NavButton.js";
import { NavPagination } from "./components/NavPagination/NavPagination.js";
import { SearchBar } from "./components/SearchBar/SearchBar.js";

// States
const maxPage = 42;
let page = 1;
let searchQuery = "";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const navigation = document.querySelector('[data-js="navigation"]');

//Fetch Data
async function fetchCharacters() {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
  );
  const data = await response.json();
  const characters = data.results.filter((character) =>
    character.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );
  renderCharacters(characters);
}

//display the characters
function renderCharacters(characters) {
  cardContainer.innerHTML = "";
  characters.forEach((character) => {
    const characterCard = CharacterCard(character);
    cardContainer.append(characterCard);
  });
}

//pagination

function buttonPrev() {
  if (page > 1) {
    page--;
    fetchCharacters();
    pagination.textContent = `${page} / ${maxPage}`;
  }
}

function buttonNext() {
  if (page < maxPage) {
    page++;
    fetchCharacters();
    pagination.textContent = `${page} / ${maxPage}`;
  }
}

//searchbar

function searchCharacters(event) {
  event.preventDefault();
  const input = event.target.query.value;
  searchQuery = input;
  event.target.reset();
  fetchCharacters();
}

//extra: Append the components
const searchBar = SearchBar({ onSubmit: searchCharacters });
searchBarContainer.append(searchBar);

const prevButton = NavButton({ label: "previous", onClick: buttonPrev });
const nextButton = NavButton({ label: "next", onClick: buttonNext });
const pagination = NavPagination({ Page: page, maxPage: maxPage });

navigation.append(prevButton);
navigation.append(pagination);
navigation.append(nextButton);

fetchCharacters();
