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

closeModalBtn.forEach((elt) => elt.addEventListener("click", closeModal));

function closeModal() {
    modalbg.style.display = "none";
}

//lightbox
const openLightbox = document.querySelectorAll(".open-lightbox");
openLightbox.forEach((elt, index) => elt.addEventListener("click",() => {
    openModal();
    currentSlide(index +1);
}));

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

const closeLightboxModal = document.querySelector("#close-lightbox");
closeLightboxModal.addEventListener("click",(closeLightbox));

function closeLightbox() {
    document.getElementById("myModal").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

const prevSlide = document.querySelector("#prev-image");
prevSlide.addEventListener("click", function() {
    plusSlides(-1);
});

const nextSlide = document.querySelector("#next-image");
nextSlide.addEventListener("click", function() {
    plusSlides(1);
});

function plusSlides(n) {
    showSlides(slideIndex += n);
};

function currentSlide(n) {
    showSlides(slideIndex = n);
};

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".mySlides");
    if (n > slides.length) {
        slideIndex = 1;
    };
    if (n < 1) {
        slideIndex = slides.length;
    };
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
};
/******/ })()
;
//# sourceMappingURL=modal.js.map