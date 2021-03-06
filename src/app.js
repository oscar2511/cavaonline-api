/** flow */
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import methodOverride from 'method-override';
import { Conn } from './config/conn';
import { allowCrossDomain } from './config/config'

// Import Models and Controllers
var modelProduct   = require('./models/product')(app, mongoose);
var modelsCategory = require('./models/category')(app, mongoose);
var modelDevice    = require('./models/device')(app, mongoose);
var modelOrder     = require('./models/order')(app, mongoose);

import { ProductController } from './controllers/products';
import { DeviceController } from './controllers/devices';
import { OrderController } from './controllers/orders';
import { CategoryController } from './controllers/categories';


var app = express();

// Start server
app.listen(3000, function() {
 console.log("Node server running on http://localhost:3000");
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(allowCrossDomain);
app.use(methodOverride());

var ProductCtrl  = new ProductController();
var DeviceCtrl   = new DeviceController();
var CategoryCtrl = new CategoryController();//require('./controllers/categories');
var OrderCtrl    = new OrderController();

var router = express.Router();

app.use(router);

// API routes
var api = express.Router();

api.route('/products')
 .get(ProductCtrl.findAll)
 .post(ProductCtrl.add);

 api.route('/devices')
  .get(DeviceCtrl.findAll)
  .post(DeviceCtrl.add);
api.route('/devices/administrators')
  .get(DeviceCtrl.findAdministrators);

 api.route('/categories')
  .get(CategoryCtrl.findAll)
  .post(CategoryCtrl.add);

api.route('/products/:id')
 .get(ProductCtrl.findById)
 .put(ProductCtrl.update);

 api.route('/product/change-stock')
  .put(ProductCtrl.changeStock);

 api.route('/order')
  .get(OrderCtrl.findAll)
  .post(OrderCtrl.newOrder);

  api.route('/order/:id')
   .get(OrderCtrl.findById)
   .put(OrderCtrl.update);

   api.route('/order/state/:id')
    .get(OrderCtrl.findByState);

 api.route('/products/category/:id')
  .get(ProductCtrl.findByCategory);

app.use('/api', api);
