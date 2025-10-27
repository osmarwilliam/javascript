exports.paginaInicial = (req,res) => {
     res.send(`
    <form action="/" method="POST">
    Nome do Cliente: <input type="text" name="nome">
    <button>Enviar Formulario</button>
    </form>
    `);
};

exports.trataPost = (req, res) => {
    res.send("sua nova rota de post");
};