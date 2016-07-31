module.exports.index = function(req, res){
  res.render('pista/index', {
                        title: 'Marcio',
                        conta: 'teste',
                        pistas: [{
                          nome: 'Parque Santana',
                          descricao: 'pista com bown, obstaculos para street, e bacana para surfskate',
                          localizacao: [{
                                        bairro: 'casa forte',
                                        latitude: '58342-57-37',
                                        longitude: ''
                          }],
                          fotos:['http://www2.recife.pe.gov.br/sites/default/files/styles/imagem_slide_home/public/150711-_rec_ferias_-_foto_inaldo_lins6.jpg?itok=Vgj7HmYL', 'https://i.ytimg.com/vi/cKOATaOCYB4/maxresdefault.jpg']
                        },{
                          nome: 'Parque Jaqueira',
                          descricao: 'pista com bown, obstaculos para street, e bacana para surfskate',
                          localizacao: [{
                                        bairro: 'casa forte',
                                        latitude: '58342-57-37',
                                        longitude: ''
                          }],
                          fotos:['http://www2.recife.pe.gov.br/sites/default/files/styles/imagem_slide_home/public/150711-_rec_ferias_-_foto_inaldo_lins6.jpg?itok=Vgj7HmYL', 'https://i.ytimg.com/vi/cKOATaOCYB4/maxresdefault.jpg']
                        },{
                          nome: 'Parque Macacheira',
                          descricao: 'pista com bown, obstaculos para street, e bacana para surfskate',
                          localizacao: [{
                                        bairro: 'casa forte',
                                        latitude: '58342-57-37',
                                        longitude: ''
                          }],
                          fotos:['http://www2.recife.pe.gov.br/sites/default/files/styles/imagem_slide_home/public/150711-_rec_ferias_-_foto_inaldo_lins6.jpg?itok=Vgj7HmYL']
                        }]
                      });
};
module.exports.cadastrar = function(req, res){
  var conta = 1;
  for (var i = 0; i < 10; i++) {
    conta++;
  }
  res.render('pista/index', { title: 'Henrique', conta: conta });
};
module.exports.editar = function(req, res){
  res.render('pista/index', {
                        title: 'Nunes'
                      });
};
module.exports.buscar = function(req, res){
  res.render('pista/index', { title: 'Abrantes' });
};
