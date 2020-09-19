const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name');
const lastNameInput = document.getElementById('lastName');
const passwordInput = document.getElementById('password');
const re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
});

function checkInput() {
    const emailValue = email.value.trim();
    const lastNameValue = lastNameInput.value.trim();
    const nameValue = nameInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    //Email
    if (emailValue === '') {
        setErrorFor(emailInput, '');

    } else if (!isEmail(emailValue)) {
        setErrorFor(email, '');
    } else {
        setSuccessFor(emailInput, '');
    }
    //Last name
    if (lastNameValue === '') {
        setErrorFor(lastNameInput, '');
    } else {
        setSuccessFor(lastNameInput, '');
    }
    //Name
    if (nameValue === '') {
        setErrorFor(nameInput, '');
    } else {
        setSuccessFor(nameInput, '');
    }
    //password
    if (passwordValue === '') {
        setErrorFor(passwordInput, '');
    } else {
        setSuccessFor(passwordInput, '');
    }

}

function setErrorFor(input, message) {
    const mainContent = input.parentElement; // .form-control

    //add error class
    mainContent.className = 'form__control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form__control';
}

function isEmail(email) {
    return re.test(email);
};