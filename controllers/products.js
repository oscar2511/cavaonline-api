var mongoose = require('mongoose');

//GET - Return all registers
exports.findAll = function(req, res) {
  var Product = mongoose.model('product');
 Product.find({},function(err, products) {
 if(err) res.send(500, err.message);
 console.log('GET /products')
 res.status(200).jsonp(products);
 });
};
