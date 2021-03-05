import data from './data.json';
console.log(data);

const photographers = data.photographers;

createPhotographers(photographers);
const tags = data.tags;

tags.forEach((tag) => {
    const nav = document.querySelector('#navigation');
    const link = document.createElement('a');
    link.classList.add("tag");
    link.dataset.name = tag;
    link.innerHTML = `#${tag}`
    link.addEventListener('click', function(event) {
        filterAndCreateArtists(tag);
    });
    nav.appendChild(link);
});

function filterAndCreateArtists(tag) {
    const photographersDiv = document.getElementById('photographers');
    photographersDiv.innerHTML = "";

    const photographersFiltered = photographers.filter((artist) => artist.tags.includes(tag));
    createPhotographers(photographersFiltered);
}

function createPhotographers(photographers) {
    photographers.forEach((photographer) => {
        const div = document.createElement('div');
        div.classList.add("photograph");
        div.innerHTML = `<a href="#">
                        <div>
                            <img class="profile-picture" src="public/portraitPicture/${photographer.portrait}" alt=""/>
                            <h2> ${photographer.name} </h2>
                        </div>
                     </a>
                     <div>
                        <p class="location"> ${photographer.city}, ${photographer.country} </p>
                        <p class="slogan"> ${photographer.tagline} </p>
                        <p class="price"> ${photographer.price}€/jour </p>
                     </div>`
        const divTag = document.createElement('div');
        photographer.tags.forEach((tag) => {
            const link = document.createElement('a');
            link.innerHTML = '#' + tag;
            link.classList.add("tag");
            divTag.appendChild(link);
        });
        div.appendChild(divTag);
        document.getElementById('photographers').appendChild(div);
    });
}