const express = require('express');
const path = require('path');

const app = express();

const port = 4444;

app.get('/', function (req, res) {
     const htmlFile = path.join(__dirname, "views/index.html");
     console.log(htmlFile);
     res.sendFile(htmlFile);
    /*
    Linux,Apple /
    Win \
    */
   
});

app.get('/script.js', (req, res) =>{
    res.sendFile(path.join(__dirname,"public/script.js"));
})
 
app.listen(port)