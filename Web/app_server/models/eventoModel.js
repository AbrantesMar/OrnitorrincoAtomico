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
});

var Atracao = new Schema({
    Nome: { type: String, default: '' }
  , Descricao: { type: String, default: '' }
  , Categorias: [Categoria]
})

var Contato = new Schema({
    Descricao: { type: String, default: '' }
  , Tipo: { type: String, default: '' }
});

var Foto = new Schema({
    Descricao: { type: String, required: true, default: '' }
  , Link: { type: String, required: true, default: '' }
  , File: { type: Buffer }
});

var EventoSchema = new Schema({
    Nome: { type: String, required: true }
  , Descricao: { type: String, default: '' }
  , HoraInicio: { type: String, default: '' }
  , HoraFim: { type: String, default: '' }
  , Atracoes: [Atracao]
  , Categorias: [Categoria]
  , Localizacoes: [Localizacao]
  , Contatos: [Contato]
  , Fotos: [Foto]
});

module.exports = mongoose.model('Evento', EventoSchema);
