/** flow */
import mongoose from 'mongoose';
import _ from 'lodash';

export class DeviceController {

  /*
  * GET - Get all registers
  */
  findAll(req:any, res:any) {
    mongoose.model('Device').find({}, (err, devices) => {
    if(err) res.send(500, err.message);
    console.log('GET /devices')
    res.status(200).jsonp(devices);
    });
   };

  /**
  * //POST - Add a new product
  */
   add(req, res) {
    console.log(req.body);
    var Device =  mongoose.model('Device')({
      uuid: req.body.uuid,
      token: req.body.token,
      isAdministrator: req.body.isAdministrator,
      created: Date.now(),
      deleted: req.body.deleted,
      updated: req.body.updated
    });
    Device.save(function(err, device) {
      if(err) return res.send(500, err.message);
      res.status(200).jsonp(device);
    })
   }

   //PUT - Update a register already exists
  /*update(req, res) {
      let Product =  mongoose.model('Product');
      Device.findById(req.params.id, function(err, product) {

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

  //GET - Return a register with specified ID
  findById(req, res) {
      let Product =  mongoose.model('Product');
      Product.findById(req.params.id, function(err, product) {
        if(err) return res.send(500, err.message);
        console.log('GET /products/' + req.params.id);
        res.status(200).jsonp(product);
      });
  };
  */

}
