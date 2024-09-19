//               01234567 indices
let umaString = "um texto";

console.log(umaString);
console.log(umaString[0]);
console.log(umaString[1]);
console.log(umaString[2]);
console.log(umaString[3]);
console.log(umaString[4]);
console.log(umaString[5]);
console.log(umaString[6]);
console.log(umaString[7]);


console.log(umaString.charAt(6));
console.log(umaString.concat(' ', 'em', ' um', ' lindo dia.'));

console.log(umaString.indexOf('text'));
console.log(umaString.indexOf('o', 3));

console.log(umaString.lastIndexOf('t'));

console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/[e]/));

console.log(umaString.replace('um', 'outra'));

console.log(umaString.length);

console.log(umaString.slice(3, 8));
 
console.log(umaString.split(' '));

console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());