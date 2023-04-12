const express = require('express');
require('dotenv').config();

const app=express();

//EJS

app.set('view engine','ejs');

//body-parser
app.use(express.urlencoded({ extended: true }));


//adding static files like css
app.use('/',express.static(__dirname+"/assets"))


app.get('/',function(req,res){
    res.render('index');
})
app.get('/notes',function(req,res){
    res.render('notes');
})
app.get('/analyzer',function(req,res){
    res.render('analyzer');
})

var PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
