const express = require('express');
const ejs = require('ejs');
const fs = require('fs');
const pokemon = require('./public/json/pokemon.json')



const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.render('home', {
    script: "/js/pokedex.js"
  });
});


pokemon.forEach(element => {
  app.get('/pokedex/'+element.name, (req, res) => {
    res.render('pokemon', {pokemon : element
    });});
});

app.get('/pokedex', (req, res) => {
  res.render('gen');
});

app.get('/box', (req, res) => {
  res.render('boxDisplay', {
    script: "/js/pokedex.js"
  });
});


app.listen(app.get('port'), () => {
  console.log(`Express started on http://localhost:${
    app.get('port')}; press Ctrl-C to terminate.`);
});