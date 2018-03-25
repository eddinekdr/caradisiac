var brands = require('./brands.js');
//var promo = require('./promo.js');
var express = require('express');
var app     = express();

app.get('/scrape', function(req, res){
        brands.print();
 })

app.listen('8081')
console.log('Magic happens on port 8081');