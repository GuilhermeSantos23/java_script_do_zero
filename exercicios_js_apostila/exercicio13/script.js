function executarDuasVezes(funcao) {
    funcao();
    funcao();
}

function dizerOlaMundo() {
    console.log("Olá, mundo");
}

executarDuasVezes(dizerOlaMundo);

//parte 1
////////////////////////////////////////////////////////////////////


function criarSaudacao(saudacao){
    return function (nome){
        console.log(`${saudacao} ${nome}, alguém ti perguntou como foi seu dia?`)
    }
}
const recebe = criarSaudacao('Bom dia! ')
recebe('Maria')

//parte 2
///////////////////////////////////////////////////////////////////////

function calcular(a,b,operacao){
    return operacao(a,b);
}

const somar = (a,b) => a + b;
const subtrair = (a,b) => a - b;
const multiplicar = (a,b) => a * b;
const dividir = (a,b) => (a / b).toFixed(2);

console.log(calcular(3, 5, somar));
console.log(calcular(3, 5, subtrair));
console.log(calcular(3, 5, multiplicar));
console.log(calcular(3, 5, dividir));
//parte 3
/////////////////////////////////////////////////////////////////////////


function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}

const quadrado = x => x * x;
const menosDois = x => x - 2;

const teste = compose(quadrado, menosDois);

console.log(teste(5));