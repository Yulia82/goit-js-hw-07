const boxParentRef = document.querySelector('#boxes');
const btnCreate = document.querySelector('[data-action="render"]');
const btnRemove = document.querySelector('[data-action="destroy"]');
const inputRef = document.querySelector('#controls > input');

const startWidth = 30;
const startHeight = 30;


// функция генерирующая случайный цвет rgb
function getRandom(min, max){
    return Math.ceil(Math.random() * (max - min) + min);
};

// функция создает указанное число div и добавляет их в DOM
function createBoxes(amount) {
    return function createElements() {
        let carentWidth = startWidth;
        let carentHeight = startHeight;

        const arrDiv = [];

        for (let i = 0; i < amount; i += 1) {
            const divElement = document.createElement('div');
            divElement.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
            divElement.style.width = `${carentWidth}px`;
            divElement.style.height = `${carentHeight}px`;
            divElement.classList.add('margin-box');

            arrDiv.push(divElement);
            carentWidth += 10;
            carentHeight += 10;
        };

        boxParentRef.append(...arrDiv);
    };
};

function callback() {
    const newFunct = createBoxes(inputRef.value);
    newFunct();
};

btnCreate.addEventListener('click', callback);

// фукция удаляет сщзданные div и очищает поле input
function destroyBoxes() {
    boxParentRef.innerHTML = '';
    inputRef.value = '';
};

btnRemove.addEventListener('click', destroyBoxes);