const {getModels} = require('node-car-api');

module.exports.print2 = async function(a) {
  const models = await getModels(a);

  console.log(models);
}

//module.exports.print2('PEUGEOT');