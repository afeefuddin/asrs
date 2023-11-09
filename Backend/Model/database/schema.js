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
const AdminSchema = new mongoose.Schema({
    username :{
        type: String,
        required : true,
    },
    password :{
        type: String,
        required : true
    }
});

const  FactSchema = new mongoose.Schema({
    id : {
        type : Number,
        required : true
    },
    fact : {
        type : String,
        required : true
    }
});
const ResearchPaperSchema = new mongoose.Schema({
    title : {
        type: String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    image : {
        type : String,
        required : true,
    },
    date : {
        type : String,
        required : true,
    },
    views : {
        type : String,
        default : 0,
    }
})

const Papers = mongoose.model('Papers',ResearchPaperSchema);
const Dictionary = mongoose.model('RealDictionary',DictionarySchema);
const Admin = mongoose.model('Admin',AdminSchema);
const Fact = mongoose.model('83fact',FactSchema);
module.exports = {Dictionary,Admin,Fact,Papers};