const express = require('express'); 
const pug = require('pug');

const app = express(); 
const port = 3000; 
const host = 'localhost'; 

function getFormatedDate(){
    const now = new Date();
    const formatDate = now.getFullYear() + '-' +  
                     ('0' + (now.getMonth() + 1)).slice(-2) + '-' + 
                     ('0' + now.getDate()).slice(-2);
    return formatDate;
}

app.get('/', (req, res) => {
    const compiledFunction = pug.compileFile('templates/index.pug');
    date = getFormatedDate();
    const resp = compiledFunction({now: date});
    res.send(resp);
});

app.listen(port, host, () => {
    console.log(`Сервер запущен по адресу http://${host}:${port}/`); 
});