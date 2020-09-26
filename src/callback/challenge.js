//llamada a la api's example callbacks

const API_URL = 'https://rickandmortyapi.com/api/character/';
const CHARACTER = 'character/:id/';
const LOCATION = 'location/:id/';
const EPISODE = 'episode/:id/';

const OPTS = { crossDomain: true };
//variable para peticiones xmlhttprequest
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//en este codigo hacemos peticiones a la api!!
function fechtData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    //validacion de que esta funcinoando la peticion
    xhttp.onreadystatechange = function(event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error' + url_api)
                return callback(error, null)
            }
        }
    }
    xhttp.send();
}

fechtData(API_URL, function(error1, data1) {
    if (error1) {
        return console.error(error1);
    }
    fechtData(API_URL + data1.results[0].id, function(error2, data2) {
        if (error2) {
            return console.error(error2);
        }
        fechtData(data2.origin.url, function(error3, data3) {
            if (error3) {
                return console.error(error3);
            }
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })
})