const modalbg = document.querySelector("#bground");
const modalBtn = document.querySelector("#contact-btn");
const closeModalBtn = document.querySelectorAll(".close-action");

modalBtn.addEventListener("click", launchModal);

function launchModal() {
    modalbg.style.display = "block";
}

closeModalBtn.forEach((elt) => elt.addEventListener("click", closeModal));

function closeModal() {
    modalbg.style.display = "none";
}