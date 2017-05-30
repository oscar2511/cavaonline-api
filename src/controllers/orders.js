/** flow */
import mongoose from 'mongoose';
import _ from 'lodash';

export class OrderController {

  /*
  * GET - Get all registers
  */
  findAll(req:any, res:any) {
    mongoose.model('Order').find({}, (err, orders) => {
    if(err) res.send(500, err.message);
    console.log('GET /order')
    res.status(200).jsonp(orders);
    });
   };

  /**
  * //POST - Add a new product
  */
   newOrder(req, res) {
    console.log(req.body);
    var Order =  mongoose.model('Order')({
      number:   req.body.numero,
      detail:   req.body.detalle,
      total:    req.body.total,
      subtotal: req.body.subtotal,
      device:   req.body.dispositivo,
      address:  req.body.ubicacion,
      created:  Date.now()
    });
    Order.save(function(err, order) {
      if(err) return res.send(500, err.message);
      res.status(200).jsonp(order);
    })
   }

   //PUT - Update a register already exists
  /*update(req, res) {
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
 };*/

  //GET - Return a register with specified ID
  findById(req, res) {
      let Order =  mongoose.model('Order');
      Product.findById(req.params.id, function(err, order) {
        if(err) return res.send(500, err.message);
        console.log('GET /order/' + req.params.id);
        res.status(200).jsonp(order);
      });
  };

  //GET - Return a register with specified ID
  /*findByCategory(req, res) {
    console.log(req.params);
      let Product =  mongoose.model('Product');
      Product.find({"categoryId": req.params.id}, (err, products) => {
        if(err) return res.send(500, err.message);
        console.log('GET /products/category/:id' + req.params.id);
        res.status(200).jsonp(products);
      });
  };*/

}
