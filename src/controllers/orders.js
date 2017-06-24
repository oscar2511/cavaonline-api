/** flow */
import mongoose from 'mongoose';
import _ from 'lodash';

export class OrderController {

  /*
  * GET - Get all registers
  */
  findAll(req:any, res:any) {
    mongoose.model('Order').find({}).sort('-created').exec((err, orders) => {
    if(err) res.send(500, err.message);
    console.log('GET /order')
    res.status(200).jsonp(orders);
    });
   };

  /**
  * //POST - Add a new product
  */
   newOrder(req, res) {
    if(!_.isNumber(req.body.numero)) return res.send(500, 'numero is required');
    if(!_.isArray(req.body.detalle)) return res.send(500, 'detalle is required');
    if(!_.isString(req.body.total)) return res.send(500, 'total is required');
    if(!_.isString(req.body.subTotal)) return res.send(500, 'subTotal is required');
    if(!_.isObject(req.body.dispositivo)) return res.send(500, 'dispositivo is required');
    if(!_.isObject(req.body.ubicacion)) return res.send(500, 'ubicacion is required');

    var Order =  mongoose.model('Order')({
      number:   req.body.numero,
      detail:   req.body.detalle,
      total:    req.body.total,
      subtotal: req.body.subTotal,
      device:   req.body.dispositivo,
      address:  req.body.ubicacion
    });
    Order.save(function(err, order) {
      if(err) return res.send(500, err.message);
      res.status(200).jsonp(order);
    })
   }

   //PUT - Update a register already exists
  update(req, res) {
      console.info('Update state ',req.body);
      let Order =  mongoose.model('Order');
      Order.findById(req.params.id, function(err, order) {
        if(!_.isUndefined(req.body.state)) {
          order.state = req.body.state;
        }
        order.updated = Date.now();
        order.save(function(err) {
        if(err) return res.send(500, err.message);
        res.status(200).jsonp(order);
       });
     });
  };

  //GET - Return a register with specified ID
  findById(req, res) {
      let Order =  mongoose.model('Order');
      Order.findById(req.params.id, function(err, order) {
        if(err) return res.send(500, err.message);
        console.log('GET /order/' + req.params.id);
        res.status(200).jsonp(order);
      });
  };

  //GET - Return a register with specified ID
  findByState(req, res) {
    console.info('Get orders by state: ',req.params);
      let Order =  mongoose.model('Order');
      Order.find({'state': req.params.id}, (err, orders) => {
        if(err) return res.send(500, err.message);
        res.status(200).jsonp(orders);
      });
  };

}
