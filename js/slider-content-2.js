const characters = [
    {
        name: 'Step-Sister',
        imgSrc: 'img/slide-section/sister.svg'
    },
    {
        name: 'Your Neighbor',
        imgSrc: 'img/slide-section/neighbor.svg'
    },
    {
        name: 'Famous Celebrity',
        imgSrc: 'img/slide-section/celebrity.svg'
    }
];

let currentCharacterIndex = 0;

function updateCharacter() {
    const character = characters[currentCharacterIndex];
    document.getElementById('current-character').src = character.imgSrc;
    document.getElementById('character-name').innerText = character.name;
}

function prevCharacter() {
    currentCharacterIndex = (currentCharacterIndex === 0) ? characters.length - 1 : currentCharacterIndex - 1;
    updateCharacter();
}

function nextCharacter() {
    currentCharacterIndex = (currentCharacterIndex === characters.length - 1) ? 0 : currentCharacterIndex + 1;
    updateCharacter();
}

// Додавання функціоналу для свайпів
const sliderWrapper = document.getElementById('slider-wrapper');
let startX;

sliderWrapper.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

sliderWrapper.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX > endX + 50) {
        nextCharacter();
    } else if (startX < endX - 50) {
        prevCharacter();
    }
});