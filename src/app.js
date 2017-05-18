/** flow */
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import methodOverride from 'method-override';
import {Conn} from './conn';
var app = express();

// Start server
app.listen(3000, function() {
 console.log("Node server running on http://localhost:3000");
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and Controllers
var modelProduct   = require('./models/product')(app, mongoose);
var modelsCategory = require('./models/category')(app, mongoose);

import {ProductController} from './controllers/products';

var ProductCtrl = new ProductController();

var CategoryCtrl   = require('./controllers/categories');

var router = express.Router();

// Index - Route
router.get('/', (req, res) => {
 res.send("Hola Mundo");
});

app.use(router);

// API routes
var api = express.Router();

api.route('/products')
 .get(ProductCtrl.findAll)
 .post(ProductCtrl.add);

 api.route('/categories')
  .get(CategoryCtrl.findAll)
  .post(CategoryCtrl.add);

api.route('/products/:id')
 .get(ProductCtrl.findById)
 .put(ProductCtrl.update);
 //.delete(ClientCtrl.delete);

app.use('/api', api);