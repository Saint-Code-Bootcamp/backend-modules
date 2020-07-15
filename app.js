const express = require('express'); 
const pug = require('pug');
const mydate = require('./modules/mydate');

const app = express(); 
const port = 3000; 
const host = 'localhost'; 


app.get('/', (req, res) => {
    const compiledFunction = pug.compileFile('templates/index.pug');
    date = mydate.getFormatedDate();
    const resp = compiledFunction({now: date});
    res.send(resp);
});

app.listen(port, host, () => {
    console.log(`Сервер запущен по адресу http://${host}:${port}/`); 
});