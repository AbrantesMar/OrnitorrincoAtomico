module.exports.index = function(req, res){
  res.render('index', { title: 'Marcio' });
};
module.exports.cadastrar = function(req, res){
  res.render('index', { title: 'Henrique' });
};
module.exports.editar = function(req, res){
  res.render('index', { title: 'Nunes' });
};
module.exports.buscar = function(req, res){
  res.render('index', { title: 'Abrantes' });
};
