import data from './data.json';
console.log(data);

const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id')
console.log(id);

const photographers = data.photographers;

const foundPhotographerId = photographers.find(photographer => photographer.id === parseInt(id, 10));
console.log(foundPhotographerId);




