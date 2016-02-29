var express = require('express');
var router = express.Router();
var mongo = require('../db/mongo');
var StormtropperModel = require('../models/StormtropperModel')(mongo);
var StormtropperController = require('../controllers/StormtropperController')(StormtropperModel);

router.get('/', StormtropperController.getAll.bind(StormtropperController));

router.get('/:_id', StormtropperController.getById.bind(StormtropperController));

router.post('/', StormtropperController.create.bind(StormtropperController));

router.put('/:id', StormtropperController.update.bind(StormtropperController));

router.delete('/:id', StormtropperController.remove.bind(StormtropperController));

module.exports = router;