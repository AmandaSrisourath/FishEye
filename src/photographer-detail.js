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
    this.getHTML = `<img class="hover-shadow open-lightbox image" src="SamplePhotos/${media.photographerFirstName}/${media.image}">`;
    this.photographerFirstName = media.photographerFirstName;
    this.id = media.id;
    this.photographerId = media.photographerId;
    this.image = media.image;
    this.tags = media.tags;
    this.likes = media.likes;
    this.date = media.date;
    this.price = media.price;
};

let Video = function (media) {
    this.getHTML = `<img class="hover-shadow open-lightbox image" src="SamplePhotos/${media.photographerFirstName}/${media.video}">`;
    this.photographerFirstName = media.photographerFirstName;
    this.id = media.id;
    this.photographerId = media.photographerId;
    this.video = media.video;
    this.tags = media.tags;
    this.likes = media.likes;
    this.date = media.date;
    this.price = media.price;
};

function run () {
    let medias = [];
    let factory = new Factory();
    const photographerFirstName = foundPhotographer.name.split(" ")[0];

    const allMedia = data.media;
    allMedia.forEach((media) => {
        if (media.photographerId === parseInt(id)) {
            media.photographerFirstName = photographerFirstName;
            medias.push(factory.createMedia(media));
        }
    });

    medias.forEach((media) => {
        const div = document.createElement('div');
        div.classList.add("album");
        div.innerHTML = `<div class="column album">
                            ${media.getHTML}
                            <div class="image-description">
                                <p>Arc-en-ciel</p>
                                <p>${media.price}€</p>
                                <div id="likes">
                                    <p>${media.likes}</p>
                                    <i class="fas fa-heart"></i>
                                </div>
                            </div>
                         </div>`
        document.querySelector('#all-album').appendChild(div);
    });console.log(medias);
};

run();

// ${media.id} ${media.photographerId} ${media.image} ${media.tags} ${media.likes} ${media.date} ${media.price}