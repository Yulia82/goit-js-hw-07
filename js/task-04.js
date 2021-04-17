const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const btnIncrementRef = document.querySelector('[data-action="increment"]');
const counterRef = document.querySelector('#value');

let counterValue = 0;

const increment = () => {
    counterValue += 1;
    counterRef.textContent = counterValue;
};
const decrement = () => {
    counterValue -= 1;
    counterRef.textContent = counterValue;
};

btnDecrementRef.addEventListener('click', decrement);
btnIncrementRef.addEventListener('click', increment);
