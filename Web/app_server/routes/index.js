var express = require('express');
var router = express.Router();
var expor = require('../controllers/pistaController.js');

router.get('/', expor);
router.get('/pistas', expor);
router.get('/cadastro', expor);
router.get('/edicao', expor);

module.exports = router;
