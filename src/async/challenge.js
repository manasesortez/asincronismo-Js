const fetchData = require('../utils/fetchData');
const API_URL = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async function() {
    try {
        const data = await fetchData(API_URL);
        const character = await fetchData(`${API_URL}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch (error) {
        console.error(error);
    }
}

console.log('Before');
anotherFunction(API_URL);
console.log('After');