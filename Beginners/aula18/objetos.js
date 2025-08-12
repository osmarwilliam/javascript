const pessoa1 = {
    nome : 'luiz',
    sobrenome : 'MIranda',
    idade : 25
};


console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

function criaPessoa (nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome : sobrenome,
        idade : idade
    };
}

const pessoa2 = criaPessoa("maria", "silva", 25);
const pessoa3 = criaPessoa("luiza", "silva", 50);


// Quando uma função está dentro de um objeto ela é chamada de method
const pessoa = {
    nome : 'luiz',
    sobrenome : 'MIranda',
    idade : 25,

    fala () { // method
        console.log(`Meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos.`)
    },

    incrementaIdade(x = 1){  // method
        this.idade += x;
    }
};

pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade(3);
pessoa.fala();
