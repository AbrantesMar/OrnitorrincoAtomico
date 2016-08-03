var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
});

var UserSchema = new Schema({
    Nome: { type: String, required: true }
  , Descricao: { type: String, default: '' }
  , FacebookId: { type: String, default: '' }
  , GoogleId: { type: String, default: '' }
  , Localizacoes: [Localizacao]
  , Contatos: [Contato]
  , Fotos: [Foto]
});

module.exports = mongoose.model('User', UserSchema);
