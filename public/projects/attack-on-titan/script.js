(() => {
const character_count = 20;
let cardContainer;

// 2. 拉取 API
const fetchCharacters = async () => {
    const res = await fetch('https://api.attackontitanapi.com/titans');
    const data = await res.json();
    const characters = data.results;

    for (let [index, character] of characters.slice(0, character_count).entries()) {
        await createCharacterCard(character, index + 1);
    }
};

// ## 建立 div，並加入 class = character
const createCharacterCard = async (character, id) => {
    const characterEl = document.createElement("div");
    characterEl.classList.add("character");

    const imgFilter = character.status === "Deceased" ? "grayscale(100%)" : "none";

    // 處理 current_inheritor 是連結的情形
    let inheritorName = "Unknown";
    if (character.current_inheritor && character.current_inheritor.startsWith("http")) {
        try {
            const res = await fetch(character.current_inheritor);
            const data = await res.json();
            inheritorName = data.name || "Unknown";
        } catch (e) {
            inheritorName = "Unknown";
        }
    } else if (character.current_inheritor) {
        inheritorName = character.current_inheritor;
    }

    // ## 建立 InnerHTML
    const characterInnerHTML = `
    <div class="img-container">
      <img src="${character.img}" referrerpolicy="no-referrer" alt="${character.name}" style="filter: ${imgFilter};">
    </div>
    <div class="info">
      <span class="number">#${id}</span>
      <h2 class="name">${character.name}</h2>
      <div class="alias">Alias: ${character.alias || 'Unknown'}</div>
      <div class="current_inheritor">Current Inheritor: ${inheritorName}</div>
      <div class="allegiance">Allegiance: ${character.allegiance || 'Unknown'}</div>
      <div class="height">Height: ${character.height || 'Unknown'}</div>
      <div class="abilities">Abilities: ${character.abilities || 'Unknown'}</div>
    </div>`;

    characterEl.innerHTML = characterInnerHTML;
    cardContainer.appendChild(characterEl);
};

document.addEventListener('DOMContentLoaded', () => {
    cardContainer = document.getElementById('card-container');
    if (cardContainer) {
        fetchCharacters();
    }
});
})();
