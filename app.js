const express = require('express'); 
const pug = require('pug');

const app = express(); 
const port = 3000; 
const host = 'localhost'; 

app.get('/', (req, res) => {

});

app.listen(port, host, () => {
    console.log(`Сервер запущен по адресу http://${host}:${port}/`); 
});