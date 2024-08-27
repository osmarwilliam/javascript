const nome = "osmar william"
const sobrenome = "silva"
const idade = 23;
const peso = 94;
const altura = 1.79;
let imc; // peso / (altura * altura)
let anoNascimento;

// templates strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}Kg`);

imc = peso / (altura * altura);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);

anoNascimento = 2024 - idade;
console.log(`${nome} nasceu em ${anoNascimento}.`);
