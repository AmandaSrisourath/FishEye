import data from "./data.json";
import {
    Factory,
    createMedias,
    filterMedias,
} from "./medias.js";

function displayField(selector, html) {
    const field = document.querySelector(selector);
    field.innerHTML = html;
}

function displayPhotographer(foundPhotographer) {
    displayField("#photographer-name", foundPhotographer.name);
    displayField(".slogan", foundPhotographer.tagline);
    displayField("#price", foundPhotographer.price);
    displayField("#photographer-name-contact", `<h1> ${foundPhotographer.name}</h1>`);
    displayField(".location", `${foundPhotographer.city}, ${foundPhotographer.country}`);
}

function createPhotographerTag(foundPhotographer) {
    foundPhotographer.tags.forEach((tag) => {
        const photographerTags = document.querySelector("#photographer-tags");
        const link = document.createElement("a");
        link.href = `../index.html?tag=${tag}`;
        link.classList.add("tag");
        link.innerHTML = `#${tag}`;
        photographerTags.appendChild(link);
    });
}

function displayPhotographerPortrait(foundPhotographer) {
    const photographerPortrait = document.querySelector(".profile-picture");
    photographerPortrait.src = `./portraitPicture/${foundPhotographer.portrait}`;
}

function switchDropDownOnEvent(dropDownIsOpen, openDropDown) {
    if (dropDownIsOpen) {
        openDropDown.classList.remove("open-dropDown");
        return false;
    } else {
        openDropDown.classList.add("open-dropDown");
        return true;
    }
}

function bindDropdowns(medias) {
    let dropDownIsOpen = false;
    const labels =  document.querySelectorAll(".select-box__option");
    labels.forEach((label) => {
        label.addEventListener("keydown",(event)  => {
            if (event.keyCode === 13) {
                label.click();
            }
        });
    });
    const openDropDown = document.querySelector("#filter-dropDown");
    openDropDown.addEventListener("click",() => {
        dropDownIsOpen = switchDropDownOnEvent(dropDownIsOpen, openDropDown);
    });
    const selects = document.querySelectorAll(".select-box__input");
    selects.forEach((elt) => {
        elt.addEventListener("change",(event) => {
            filterMedias(event, medias);
        });
    });
}

function listenLikesClick() {
    const likes = document.querySelectorAll(".heart");
    let totalLikes = document.querySelector("#total-likes");
    likes.forEach((icon) => {
        icon.addEventListener("click", function() {
            const likesNumberElt = icon.previousElementSibling;
            let likesNumberValue = likesNumberElt.innerHTML;
            likesNumberValue++;
            likesNumberElt.innerHTML = likesNumberValue;

            let totalLikesNumberValue = totalLikes.innerHTML;
            totalLikesNumberValue++;
            totalLikes.innerHTML = totalLikesNumberValue;
            console.log(totalLikesNumberValue);
        });
    });
}

function getPhotographerMedias(photographer, allMedia) {
    let medias = [];
    let factory = new Factory();
    const photographerFirstName = photographer.name.split(" ")[0];
    allMedia.forEach((media) => {
        if (media.photographerId === photographer.id) {
            media.photographerFirstName = photographerFirstName;
            medias.push(factory.createMedia(media));
        }
    });
    return medias;
}

function run() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    const photographers = data.photographers;
    const foundPhotographer = photographers.find(photographer => photographer.id === parseInt(id, 10));
    displayPhotographer(foundPhotographer);
    createPhotographerTag(foundPhotographer);
    displayPhotographerPortrait(foundPhotographer);
    let medias = getPhotographerMedias(foundPhotographer, data.media);
    createMedias(medias);
    bindDropdowns(medias);
    listenLikesClick();
}

run();