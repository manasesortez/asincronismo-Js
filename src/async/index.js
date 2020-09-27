const doSomethingsAsync = function() {
    return new Promise(function(resolve, reject) {
        if (true) {
            setTimeout(function() {
                resolve('Do somethings Async!!')
            }, 3000)
        } else {
            reject(new Error('Test Error!!'))
        }
    });
}

const doSomething = async function() {
    const somethings = await doSomethingsAsync();
    console.log(somethings);
}

console.log('before');
doSomething();
console.log('after');

const anotherFunction = async function() {
    try {
        const somethings = await doSomethingsAsync();
        console.log(somethings);
    } catch (error) {
        console.error(error);
    }
}

console.log('before 1');
anotherFunction();
console.log('after 1');