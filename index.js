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
const maxPage = 1;
const page = 1;
const searchQuery = "";
