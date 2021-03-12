/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
const modalbg = document.querySelector("#bground");
const modalBtn = document.querySelector("#contact-btn");
// const modalImageBtn = document.querySelectorAll(".image");
const closeModalBtn = document.querySelectorAll(".close-action");


modalBtn.addEventListener("click", launchModal);

function launchModal() {
    modalbg.style.display = "block";
}

/*modalImageBtn.forEach((btn) => btn.addEventListener("click", launchImageModal));

function launchImageModal() {
    modalbg.style.display = "block";
}*/

closeModalBtn.forEach((elt) => elt.addEventListener("click", closeModal));

function closeModal() {
    modalbg.style.display = "none";
}
/******/ })()
;
//# sourceMappingURL=modal.js.map