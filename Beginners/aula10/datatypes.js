const nome = 'will'; // string
const nome1 = "will"; // string
const nome2 = `will`; // string

const num1 = 10; // number
const num2 = 10.52; // number

let nomeAluno; // undefined = não aponta para local nenhum na memória
const sobrenomeAluno = null; // nulo -> nao aponta pra local nenhum na memória

const aprovado = true; // boolean
const reprovado = false; // boolean 

const a = [1, 2];
const b = a;
console.log(a, b);
b.push(3);
console.log(a, b); 
/*  
    * Ponteiros, basicamente o ponteiro de A e B estão apontando para o mesmo local na memória, 
    * logo, qualquer alteracão em um, ou outro, irá alterar ambos os valores das duas variáveis
    * PASSADO POR REFERÊNCIA, mas so ocorre no caso de ser um objeto
*/
console.log(typeof a); // irá dizer que é um objeto, e por ser um objeto ocorrer esse tipo de manipulação

const c = 2;
const d = c;
console.log(c, d);
// sendo const, e um NUMBER, não é possivel alterar, mas seus endereços sao diferentes.
// conhecidos como dados primitivos: string, number, undefined, null, boolean, symbol
console.log(typeof c);