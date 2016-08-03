var mongoose = require('mongoose');
var pista = mongoose.model('Pista');

var sendJsonResponse = function(res, status, content){
  res.status(status);
  res.json(content);
}

module.exports.pistaListByDistance = function(req, res){
  sendJsonResponse(res, 200, {"status": "success"});
};
module.exports.pistaCreate = function(req, res){
  sendJsonResponse(res, 200, {"status": "success"});
};
module.exports.findById = function(req, res){
  sendJsonResponse(res, 200, {"status": "success"});
};
module.exports.atualizarPista = function(req, res){
  sendJsonResponse(res, 200, {"status": "success"});
};
module.exports.deletarPista = function(req, res){
  sendJsonResponse(res, 200, {"status": "success"});
};
