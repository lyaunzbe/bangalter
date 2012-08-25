var db = require('mongoose');
var Schema = db.Schema;

var userSchema = new Schema({
  displayName: String,
  username: String

});

module.exports = db.model('User', userSchema);

