var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
  number:      { type: String },
  detail:      { type: Array },
  total:       { type: String },
  subtotal:    { type: String },
  device:      { type: Object },
  address:     { type: Object },
  state:       { type: Number, default: 1 },
  created:     { type: Date, default: Date.now },
  updated:     { type: Date },
  deleted:     { type: Date },
},
{
  collection:'order'
});

module.exports = mongoose.model('Order', orderSchema);
