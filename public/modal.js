/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
const modalbg = document.querySelector("#bground");
const modalBtn = document.querySelector("#contact-btn");
const closeModalBtn = document.querySelectorAll(".close-action");

modalBtn.addEventListener("click", launchModal);

function launchModal() {
    modalbg.style.display = "block";
}

closeModalBtn.forEach((elt) => {
    elt.addEventListener("click",() => {
        closeModal();
    });
    elt.addEventListener("keydown", (event) => {
        if (event.keyCode === 13 || event.keyCode ===32) {
            closeModal();
        }
    });
});

function closeModal() {
    modalbg.style.display = "none";
}
/******/ })()
;
//# sourceMappingURL=modal.js.map