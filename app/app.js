//Framework Express para desenvolvimento Web
var express = require('express');
var app = express();

//Method Override para implementação de demais verbos além de POST e GET, devido à limitação padrão do HTML
var methodOverride = require('method-override');
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));

//Body parser para que o Express entenda requisições em JSON e query string
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Devolução de requisição do favicon.ico como string em branco, por se tratar de API Rest
app.use(function (request, response, next){
	if(request.url === '/favicon.ico'){
		response.writeHead(200,{'Content-Type':'image/x-ico'});
		response.end('');
	} else {
		next();
	}
});

//Cabeçalho CORS na app, permitindo conpartilhamento de recursos entre domínios diferentes
//Outra forma seria:
//npm cors
//var cors = require('cors');
//app.use (cors());
app.use(function(request, response, next) {
	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "Origin, X-requested-With, Content-Type, Accept");
	next();
})

//Router: São as rotas possíveis para a minha aplicação
app.use('/', require('./routes'));

//Reconhecer que a requisição não atingiu nenhum Middleware
app.use(function(request, response, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

//Tratando e exibindo corretamente o erro
app.use(function(err, request, response, next) {
	console.log(err.stack);
	response.status(err.status || 500).json({ err: err.message});
});

//Servidor que coloca a aplicação no ar
module.exports = app;
