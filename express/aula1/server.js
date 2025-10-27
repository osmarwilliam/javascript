const express = require('express');

const app = express();

//          criar   ler     atualizar,  apagar
// CRUD --> CREATE  READ    UPDATE      DELETE
//          POST    GET     PUT         DELETE
 
// quando criamos um servidor, essas são as operações que nosso servidor deve ser capaz de fazer

/* 

app.get('/', (req, res) => {
    // é possível mandar um html
    res.send('<b>hello</b> <br>world</br>');
    // mas para atualizara é necessário sempre para o servidor e reiniciar ele
});

*/

app.get('/', (req, res) =>{
    res.send(`
    <form action="/" method="POST">
    Nome do Cliente: <input type="text" name="nome">
    <button>Enviar Formulario</button>
    </form>
    `);
});

app.post('/', (req,res) => {
    res.send('Recebi o formulario')
});

app.get('/contato', (req, res) => {
    res.send('<b>Obrigado</b> por entrar em contato com a gente');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('servidor executando na porta 3000!');
});