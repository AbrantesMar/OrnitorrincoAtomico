var mongoose = require('mongoose');
var evento = mongoose.model('Evento');

var sendJsonResponse = function(res, status, content){
  res.status(status);
  res.json(content);
}

module.exports.eventoListByDistance = function(req, res){
  sendJsonResponse(res, 200, {"status": "success"});
};
module.exports.eventoCreate = function(req, res){
  sendJsonResponse(res, 200, {"status": "success"});
};
module.exports.findById = function(req, res){
  sendJsonResponse(res, 200, {"status": "success"});
};
module.exports.atualizarEvento = function(req, res){
  sendJsonResponse(res, 200, {"status": "success"});
};
module.exports.deletarEvento = function(req, res){
  sendJsonResponse(res, 200, {"status": "success"});
};
