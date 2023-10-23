const Dictionary = require('./schema');

function createMeaning(word){

}
async function findMeaning(word){
    let meaning = ''
    const res = await Dictionary.findOne({word: word})
    if(res!=null){
    meaning= res.meaning
    }
    console.log(meaning)
    return meaning;
}
module.exports = findMeaning;