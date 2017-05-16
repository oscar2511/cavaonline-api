var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require("method-override");
var app = express();

// Connection to DB
mongoose.connect('mongodb://leadsius.local:27017/cavaonline', function(err, res) {
 if(err) throw err;
 console.log('Connected to Database');
});

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
var ProductCtrl    = require('./controllers/products');
var CategoryCtrl   = require('./controllers/categories');

var router = express.Router();

// Index - Route
router.get('/', function(req, res) {
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
/*
api.route('/clients/:id')
 .get(ClientCtrl.findById)
 .put(ClientCtrl.update)
 .delete(ClientCtrl.delete);
*/
app.use('/api', api);
