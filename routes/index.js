
/*
 * GET home page.
 */

exports.init = function(){
	
	app.get('/', index);
	app.get('/test1', test1)
}

function index(req, res){
console.log('yo');
  res.render('index', { title: 'Express' })
};
function test1(req, res){
	console.log('test1');
	res.send('Booya')
}