/** @flow */
import mongoose from 'mongoose';

//var Product = mongoose.model('Product');

export class ProductController {
  productModel: any;

  constructor () {
    this.productModel = mongoose.model('Product');
  }

  findAll(req:any, res:any) {
    this.productModel.find({}, (err, products) => {
     if(err) res.send(500, err.message);
     console.log('GET /products')
     res.status(200).jsonp(products);
     });
   };

}


//GET - Return all registers
/*exports.findAll = function(req, res) {
  var Product = mongoose.model('Product');
  Product.find({},function(err, products) {
    if(err) res.send(500, err.message);
    console.log('GET /products')
    res.status(200).jsonp(products);
  });
};


exports.add = function(req, res) {
  console.log('POST');
 console.log(req.body);
 var Product =  mongoose.model('Product')({
   name: req.body.name,
   description: req.body.description,
   price: req.body.price,
   stock: req.body.stock,
   urlImg: req.body.urlImg,
   categoryId: req.body.categoryId
 });
 Product.save(function(err, product) {
   if(err) return res.send(500, err.message);
   res.status(200).jsonp(product);
 })
}*/
