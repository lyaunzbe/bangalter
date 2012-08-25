var mongoose = require('mongoose');

var Schema = mongoose.Schema;

module.exports = {
  startup : function(uri){

		mongoose.connect(uri);
		mongoose.connection.on('open', function(){
			console.log('MongoDB connection successful!');
		})
	}
}
