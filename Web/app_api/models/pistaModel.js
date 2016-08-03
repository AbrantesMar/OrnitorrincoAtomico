var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Categoria = new Schema({
  Descricao: { type: String, required: true }
});

var Localizacao = new Schema({
  Pais: { type: String, default: '' }
, Estado: { type: String, default: '' }
, Cidade: { type: String, default: '' }
, Bairro: { type: String, default: '' }
, Rua: { type: String, default: '' }
, Numero: { type: String, default: '' }
, Coordenadas: { type: [Number], index: '2dsphere' }
});

var Contato = new Schema({
  Descricao: { type: String, default: '' }
, Tipo: { type: String, default: '' }
});

var Foto = new Schema({
  Descricao: { type: String, required: true, default: '' }
, Link: { type: String, required: true, default: '' }
, File: { type: Buffer }
});

var PistaSchema = new Schema({
  Nome: { type: String, required: true }
, Descricao: { type: String, default: '' }
, Categorias: [Categoria]
, Localizacoes: [Localizacao]
, Contatos: [Contato]
, Fotos: [Foto]
});
module.exports = mongoose.model('Pista', PistaSchema);

/*[{
  Nome: 'Parque Santana',
  Descricao: 'Parque santana, é um ambiente muito familiar,
              podemos nos divertir com pistas de skates, area
              para criancas, quadra de futsal, campo de barro,
              area para tenis, e outros atrativos que podem ser
              encontrado em um dos parques de Recife',
  Categoria: [ 'tenis', 'futsal', 'campo de barro', 'skate', 'bicicleta',
               'motambike', 'area de criancas']
  Localizacao: [{
                Rua: 'R. Jorge Gomes de Sá'
                Bairro: 'Casa Forte',
                Numero: '',
                Cidade: '',
                Estado: '',
                Pais: '',
                Contato: '(81) 3355-8000',
                Latitude: '-8.0415525',
                Longitude: '-34.9167021'
  }],
  Fotos:['http://www2.recife.pe.gov.br/sites/default/files/styles/imagem_slide_home/public/150711-_rec_ferias_-_foto_inaldo_lins6.jpg?itok=Vgj7HmYL', 'https://i.ytimg.com/vi/cKOATaOCYB4/maxresdefault.jpg']
}]*/
