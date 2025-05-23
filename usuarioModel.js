const { type } = require('express/lib/response');
const { default: mongoose } = require('mongoose');
const mogoose = require('mongoose');

const usuarioSchema = new mogoose.Schema({

nome:{
    type: String,
    required :true
},
email:{
    type: String,
    required :true,
    unique:true
},
senha:{
    type: String,
    required :true
},

})

const Usuario = mongoose.model('Usuario', usuarioSchema ,'usuarios');
module.exports = Usuario;