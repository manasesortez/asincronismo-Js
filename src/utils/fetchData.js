//variable para peticiones xmlhttprequest
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//en este codigo hacemos peticiones a la api!!
const fechtData = function(url_api) {
    return new Promise(function(resolve, reject) {
        let xhttp = new XMLHttpRequest();

        xhttp.open('GET', url_api, true);
        //validacion de que esta funcinoando la peticion
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState === 4) {
                if (xhttp.status === 200) {
                    return resolve(JSON.parse(xhttp.responseText))
                } else {
                    return reject(new Error('Error', url_api))
                }
            }
        }
        xhttp.send();
    });
}

module.exports = fechtData;