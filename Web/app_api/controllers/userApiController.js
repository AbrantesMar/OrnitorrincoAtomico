var mongoose = require('mongoose');
var user = mongoose.model('User');

var sendJsonResponse = function(res, status, content){
  res.status(status);
  res.json(content);
}

module.exports.userListByDistance = function(req, res){
  sendJsonResponse(res, 200, {"status": "success"});
};
module.exports.userCreate = function(req, res){
  sendJsonResponse(res, 200, {"status": "success"});
};
module.exports.findById = function(req, res){
  sendJsonResponse(res, 200, {"status": "success"});
};
module.exports.atualizarUser = function(req, res){
  sendJsonResponse(res, 200, {"status": "success"});
};
module.exports.deletarUser = function(req, res){
  sendJsonResponse(res, 200, {"status": "success"});
};
