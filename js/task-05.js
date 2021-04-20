const inputRef = document.querySelector('#name-input');
const greetingRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onChangeGreeting);

function onChangeGreeting(event) {
    if (inputRef.value === '') {
        greetingRef.textContent = 'незнакомец';
    } else {
        greetingRef.textContent = event.currentTarget.value
    }
};