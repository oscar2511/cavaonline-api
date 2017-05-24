var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
 name:        { type: String },
 description: { type: String },
 price:       { type: Number },
 stock:       { type: Boolean },
 urlImg:      { type: String },
 created:     { type: Date, default: Date.now },
 updated:     { type: Date },
 deleted:     { type: Date },
 categoryId:  { type: String }
},
{
  collection:'product'
});

module.exports = mongoose.model('Product', productSchema);
