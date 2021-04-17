const inputRef = document.querySelector('#name-input');
const greetingRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onChangeGreeting);

function onChangeGreeting(event) {
    greetingRef.textContent = event.currentTarget.value;
};