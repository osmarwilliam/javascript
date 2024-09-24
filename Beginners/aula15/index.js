let num1 = 1;
let num2 = 2.5;

console.log(num1.toString() + num2); // method to string
console.log(typeof num1);
num1 = num1.toString();
console.log(typeof num1);

console.log("---------------\b");
console.log("\b")

// representando número inteiro em binário (ou qualquer base) usando .toString

num1 = 10;
console.log(num1.toString(2)); // É possível representar qualquer base, basta colocar qual base será representada dentro do método .tostring()

console.log("---------------\b")
console.log("\b")

// como definir quantas casas decimais um número terá
num1 = 10.52123125532
console.log(num1.toFixed(4)); // terá 4 casas decimais

console.log("---------------\b")
console.log("\b")

// como verificar se um número é Inteiro

num1 = 10;
console.log(Number.isInteger(num1)); // returns true or false

let verify = Number.isInteger(num1);
console.log(verify);

let temp = num1 * "5";
console.log(temp);
console.log(Number.isNaN(temp));

console.log("---------------\b")
console.log("\b")
// 

num1 = 0.7;
num2 = 0.2;
console.log(num1 + num2);

let num3 = num1 + num2;
num3 = num3.toFixed(2);
num3 = Number(num3);
console.log(num3);
console.log(Number.isInteger(num3));