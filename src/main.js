import data from "./data.json";

function showPhotographers(selectedTag, photographers) {
    if (selectedTag) {
        filterAndCreatePhotographers(selectedTag, photographers);
    } else {
        createPhotographers(photographers);
    }
}

function showNavTags(tags) {
    tags.forEach((tag) => {
        const nav = document.querySelector("#navigation");
        const link = document.createElement("a");
        link.href = `index.html?tag=${tag}`;
        link.classList.add("tag");
        link.innerHTML = `#${tag}`;
        nav.appendChild(link);
    });
}

function filterAndCreatePhotographers(tag, photographers) {
    const photographersDiv = document.getElementById("photographers");
    photographersDiv.innerHTML = "";

    const photographersFiltered = photographers.filter((artist) => artist.tags.includes(tag));
    createPhotographers(photographersFiltered);
}

function createPhotographers(photographers) {
    photographers.forEach((photographer) => {
        const div = document.createElement("div");
        div.classList.add("photograph");
        div.innerHTML = `<a href="public/photographer-page.html?id=${photographer.id}">
                            <div role="img" aria-label="${photographer.name}">
                                <img class="profile-picture" src="public/portraitPicture/${photographer.portrait}" alt=""/>
                                <h2> ${photographer.name} </h2>
                            </div>
                         </a>
                         <div>
                            <p class="location"> ${photographer.city}, ${photographer.country} </p>
                            <p class="slogan"> ${photographer.tagline} </p>
                            <p class="price"> ${photographer.price}€/jour </p>
                         </div>`;
        const divTag = document.createElement("div");
        photographer.tags.forEach((tag) => {
            const link = document.createElement("a");
            link.href = `index.html?tag=${tag}`;
            link.innerHTML = "#" + tag;
            link.classList.add("tag");
            divTag.appendChild(link);
        });
        div.appendChild(divTag);
        document.getElementById("photographers").appendChild(div);
    });
}

function run() {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedTag = urlParams.get("tag");
    const photographers = data.photographers;
    const tags = data.tags;
    showPhotographers(selectedTag, photographers);
    showNavTags(tags);
}

run();