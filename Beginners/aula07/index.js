// nao podemos modificar o valor de uma constante
// nao utilizar VAR, utilizar CONST
const nome = "joao"
console.log(nome);
// SEMPRE TEM QUE DECLARAR E INICIALIZAR UMA CONSTATNTE, E ÓBVIO, SEU VALOR JAMAIS PODERÁ SER MUDADO

const primeiroNumero = 5;
const segundoNumero = 10;
const conta = primeiroNumero * segundoNumero;
// operadores em javascript " +  -  * "
console.log(conta)
let resultado = conta;
resultado += 10;
console.log(resultado);	

// como descobrir o tipo, visto que javascript é uma linguagem de tipagem dinâmica, isto é,
// você nao precisar dizer qual o tipo de algum valor, ele irá descobrir para você
// use o comando "typeof" para descobrir qual é o tipo de algo

let string;
let number = 5;
console.log(typeof(string)); // undefined, visto que não foi adicionado nenhum valor 
console.log(typeof(number)); // type of number
console.log(typeof(number + "20")); // this is considered to be a string
// string + number = string 
// number + number = number
// string + string = string