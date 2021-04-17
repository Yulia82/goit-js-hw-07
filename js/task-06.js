const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('change', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value.length);
    if (event.currentTarget.value.length === 6) {
        inputRef.classList.add('valid');
    } else {
        inputRef.classList.add('invalid');
    };
};

inputRef.addEventListener('focus', onInputFocus);

function onInputFocus() {
    event.currentTarget.value = '';
    if (inputRef.classList.contains('valid')) {
        inputRef.classList.remove('valid');
    };

    if (inputRef.classList.contains('invalid')) {
        inputRef.classList.remove('invalid');
    };
};
