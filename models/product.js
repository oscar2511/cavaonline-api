var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
 name: { type: String },
 price: { type: String }
},
{
  collection:'product'
});

module.exports = mongoose.model('product', productSchema);
