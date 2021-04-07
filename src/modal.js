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
        if (event.keyCode === 13 || event.keyCode === 32) {
            closeModal();
        }
    });
});