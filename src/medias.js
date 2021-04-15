let lastFocusedElt;

function Factory() {
    this.createMedia = function (media) {
        let newMedia;

        if (media.image) {
            newMedia = new Image(media);
        } else if (media.video) {
            newMedia = new Video(media);
        }
        return newMedia;
    };
}

let Image = function (media) {
    this.getHTML = `<img tabindex="0" alt="${media.alt}" class="hover-shadow open-lightbox image" src="SamplePhotos/${media.photographerFirstName}/${media.image}"/>`;
    this.alt = media.alt;
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
    this.getHTML = `<video title="${media.alt}" class="hover-shadow open-lightbox image" src="SamplePhotos/${media.photographerFirstName}/${media.video}" controls><source src="movie.mp4" type="video/mp4"></video>`;
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

function displayMedia(medias) {
    const mediaDiv = document.querySelector("#all-album");
    mediaDiv.innerHTML = "";

    const modalDiv = document.querySelector("#myModal");
    modalDiv.innerHTML = `<div aria-label="image closeup view" class="modal-content">
                            <span tabindex="1" aria-label="Close dialog" id="close-lightbox" class="close" >&times;</span>
                            <a tabindex="1" aria-label="Previous image" id="prev-image" class="prev">&#10094;</a>
                            <a tabindex="1" aria-label="Next image" id="next-image" class="next">&#10095;</a>
                          </div>`;

    medias.forEach((media) => {
        const div = document.createElement("div");
        div.classList.add("album");
        div.innerHTML = `<div class="album">
                            ${media.getHTML}
                            <div class="image-description">
                                <p>${media.title}</p>
                                <div id="price-like">
                                <p>${media.price}€</p>
                                <div id="likes" aria-label="likes">
                                    <p>${media.likes}</p>
                                    <span class="heart"><i class="fas fa-heart"></i></span>
                                </div>
                            </div>
                            </div>
                         </div>`;
        document.querySelector("#all-album").appendChild(div);

        const divLightbox = document.createElement("div");
        divLightbox.classList.add("slides");
        divLightbox.innerHTML = `${media.getHTML}    
                                 <p>${media.title}</p>`;
        document.querySelector("#myModal").appendChild(divLightbox);
    });
}

function bindMedias() {
    const openLightbox = document.querySelectorAll(".open-lightbox");
    openLightbox.forEach((elt, index) => {
        elt.addEventListener("click",() => {
            openLightboxOnEvent(index);
        });
        elt.addEventListener("keydown", (event) => {
            if (event.keyCode === 13) {
                openLightboxOnEvent(index);
            }
        });
    });
    const closeLightboxModal = document.querySelector("#close-lightbox");
    closeLightboxModal.addEventListener("click",(closeLightbox));
    closeLightboxModal.addEventListener("keydown", (event) => {
        if (event.keyCode === 13) {
            closeLightbox();
        }
    });
    const prevSlide = document.querySelector("#prev-image");
    prevSlide.addEventListener("click", function() {
        previousImages();
    });
    prevSlide.addEventListener("keydown", (event) => {
        if (event.keyCode === 13) {
            previousImages();
        }
    });
    const nextSlide = document.querySelector("#next-image");
    nextSlide.addEventListener("click", function() {
        nextImages();
    });
    nextSlide.addEventListener("keydown", (event) => {
        if (event.keyCode === 13) {
            nextImages();
        }
    });
}

function createMedias(medias) {
    displayMedia(medias);
    bindMedias();
}

function filterMedias(event, medias) {
    const filter = event.target.value;
    if (filter === "date") {
        medias.sort((a, b) =>  {
            return new Date(b.date) - new Date(a.date);
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
}

function openModal() {
    lastFocusedElt = document.activeElement;
    const myModal = document.getElementById("myModal");
    myModal.style.display = "block";
    myModal.focus();
}

function closeLightbox() {
    document.getElementById("myModal").style.display = "none";
    lastFocusedElt.focus();
}

function openLightboxOnEvent(index) {
    openModal();
    currentSlide(index +1);
}

function previousImages() {
    plusSlides(-1);
}

function nextImages() {
    plusSlides(1);
}

let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".slides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

export {
    Factory,
    createMedias,
    filterMedias,
    showSlides,
};