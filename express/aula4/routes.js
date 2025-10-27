const express = require('express'); 
const route = express.Router();

const homeControler = require('./Controllers/homeController');  
const contatoControler = require('./Controllers/contatoController');
// rotas da home
route.get('/', homeControler.paginaInicial);
route.post('/', homeControler.trataPost);

// rotas para contato

route.get('/contato', contatoControler.paginaContato);

module.exports = route;