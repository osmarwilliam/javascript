  
// extracting characters methods: at, charAt, charCodeAt

    let phaseMethod = "this is a test, there are 4 methods for extracting" +
    "string characters";

    const fristMethod = phaseMethod.charAt(0);
    console.log(fristMethod);

    const secondMethod = phaseMethod.at(1);
    console.log(secondMethod);

    const thirdMethod = phaseMethod.charCodeAt(2); // verify the UniCode
    console.log(thirdMethod);

// Extracting String Parts: slice(start, end), substring(start), substr(start, Length)
 
let phaseMethod1 = "this is a test of extracts a part of a string and" + 
"returns the extracted part";

const firstExtract = phaseMethod1.slice(8, 17);
console.log(firstExtract);

const secondExtract = phaseMethod1.substring(8, 27);
console.log(secondExtract);

const thirdExtract = phaseMethod1.substr(7, 30);
console.log(thirdExtract);

// Converting to Upper and Lower case

let test = "let's test how to upper case something in js";
let testupper = test.toUpperCase();
console.log(testupper);

let testlower = testupper.toLowerCase();
console.log(testlower);
 
// concat() method:

let txt1 = "Hello";
let txt2 = "World";
let txt3 = txt2.concat(txt1, " ");
let txt4 = txt2.concat(" ", txt1);

console.log(txt3);
console.log(txt4);

// Removing White Space
let text1 = "           hello world!      ";
console.log(text1);
text1 = text1.trim();
console.log(text1);

// Removing white space from start and from the end 

text1 = "           hello world!      ";
text1 = text1.trimStart();
console.log(text1)

text1 = text1.trimEnd();
console.log(text1);



// adding a padding at beggining and at the end of a string

let texto = "7";
texto = texto.padStart(4, "x");
console.log(texto);

let texto1 = "7";
texto1 = texto1.padEnd(4, "0");
console.log(texto1);

// how to repeat the string several times

let repeat = "Olá, repetindo essa frase várias vezes usando repeat method \n";
repeat = repeat.repeat(4);
console.log(repeat);


// replacing method
// if you wanna to replace all matches you can use the regular expression /g 
let replace = "Testando como o replace method funciona, trocando linux --> windows"
console.log(replace);
replace = replace.replace(/linux/i, "windows"); // use /i flag to replace insentive cases
console.log(replace);

// Converting a String to an Array

let texto2 = "Esse é um exemplo de como uma separação de array funciona usando os métodos em js"

// How to search the index position: indexOf(), lastIndexOf(), search() 

let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate"); // first index
console.log(index);

index = text.lastIndexOf("locate"); //last index
console.log(index);

index = text.search(/locate/);
console.log(index);


// JavaScript String match()

text = "The rain in SPAIN stays mainly in the plain";
index = text.match("ain");
console.log(index);

index = text.match(/ain/);
console.log(index);

index = text.match(/ain/g); // global search
console.log(index);

index = text.match(/ain/gi); // global search case-insensitive
console.log(index);

console.log("---------------\b");
console.log("\b");

// String matchAll() 

text = "The rain in SPAIN stays mainly in the plain";
let iterator = text.matchAll("ain");
console.log(index);

iterator = text.matchAll(/ain/g);
console.log(index);

console.log("---------------\b");
console.log("\b");

// String includes() = return true if a string contains a specified value 

text = "Hello world, welcome to the universe.";
let includes = text.includes("hello"); // is case sensitive 
console.log(includes);
 
includes = text.includes("world");
console.log(includes);

includes = text.includes("world", 12);
console.log(includes);

console.log("---------------\b");
console.log("\b");

// string startsWith(): method returns true if a string begins with
// a specified value otherwise it returns false

text = "Hello world, welcome to the universe.";
let startswith = text.startsWith("world");
console.log(startswith);

startswith = text.startsWith("world", 5); // a start position for search can be specified
console.log(startswith);

text = "John Doe";
let endsWith = text.endsWith("e"); // case sensitive
console.log(endsWith);