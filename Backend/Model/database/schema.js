const mongoose = require('mongoose');

const DictionarySchema = new mongoose.Schema({
    word:{
        type: String,
        required : true
    },
    meaning:{
        type: String,
        required : true
    },
});

const Dictionary = mongoose.model('RealDictionary',DictionarySchema);
module.exports = Dictionary;