var http = require('http');

var app = require('./config/express')();

require('./config/database')('mongodb://localhost/motoeventos');

http.createServer(app)
	.listen(app.get('port'), function() {
		console.log('Moto Eventos está no ar!');
		console.log("Servidor escutando na porta " + app.get('port'));
	});