
//3. Explique com suas palavras o que é um closure e por que ele é útil. 
//4. Qual será o resultado do código abaixo? 
//function criarContador() { 
//let i = 0; 
//return function() { 
//return ++i; 
//} 
//} 
//let c1 = criarContador(); 
//let c2 = criarContador(); 
//console.log(c1()); // ? 
//console.log(c1()); // ? 
//
//console.log(c2()); // ?
function saudacao(){
    return function (nome){
        console.log(`Olá, ${nome}`)
    }
}
const saudar = saudacao(); 
saudar('Maria');

//parte 1
//////////////////////////////////////////////////


function multiplicador (x){
    return function (valor) {
        console.log(valor * x);
    }
}

const dobrar = multiplicador(2);
dobrar(20);
