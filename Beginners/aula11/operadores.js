/*
    * Operadores Aritméticos
    *  + adição/concatenação
    *  - subtração
    *  / divisão
    *  * multiplicação
    *  ** potenciação
    *  % resto da divisão/operador mod
    * 
    * 
    * 
*/

const num1 = "5";
const num2 = 5;
console.log(num1 + num2); // concatenação

// contador 
let contador = 1;
contador++;
contador += 1; // contador = contador + 1 
++contador;
console.log(contador); 
console.log(contador++);
console.log(contador);

// converter string em número
const num4 = parseInt('5'); // e converte para número inteiro
console.log(typeof num4);
const num5 = parseFloat('5.3'); // converte com casas decimais
const num6 = Number('5'); // converte tanto int e floats
 
