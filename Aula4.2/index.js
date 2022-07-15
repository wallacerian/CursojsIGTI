//LET + CONST

//ES5
if(true){
    var v = "AULA"
}

//console.log(v)

//ES6
let x = "Aula"

//console.log(x)

const PI = 3.141595;

console.log(PI);

//PI = 3.15;

/*const Aluno = {
    nome: "Bruno",
    sobrenome: "Texeira"
}

console.log(Aluno.nome);

Aluno.nome = "Carlos";

console.log(Aluno.nome);

*/
var soma = function(a, b) {
    return a + b;
}
function soma2(a, b) {
    return a + b;
}

//ES6
let soma3 = (a, b) => {return a + b};

let soma4 = (a, b,) => a + b;

let log = () => {console.log("Erro");}

const Aluno = {
    nome: "Ana",
    getAluno: function () { return console.log(this)}
}

Aluno.getAluno();

const Aluno3 = {
    nome: "Ana",
    getAluno: () => {return console.log(this)}
}

Aluno3.getAluno();

/*------------------------------------CLASSES----------------------------------------------------------*/

//ES5
function Carro(marca){
    this.marca = marca;
}

Carro.prototype.getMarca = function a () {};

//E6
class Carro1 {
    constructor(marca){
        this.marca = marca;
    }
    getMarca () {
        return this.marca;
    }
}


class Veiculo {
    constructor (marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    getMarca() {
        return this.marca;
    }
    getModelo() {
        return this.modelo;
    }
}


class Carro2 extends Veiculo {
    constructor(marca, modelo, estepe){
        super(marca,  modelo);
        this.estepe = estepe; 
    } 
    getInfo() {
        return console.log("Marca: " + super.getMarca() + ", Modelo: ", super.getModelo());
    }
}

/*------------------------------Template String ---------------------------*/

//ES5
var nome = "Marina"
var idade = 19
var curso = "Computacao"

var frase = nome + " tem" + idade + " anos \n e cursa" + curso;

//console.log(frase);

//ES6
let nome1 = "Marina"
let idade1 = 19
let curso1 = "Computação"

let frase1 = `${nome1} tem ${idade1} anos e cursa ${curso1}`;

//console.log(frase1)

//*-------------------------------------------------DESCTRUCTING-------------------------------*/

//ES5

var carros = ["Uno","Gol"];

var car1 = carros[0];
var car2 = carros[1];

//ES6 

let [a, b] = ["Uno", "Gol", "Onix"];

console.log(a);
console.log(b);

[a, b] = [b ,a];

console.log(a);
console.log(b);

const c1 = {modelo: "Onix", ano: 2019};

const {modelo, ano} = c1;

console.log(modelo);
console.log(ano);

const printCarroInfo = ({modeloano}) => console.log(`Modelo: ${modelo} Ano: ${ano}`);

printCarroInfo(c1);


/*-----------------------------DEFAUL + REST + SPREAD-----------------------------*/

//ES5 
var soma6 = function(a, b) {
    if(a === undefined) a =1;
    if(b === undefined) b = 1;
    return a + b;
}

//ES6

let soma7 = (a = 1, b = 1) => a + b;

//REST 
function soma8(...valores) {
    return valores.reduce((anterior, atual) => { return anterior + atual})
}

console.log(soma8(10,10,10,10,10,10,10,10));

console.log(soma8(1));

//SPREAD

function soma9(a, b, c){
    return a + b + c;
}

let numeros = [1, 2, 3];

console.log(soma9(...numeros));

/*--------------------------------------------FOR OF-----------------------------*/
//FORCE OF - Arrays, Maps, Strings, Sets

for(let numero of numeros){
    console.log(numero);
}

for(let numero in numeros){
    console.log(numero);
}

const Aluno4 = {
    nome: 'Pedro',
    idade: 27,
    curso: 'Matematica',
    [Symbol.iterator]: function* (){
        yield this.nome;
        yield this.idade;
        yield this.curso;
    }
}

for(let prop of Aluno4){
    console.log(prop);
}

for(let prop in Aluno4){
    console.log(prop);
}