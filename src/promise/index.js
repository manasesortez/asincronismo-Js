var valor = true;

//primera forma de hacer un promise
const somethingWillHappen = function() {
    return new Promise(function(resolve, reject) {
        if (valor) {
            return resolve('Heey!')
        } else {
            return reject('Whoooops!!')
        }
    });
}

somethingWillHappen()
    .then(function(Response) {
        return console.log(Response)
    })
    .catch(function(err) {
        return console.error(err)
    });


//segunda forma de hacer un promise
//ES MUY IMPORTANTE HACER ESTE TIPO DE ESTRUCTURA
const somethingWillHappen2 = function() {
    return new Promise(function(resolve, reject) {
        if (true) {
            setTimeout(function() {
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('Whoooops!');
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then(function(Response) {
        return console.log(Response)
    })
    .catch(function(err) {
        return console.error(err)
    });


//crearemos un arrays de 2 promesas
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(function(response) {
        console.log('arrays of results', response)
    })
    .catch(function(err) {
        console.error(err);
    });