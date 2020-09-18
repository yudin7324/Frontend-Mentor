const form = document.getElementById("form");
const email = document.getElementById("email");
const re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
});

function checkInput() {
    // check the values from the inputs
    const emailValue = email.value.trim();

    if (emailValue === '') {
        setErrorFor(email, 'Please provide a valid email');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Please provide a valid email');
    } else {
        setSuccessFor(email);
    }
}

function setErrorFor(input, message) {
    const mainContent = input.parentElement; // .form-control
    const text = mainContent.querySelector('main__content-error-text');

    //add error class
    mainContent.className = 'main__content-form error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'main__content-form';
}

function isEmail(email) {
    return re.test(email);
};

//Thanks FlorinPop17 for this code