/* 
    TIPOS Primitivos (imutáveis) -> strings. number, boolean, undefined. 
    null (bigint, symbol) -> valores copiados


    TIPOS Referência (mutável) - array, object, function -> valores passados por referencia

*/

let nome = "luiz";
nome[0] = "W";
console.log(nome[0], nome);  // são imutáveis, não é possível alterar o valor

let a = "A";
let b = a; // Cópia, portanto é criado um novo local na memória que cópia 
// o valor de A
console.log(a,b);

a = "outra coisa";
console.log(a,b);

// aqui tinha um objeto (array), e como ele é mútavel, 
// transformei em uma string, que por sua vez é imútavel
let array1 = [1, 2 ,3, 5];
console.log(typeof array1);
console.log(array1 instanceof Array);
console.log("---\b---")
array1 = "luiz"
console.log(typeof array1);
console.log(array1 instanceof Array);

// Passado por refencia
let A = [1,2,3];
let B = A; // B aponta para o mesmo local na memória que A, 
// portanto um alteração em um deles mudará o outro
console.log(A, B);
A.push(4);
console.log(A, B);

// caso queria copiar um objeto
let C = [...A]; // O Objeto não será passado por referencia nesse caso


const t0 = {
    nome : "luiz",
    sobrenome : "otavio"
};

const t1 = t0; // passado por referencia
const t2 = {...t0}; // valor é copiado