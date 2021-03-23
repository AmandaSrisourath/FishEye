import data from './data.json';

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id')

const photographers = data.photographers;

const foundPhotographer = photographers.find(photographer => photographer.id === parseInt(id, 10));

const photographerName = document.querySelector('#photographer-name');
photographerName.innerHTML = foundPhotographer.name;

const photographerLocation = document.querySelector('.location');
photographerLocation.innerHTML = `${foundPhotographer.city}, ${foundPhotographer.country}`;

const photographerSlogan = document.querySelector('.slogan');
photographerSlogan.innerHTML = foundPhotographer.tagline;

foundPhotographer.tags.forEach((tag) => {
    const photographerTags = document.querySelector('#photographer-tags');
    const link = document.createElement('a');
    link.classList.add("tag");
    link.innerHTML = `#${tag}`
    photographerTags.appendChild(link);
});

const photographerPortrait = document.querySelector('.profile-picture');
photographerPortrait.src = `./portraitPicture/${foundPhotographer.portrait}`;

const photographerPrice = document.querySelector('#price');
photographerPrice.innerHTML = foundPhotographer.price;

let medias = [];

function Factory() {
    this.createMedia = function (media) {
        let newMedia;

        if (media.image) {
            newMedia = new Image(media);
        } else if (media.video) {
            newMedia = new Video(media);
        }
        return newMedia;
    }
}

let Image = function (media) {
    this.getHTML = `<img class="hover-shadow open-lightbox image" src="SamplePhotos/${media.photographerFirstName}/${media.image}"/>`;
    this.title = media.title;
    this.id = media.id;
    this.photographerFirstName = media.photographerFirstName;
    this.photographerId = media.photographerId;
    this.image = media.image;
    this.tags = media.tags;
    this.likes = media.likes;
    this.date = media.date;
    this.price = media.price;
};

let Video = function (media) {
    this.getHTML = `<video class="hover-shadow open-lightbox image" src="SamplePhotos/${media.photographerFirstName}/${media.video}"><source src="movie.mp4" type="video/mp4"></video>`;
    this.title = media.title;
    this.id = media.id;
    this.photographerFirstName = media.photographerFirstName;
    this.photographerId = media.photographerId;
    this.video = media.video;
    this.tags = media.tags;
    this.likes = media.likes;
    this.date = media.date;
    this.price = media.price;
};

function run () {
    let factory = new Factory();
    const photographerFirstName = foundPhotographer.name.split(" ")[0];

    const allMedia = data.media;
    allMedia.forEach((media) => {
        if (media.photographerId === parseInt(id)) {
            media.photographerFirstName = photographerFirstName;
            medias.push(factory.createMedia(media));
        }
    });
    createMedias(medias);
};

run();

function createMedias(medias) {
    const mediaDiv = document.querySelector('#all-album');
    mediaDiv.innerHTML = "";

    const modalDiv = document.querySelector('#myModal');
    modalDiv.innerHTML = `<div class="modal-content">
                            <span id="close-lightbox" class="close" >&times;</span>
                            <a id="prev-image" class="prev">&#10094;</a>
                            <a id="next-image" class="next">&#10095;</a>
                          </div>`;

    medias.forEach((media) => {
        const div = document.createElement('div');
        div.classList.add("album");
        div.innerHTML = `<div class="column album">
                            ${media.getHTML}
                            <div class="image-description">
                                <p>${media.title}</p>
                                <p>${media.price}€</p>
                                <div id="likes">
                                    <p>${media.likes}</p>
                                    <i class="fas fa-heart"></i>
                                </div>
                            </div>
                         </div>`
        document.querySelector('#all-album').appendChild(div);

        const divLightbox = document.createElement('div');
        divLightbox.classList.add('mySlides');
        divLightbox.innerHTML = `${media.getHTML}    
                                 <p>${media.title}</p>`
        document.querySelector('#myModal').appendChild(divLightbox);
    });
    const openLightbox = document.querySelectorAll(".open-lightbox");
    openLightbox.forEach((elt, index) => elt.addEventListener("click",() => {
        openModal();
        currentSlide(index +1);
    }));
    const closeLightboxModal = document.querySelector("#close-lightbox");
    closeLightboxModal.addEventListener("click",(closeLightbox));

    const prevSlide = document.querySelector("#prev-image");
    prevSlide.addEventListener("click", function() {
        plusSlides(-1);
    });

    const nextSlide = document.querySelector("#next-image");
    nextSlide.addEventListener("click", function() {
        plusSlides(1);
    });
};

const selects = document.querySelectorAll('.select-box__input');

selects.forEach((input) => input.addEventListener("change",(event) => {
    const filter = event.target.value;
    if (filter === "date") {
        medias.sort((a, b) =>  {
            return new Date(b.date) - new Date(a.date)
        });
    } else if (filter === "title") {
        medias.sort((a, b) =>  {
            return a.title.localeCompare(b.title);
        });
    } else {
        medias.sort((a,b) => {
            return b.likes - a.likes;
        });
    }
    createMedias(medias);
}));

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeLightbox() {
    document.getElementById("myModal").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

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