const numero = Number(prompt("Digite um número: "));
const numeroTitulo = document.getElementById('numero-titulo').innerHTML = numero;
const raizQuadrada = document.getElementById("raiz-quadrada");
const isInteiro = document.getElementById("isInter");
const isNotANumber = document.getElementById("isNan");
const paraCima = document.getElementById("toCeil");
const paraBaixo = document.getElementById("toFloor");
const duasCasas = document.getElementById("duasCasasDecimais");

// numeroTitulo.innerHTML = numero;
raizQuadrada.innerHTML = Math.sqrt(numero);
isInteiro.innerHTML =  `O número ${numero} é inteiro: ${Number.isInteger(numero)}`;
isNotANumber.innerHTML = Number.isNaN(numero); 
paraBaixo.innerHTML = Math.floor(numero)
paraCima.innerHTML = Math.ceil(numero);
duasCasas.innerHTML =   numero.toFixed(2);

