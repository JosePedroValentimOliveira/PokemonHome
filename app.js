const express = require('express');
const ejs = require('ejs');


const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
  res.render('boxDisplay',{script: "/js/gen1.js"});
});
app.get('/gen2', (req,res) => {
  res.render('boxDisplay',{script: "/js/gen2.js"});
});
app.get('/gen3', (req,res) => {
  res.render('boxDisplay',{script: "/js/gen3.js"});
});
app.get('/gen4', (req,res) => {
  res.render('boxDisplay',{script: "/js/gen4.js"});
});
app.get('/gen5', (req,res) => {
  res.render('boxDisplay',{script: "/js/gen5.js"});
});
app.get('/gen6', (req,res) => {
  res.render('boxDisplay',{script: "/js/gen6.js"});
});
app.get('/gen7', (req,res) => {
  res.render('boxDisplay',{script: "/js/gen7.js"});
});
app.get('/gen8', (req,res) => {
  res.render('boxDisplay',{script: "/js/gen8.js"});
});


app.listen(app.get('port'), () => {
  console.log(`Express started on http://localhost:${
    app.get('port')}; press Ctrl-C to terminate.`);
});