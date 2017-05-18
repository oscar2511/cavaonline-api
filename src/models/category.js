var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
 name:        { type: String },
 description: { type: String },
 urlImg:      { type: String },
 created:     { type: Date, default: Date.now },
 updated:     { type: Date },
 deleted:     { type: Date },
 estado:      { type: Boolean}
},
{
  collection:'category'
});

module.exports = mongoose.model('Category', categorySchema);
