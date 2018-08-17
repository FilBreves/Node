var app = require('./config/express')();
var rotasProdutos = require("./app/routes/produtos")(app);

app.get('/', function(request, response){
    //response.send("Home"); //manda response pra tela
    response.render('home'); //renderiza pagina no response
});

app.listen(3000, function(){ // Função que será chamada assim que o servidor estiver rodando
    console.log("Servidor online na porta 3000");
    //teste pull request
});
