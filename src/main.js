import data from './data.json';
console.log(data);

const photographers = data.photographers;

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

const tags = ['portrait', 'art', 'fashion', 'architecture', 'travel', 'sport', 'animals', 'events'];
const result = tags.filter(tags => tags.length > 8);
console.log(result);