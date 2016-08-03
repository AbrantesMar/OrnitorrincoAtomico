var express = require('express');
var router = express.Router();

var pistaApiController = require('../controllers/pistaApiController');
var eventoApiController = require('../controllers/eventoApiController');
var userApiController = require('../controllers/userApiController');

router.get('/pistaApi', pistaApiController.pistaListByDistance);
router.post('/pistaApi', pistaApiController.pistaCreate);
router.get('/pistaApi/:pistaId', pistaApiController.findById);
router.put('/pistaApi/:pistaId', pistaApiController.atualizarPista);
router.delete('/pistaApi/:pistaId', pistaApiController.deletarPista);

router.get('/eventoApi', eventoApiController.eventoListByDistance);
router.post('/eventoApi', eventoApiController.eventoCreate);
router.get('/eventoApi/:eventoId', eventoApiController.findById);
router.put('/eventoApi/:eventoId', eventoApiController.atualizarEvento);
router.delete('/eventoApi/:eventoId', eventoApiController.deletarEvento);

router.get('/userApi', userApiController.userListByDistance);
router.post('/userApi', userApiController.userCreate);
router.get('/userApi/:userId', userApiController.findById);
router.put('/userApi/:userId', userApiController.atualizarUser);
router.delete('/userApi/:userId', userApiController.deletarUser);

module.exports = router;
