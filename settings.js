var express = require('express');

exports.init = function(){
  initSettings();
}

function initSettings(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'hogan');
  app.register('hogan', {
		compile: function() {
			var t = hogan.compile.apply(hogan, arguments);
				return function() {
					return t.render.apply(t, arguments);
				}
    	}
	});
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.session({
  	secret: 'chili_dogs'
  }, function() {
    app.use(app.router);
  }));
  // For auth
  // app.use(passport.initialize());
  // app.use(passport.session());
  app.use(express.static(__dirname + '/public'));
}