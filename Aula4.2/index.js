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

const Aluno = {
    nome: "Bruno",
    sobrenome: "Texeira"
}

console.log(Aluno.nome);

Aluno.nome = "Carlos"


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
class Carro {
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


class Carro extends Veiculo {
    construtor(marca, modelo, estepe){
        super(marca,  modelo);
        this.estepe = estepe; 
    } 
    getInfo() {
        return console.log("Marca: " + super.getMarca() + ", Modelo: ", super.getModelo());
    }
}