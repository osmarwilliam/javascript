/* function adicionarPessoa(nome, sobrenome, peso, altura){
    return {
        nome : nome,
        sobrenome : sobrenome,
        peso : peso,
        altura : altura
    };
}
 */
function meuEscopo (){
    const formulario =  document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    
    /* formulario.onsubmit = function (evento){
        evento.preventDefault();
        alert(1);
        console.log("foi enviado")
    }; */

    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = formulario.querySelector('.nome');
        const sobrenome = formulario.querySelector('.sobrenome');
        const peso = formulario.querySelector('.peso');
        const altura = formulario.querySelector('.altura');
        pessoas.push({
            nome: nome.value, 
            sobrenome: sobrenome.value, 
            peso: peso.value, 
            altura: altura.value
        });
        resultado.innerHTML += `${nome.value} ${sobrenome.value}, ${peso.value}kg's, ${altura.value} metros </br>`;
    }

    console.log(pessoas)
    formulario.addEventListener('submit', recebeEventoForm);

}

meuEscopo();

