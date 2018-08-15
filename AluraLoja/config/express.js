var express = require('express');//ou require('express')()
var app = express();
app.set('view engine','ejs');
app.set('views','./app/views');

module.exports = function (){
   return app;
}