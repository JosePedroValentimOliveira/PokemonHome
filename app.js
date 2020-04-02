const express = require('express');
const ejs = require('ejs');
const fs = require('fs');



const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));




app.get('/', (req, res) => {
  res.render('home', {
    script: "/js/pokedex.js"
  });
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