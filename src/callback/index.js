const API_URL = 'https://rickandmortyapi.com/api/'
const CHARACTER = 'character/:id/';
const LOCATION = 'location/:id/';
const EPISODE = 'episode/:id/';

const OPTS = { crossDomain: true };


//function of suma
function suma(n1, n2) {
    return n1 + n2;
}

function calc(n1, n2, callback) {
    return callback(n1, n2);
}

console.log(calc(2, 2, suma));



//example of a callback on JavaScripts
function date(callback) {
    console.log(new Date);
    setTimeout(function() {
        var date = new Date;
        callback(date);
    }, 3000)
}

function printDate(dateNow) {
    console.log(dateNow);
};

date(printDate);