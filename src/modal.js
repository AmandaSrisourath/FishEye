let lastFocusedElt;

const modalBtn = document.querySelector("#contact-btn");
modalBtn.addEventListener("click", launchModal);

const modalBg = document.querySelector("#bGround");
function launchModal() {
    lastFocusedElt = document.activeElement;
    modalBg.style.display = "block";
    modalBg.focus();
}

const closeModalBtn = document.querySelectorAll(".close-action");
function closeModal() {
    modalBg.style.display = "none";
    setTimeout(() => lastFocusedElt.focus(), 10);
}

closeModalBtn.forEach((elt) => {
    elt.addEventListener("click",() => {
        closeModal();
    });
    elt.addEventListener("keydown", (event) => {
        if (event.keyCode === 13) {
            closeModal();
        }
    });
});

function displayFormContent() {
    const firstName = document.querySelector("#first-name");
    console.log(firstName.value);
    const lastName = document.querySelector("#last-name");
    console.log(lastName.value);
    const email = document.querySelector("#email");
    console.log(email.value);
    const message = document.querySelector("#message");
    console.log(message.value);
}

const submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", (event) => {
    displayFormContent();
    event.preventDefault();
});
submitBtn.addEventListener("keydown",(event) => {
    displayFormContent();
    event.preventDefault();
});