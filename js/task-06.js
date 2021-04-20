const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputChange);

function onInputChange() {
    if (inputRef.value.length === Number(inputRef.dataset.length)) {
        inputRef.classList.add('valid');
    } else {
        inputRef.classList.add('invalid');
    };
};


inputRef.addEventListener('focus', onInputFocus);

function onInputFocus() {
    if (inputRef.classList.contains('valid')) {
        inputRef.classList.remove('valid');
    };

    if (inputRef.classList.contains('invalid')) {
        inputRef.classList.remove('invalid');
    };
};
