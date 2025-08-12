function saudacao(nome){
    return `Bom dia, ${nome}!`;
} 

// saudacao("luiz");
// saudacao("maria");

const variavel = saudacao("Luiz");
console.log(variavel)

function soma(x = 1, y = 1){
    return x + y;
}

console.log(soma(2,2));
console.log(soma(4,2));
console.log(soma(5,10));
console.log(soma()); // como foi definido um valor padrão caso n seja passado nenhum número irá retornar 1+1 = 2
console.log(soma("luiz", " otavio"));

// outras maneiras de criar função

const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(25));

// arrow function

const numQuadrado = (n) => {  // const numQuadrado = n => return n **2;
    return n **2;
};

console.log(numQuadrado(2));
