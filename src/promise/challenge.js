const fetchData = require('../utils/fetchData');

const API_URL = 'https://rickandmortyapi.com/api/character/';
const CHARACTER = 'character/:id/';
const LOCATION = 'location/:id/';
const EPISODE = 'episode/:id/';

fetchData(API_URL)
    .then(function(data) {
        console.log(data.info.count);
        return fetchData(`${API_URL}${data.results[0].id}`)
    })
    .then(function(data) {
        console.log(data.name)
        return fetchData(data.origin.url)
    })
    .then(function(data) {
        console.log(data.dimension)
    })
    .catch(function(error) {
        console.error(error);
    })