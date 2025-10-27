const express = require('express');
const app = express();

app.use(express.urlencoded({extended : true}));

app.get('/', (req, res) =>{
    res.send(`
    <form action="/" method="POST">
    Nome do Cliente: <input type="text" name="nome">
    <button>Enviar Formulario</button>
    </form>
    `);
});

app.get('/testes/:idUser?/:parametros?', (req, res) =>{
    //console.log(req.params);
    console.log(req.params);
    
    console.log(req.query);

    res.send(req.query.facebookProfile);
    
    //if(req.query){
    //    //res.send("ola: "+ req.params.idUser);  
    //    res.send(req.query);
    //}else{
    //    res.send("Página Testes");  
    //}

});

app.post('/', (req,res) => {
    console.log(req.body);
    res.send(`o que vc me enviou foi: ${req.body.nome}`)
});


app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('servidor executando na porta 3000!');
});
