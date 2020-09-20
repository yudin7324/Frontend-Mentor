const form = document.getElementById('form');
const email = document.getElementById('email');
const re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
});


function checkInput() {
    // check the values from the inputs
    const emailValue = email.value.trim();

    if (emailValue === '') {
        setErrorFor(email);
    } else if (!isEmail(emailValue)) {
        setErrorFor(email);
    } else {
        setSuccessFor(email);
    }
}

function setErrorFor(input, message) {
    const mainContent = input.parentElement; // .form-control
    //add error class
    mainContent.className = 'form error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form';
}

function isEmail(email) {
    return re.test(email);
};