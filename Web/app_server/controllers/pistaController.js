module.exports.index = function(req, res){
  res.render('index', { title: 'Marcio', conta: 'teste' });
};
module.exports.cadastrar = function(req, res){
  var conta = 1;
  for (var i = 0; i < 10; i++) {
    conta++;
  }
  res.render('index', { title: 'Henrique', conta: conta });
};
module.exports.editar = function(req, res){
  res.render('index', { title: 'Nunes' });
};
module.exports.buscar = function(req, res){
  res.render('index', { title: 'Abrantes' });
};
