var mongoose = require('mongoose');
var Category = mongoose.model('Category');

//GET - Return all registers
exports.findAll = function(req, res) {
  var Category = mongoose.model('Category');
 Category.find({},function(err, category) {
 if(err) res.send(500, err.message);
 console.log('GET /categories')
 res.status(200).jsonp(category);
 });
};

exports.add = function(req, res) {
 console.log(req.body);
 var Category =  mongoose.model('Category')({
   name: req.body.name,
   description: req.body.description,
   price: req.body.price,
   stock: req.body.stock,
   urlImg: req.body.urlImg,
   categoryId: req.body.categoryId
 });
 Category.save(function(err, category) {
   if(err) return res.send(500, err.message);
   res.status(200).jsonp(category);
 })
}
