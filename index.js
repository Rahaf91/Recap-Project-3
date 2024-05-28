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
const maxPage = 1;
const page = 1;
const searchQuery = "";
/*Fetch the Data
Now we can fetch the character data from the API and generate our cards with it.

Inside of the index.js create a function called fetchCharacters.
Use your knowledge about fetching to get the first 20 characters from the API. You can find the correct API endpoint in the docs.
Import the CharacterCard function.
After successfully fetching the character data, use array methods to create an HTML card for each character and append it to the cardContainer.
Make sure that the cardContainer is emptied every time new characters are fetched (HINT: you can use innerHTML = '' for that).
Call the function inside the index.js. Now you should see 20 cards in your app. */

async function fetchCharacters() {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character/?page=1"
  );
  const data = await response.json();
  //console.log(data);
  // console.log(data.results);
  //const results = data.results;
  showCharacters(data.results);
}
fetchCharacters();

function showCharacters(characters) {
  cardContainer.innerHTML = "";
  characters.forEach((character) => {
    const characterCard = CharacterCard(character);
    cardContainer.append(characterCard);
  });
}
