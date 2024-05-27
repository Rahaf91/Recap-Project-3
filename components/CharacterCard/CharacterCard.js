// Input parameters: was gibt der User ein?
//   Was kann man in die app eingeben? (erstmal) nur die Namen?
// Oder ist hier mit "input" was anderes gemeint?
// Wo kommt der Input hin? hier? in die geschweiften Klammern? oder davor in die runden?
// Output/return: the created li element
export default function CharacterCard(character) {
  // > mit export default" brauch man keine geschw. Klammern beim Import; mit nur "export" brauch man die geschweiften Klammern;
  // in React immer nur "export default" bei Komponenten, bei normalen Helferfunktionen normal mit export ohne default.;
  //
  // zuerstInnerHtml
  // Hauptelement ul mitinnerHtml importieren (mit innerHTML und back ticks)
  // then write a function CaracterCard (see above) - see JS create Elements

  // const ImageURL = document.createElement("ul");

  const li = document.createElement("li");

  const ImageURL = character.image;
  const characterName = character.name;
  const characterStatus = character.status;
  const characterType = character.type;
  const characterOccurrencesValue = character.occurrences;

  li.innerHTML = `
  <li class="card">
    <div class="card__image-container">
      <img
        class="card__image"
        src= ${ImageURL}
        alt= "Rick Sanchez"
      />
      <div class="card__image-gradient"></div>
    </div>
    <div class="card__content">
      <h2 class="card__title">${characterName}</h2>
      <dl class="card__info">
        <dt class="card__info-title">Status</dt>
        <dd class="card__info-description">${characterStatus}</dd>
        <dt class="card__info-title">Type</dt>
        <dd class="card__info-description">${characterType}</dd>
        <dt class="card__info-title">Occurrences</dt>
        <dd class="card__info-description">${characterOccurrencesValue}</dd>
      </dl>
    </div>
  </li>
  `;
  return li;
}

// als letztes:
// const cardList = document.createElement("cardList");
// cardList.classList = "card";

// die Zeile unten hängt den card container an den body im html an
// document.body.append(cardContainer);
// brauchen wir nicht weil das jetzt schon in der index.js steht

// diese sollte die Liste an den main container anhängen;
// cardContainer.append(li);
