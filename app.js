const express = require('express');
// or const app = require('express')();
const app = express();

app.get('/', (req, res) => {
    console.log('user');
    res.status(200).send('Home Page');
});

app.get('/about', (req, res) => {
    res.status(200).send('About Page');
});

app.all('*', (req, res) => {
    res.status(400).send('<h1>resource not found<h1>');
});

app.listen(5000, () => {
    console.log(`serven is listening on port 5000...`)
});

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen