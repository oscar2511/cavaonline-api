var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var deviceSchema = new Schema({
 uuid:            { type: String },
 token:           { type: String },
 isAdministrator: { type: Boolean },
 created:         { type: Date, default: Date.now },
 updated:         { type: Date },
 deleted:         { type: Date }
},
{
  collection:'device'
});

module.exports = mongoose.model('Device', deviceSchema);
