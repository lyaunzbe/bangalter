var User = require('../models/user');
exports.init = function(){
	app.get('/v/:username', user);
  app.get('/u/:username', index);
}

function index(req, res){
  User.findOne({username:'dlanoff'},function(err, user){
    console.log(user);
  })
  console.log('yo');
  res.render('index');
}
function user(req, res){
	res.send({'boo':'foo'});
}
