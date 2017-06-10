/** flow */
import mongoose from 'mongoose';
import _ from 'lodash';

export class ProductController {

  /*
  * GET - Get all registers
  */
  findAll(req:any, res:any) {
    mongoose.model('Product').find({}, (err, products) => {
    if(err) res.send(500, err.message);
    console.log('GET /products')
    res.status(200).jsonp(products);
    });
   };

  /**
  * //POST - Add a new product
  */
   add(req, res) {
    console.log(req.body);
    var Product =  mongoose.model('Product')({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      stock: req.body.stock,
      urlImg: req.body.urlImg,
      categoryId: req.body.categoryId,
      created: Date.now()
    });
    Product.save(function(err, product) {
      if(err) return res.send(500, err.message);
      res.status(200).jsonp(product);
    })
   }

   //PUT - Update a register already exists
  update(req, res) {
      let Product =  mongoose.model('Product');
      Product.findById(req.params.id, function(err, product) {

        if(!_.isUndefined(req.body.name) && !_.isEmpty(req.body.name))
          product.name = req.body.name;
        if(!_.isUndefined(req.body.description) && !_.isEmpty(req.body.description))
          product.description = req.body.description;
        if(!_.isUndefined(req.body.price) && !_.isEmpty(req.body.price))
          product.price = req.body.price;
        if(!_.isUndefined(req.body.stock) && !_.isEmpty(req.body.stock))
          product.stock = req.body.stock;
        if(!_.isUndefined(req.body.urlImg) && !_.isEmpty(req.bodyurlImg))
          product.urlImg = req.body.urlImg;
        if(!_.isUndefined(req.body.categoryId) && !_.isEmpty(req.body.categoryId))
          product.categoryId = req.body.categoryId;
        product.updated = Date.now();

      product.save(function(err) {
      if(err) return res.send(500, err.message);
      res.status(200).jsonp(product);
     });
   });
  };

  changeStock(req, res) {
      let Product =  mongoose.model('Product');
      Product.findById(req.body.id, function(err, product) {
          product.stock = req.body.newStock;
          product.updated = Date.now();
      product.save(function(err) {
      if(err) return res.send(500, err.message);
      res.status(200).jsonp(product);
     });
   });
  }

  //GET - Return a register with specified ID
  findById(req, res) {
      let Product =  mongoose.model('Product');
      Product.findById(req.params.id, function(err, product) {
        if(err) return res.send(500, err.message);
        console.log('GET /products/' + req.params.id);
        res.status(200).jsonp(product);
      });
  };

  //GET - Return a register with specified ID
  findByCategory(req, res) {
    console.log(req.params);
      let Product =  mongoose.model('Product');
      Product.find({"categoryId": req.params.id}, (err, products) => {
        if(err) return res.send(500, err.message);
        console.log('GET /products/category/:id' + req.params.id);
        res.status(200).jsonp(products);
      });
  };

}
