//**---------------------------PROMISES.prototype.finally()----------------------- */

const api = new Promise((resolve, reject) => {
    if(Math.random() > 0.5) resolve('Sucesso')
    resolve('Falha')
})

api
.then(res => {console.log(res)
    log();
})

.catch(rej => {
    console.log(rej);
    log();
})

function log(){
    console.log("chamada concluida");
}

api
.then(res => {
    console.log(res);
})

.catch(rej => {
    console.log(rej);
})

.finally(
    log()
)

/**-------------------------------------------SPREad + Rest ----------------------------*/

const valor = {
    x: 1, y: 2, a: 3, b: 4
};

const {x, y, ...z} = valores;

console.log(x);
console.log(y);
console.log(z);

/**----------------------ASYNCHRONOUS ITERATION-------------------------------*/

const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/1',
];

async function getTodo() {

     await urls.forEach( async (url, idx) => {
        let todo = await fetch(url);
        console.log(`Retorno Todo ${idx + 1}:`, todo);
     })

     console.log("Concluido");
}

getTodo();

async function getTodo2(){
    for (const [idx, url] of urls.entries()) {
         const todo = await fetch(url);
         console.log(`Retorno Todo ${idx + 1}:`, todo);
    }

    console.log("Concluido");
}