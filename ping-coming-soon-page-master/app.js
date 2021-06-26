const Form = document.getElementById("email__form");
const Input = document.getElementById("email__input");

Form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInput();
});

function checkInput() {
    const emailValue = Input.value;

    if (emailValue === "") {
        showError(Input, "Please provide an email address");
    } else if (!isEmail(emailValue)) {
        showError(Input, "Please provide a valid email address");
        Form.reset();
    } else {
        Form.reset();
    }
}

function showError(input, message) {
    const emailControl = input.parentElement;
    const errorMeseg = emailControl.querySelector("p");

    emailControl.className = "email__control error";
    errorMeseg.innerText = message;
    setTimeout(() => {
        emailControl.className = "email__control";
    }, 6000);
}

function isEmail(Input) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        Input
    );
}
