var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
	response.status(201);
		if (request.accepts('text')) {
		response.write('name; email; desc\n');
		response.write('Daniel Tibola; danieltibola@gmail.com; aprendizado\n');
		response.end();
	} else {
		response.json({ 'name': 'Daniel Tibola', 'email': 'danieltibola@gmail.com', 'desc': 'aprendizado' });
	}
});

router.use('/stormtroppers', require('./stormtroppers'));

module.exports = router;