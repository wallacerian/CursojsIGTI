/* ---------------------------String.trimStart() e String.trimEnd()------------------ */

let email = " teste@teste.com.br";

console.log(email)

console.log(email. trimStart());

let login = "testelogin ";

console.log(login);

console.log(login.trimEnd());

/**-----------------------------------Parametro opcional do Catch ----------------------------------*/

const api = new Promise((resolve, reject) => {
    if(Math.random() > 0.5) resolve('Sucesso')
    resolve('Falha')
})

function request() {
    api
    .then(console.log)
    .catch(console.error);
}

request();

async function request1(){
    const retorno = await api;
    console.log(retorno);
}

//request1();


async function request2(){
    try {
        const retorno = await api;
        console.log(retorno);
    } catch(err) {
        console.error(err);
    }
}


/**---------------------------------Array.flat() e Array.flatMap()-------------------------------- */

let arr = [1, 2, [3, 4]];

console.log(arr.flat())

let arr2 = [1, 2, [3, 4, [5, 6]]]

console.log(arr.flat(2));

console.log(arr4.flat(Infinity));

let arr5 = [1, 2, 3, , 5];

console.log(arr5);
console.log(arr5.flat());
