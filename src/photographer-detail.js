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


/*
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
    this.type = image;
    this.getHTML = `<img src="SamplePhotos/${media.photographerFirstName}/${media.image}"/>`;
};

let Video = function (media) {
    this.type = video;
    this.getHTML = `${}`;
};

function run () {
    let medias = [];
    let factory = new Factory();
    const photographerFirstName = foundPhotographer.name.split(" ")[0];

    const allMedia = data.media;
    allMedia.forEach((media) => {
        if (media.photographerId === id) {
            media.photographerFirstName = photographerFirstName;
        }
    });

    medias.push(factory.createMedia("image"));
    medias.push(factory.createMedia("video"));
}*/