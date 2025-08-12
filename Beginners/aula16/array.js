//                 0        1       2    3    4    5
const alunos = ['luiz', 'maria', 'joao', 1, true, null]; 
// aceita diversos tipos, mas como boa prática de progamação deixe apenas um tipo dentro do array

console.log(alunos);

alunos[0] = "eduardo";
alunos[3] = "luiza";

console.log(alunos.length);

alunos.push("gustavo"); // adiciona sempre no fim
console.log(alunos.length);

alunos.unshift("maria"); // adiciona sempre no inicio, primeiro indice
console.log(alunos);

alunos[alunos.length] = "fabio";
console.log(alunos.length);

alunos.pop(); // remove o último elemento
console.log(alunos);

const removido = alunos.pop(); // pop retorna o elemento removido
console.log(removido);

const removidoPrimeiro = alunos.shift(); // shift remove o primeiro elemento
console.log(alunos);

delete alunos[1]; // deleta o elemento mas deixa o espaço onde ele estava vazio
console.log(alunos);

console.log(alunos[50]); // é possível acessar um elemento que nao existe no array, e n irá estourar nenhum erro


console.log(alunos.slice(0,3)); // fatiamente

console.log(typeof alunos);
console.log(alunos instanceof Array);





