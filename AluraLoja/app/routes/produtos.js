module.exports = function(app){
    app.get('/produtos', function(request, response){
        var mongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/";

        mongoClient.connect(url, function(err,db){
            var dbo = db.db("alura_loja");
            dbo.collection("produtos").find({}).toArray(function(err,resultado){
                if(err) throw 'erro';
                console.log(resultado);
                response.send(resultado);
                db.close();
            })
        });
        
        //response.render("produtos");
    });
}
