const {getBrands} = require('node-car-api');
var model = require('./model.js');

module.exports.print = async function(){

	  const brands = await getBrands();

  //console.log(brands);

  for(var i=0; i<brands.length;i++)
       {
        model.print2(brands[i]);
       }
}

module.exports.print();
