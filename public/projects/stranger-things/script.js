// ## 1. 選擇哪個 div
(() => {
const character_count = 20;
let cardContainer;
// const cardContainer = document.getElementById("card-container-stranger");

// ## 2. 拉取 API
const fetchCharacters = async () => {
    const res = await fetch('https://stranger-things-api.fly.dev/api/v1/characters');
    const data = await res.json();
    const characters = data;

    // ## forEach 選取每一個 characters
    characters.slice(0, character_count).forEach((character, index) => createCharacterCard(character, index + 1));
};

// ## 建立 div，並加入 class = character
const createCharacterCard = (characterstranger, id) => {
    const characterEl = document.createElement("div");
    characterEl.classList.add("character-stranger");

    // ## 建立 InnerHTML
    const characterInnerHTML = `
    <div class="img-container">
      <img src="${characterstranger.photo}" alt="${characterstranger.name}">
    </div>
    <div class="info">
      <span class="number">#${id}</span>
      <h2 class="name">${characterstranger.name}</h2>
      <small class="born">Born: ${characterstranger.born || 'Unknown'}</small>
      <small class="gender">Gender: ${characterstranger.gender || 'Unknown'}</small>
      <small class="status">Status: ${characterstranger.status || 'Unknown'}</small>
    </div>`;

    characterEl.innerHTML = characterInnerHTML;
    cardContainer.appendChild(characterEl);
};

document.addEventListener('DOMContentLoaded', () => {
    cardContainer = document.getElementById('card-container-stranger');
    if (cardContainer) {
        fetchCharacters();
    }
});
})();
