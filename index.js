const express = require('express');
const path = require('path');

const app = express();

const port = 4444;

app.get('/', function (req, res) {
     const htmlFile = path.join(__dirname, "views/index.html");
     //console.log(htmlFile);
     res.sendFile(htmlFile);
    /*
    Linux,Apple /
    Win \
    */
   
});

/*
  https://expressjs.com/en/api.html#res.sendFile
  https://install.advancedrestclient.com/install
*/

app.get('/mycolors', (req, res) => {
    //res.sendStatus(200);
    res.sendFile(path.join(__dirname, "data/colors.json"));   
 });

 app.get('/alap.css', (req, res) => {
    res.sendFile(path.join(__dirname, "views/alap.css"));   
 });
 

app.get('/colors', (req, res) => {
   res.json([{
       'code':'#A0A0A0',
    'name': 'Szürke'}]);
   
});

app.get('/script.js', (req, res) =>{
    res.sendFile(path.join(__dirname,"public/script.js"));
});

/*app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname,"views/hiba.html"))
});
*/
app.get('*',function (req, res) {
    res.redirect('/');
});


app.listen(port)