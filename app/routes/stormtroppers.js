var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
	response.send('get all stormtroppers');
});

router.get('/:_id', function(request, response){
	response.send('get a specific stormtropper by id');
});

router.post('/', function(request, response){
	response.send('create a new stormtropper');
});

router.put('/:id', function(request, response){
	response.send('update a stormtropper');
});

router.delete('/:id', function(request, response){
	response.send('delete a stormtropper');
});

module.exports = router;