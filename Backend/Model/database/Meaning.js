const {Dictionary} = require('./schema');

async function createMeaning(word,meaning){
    try{
        let mean = new Dictionary();
        mean.word = word;
        mean.meaning = meaning;
        mean.save()
    }
    catch(error){
        console.log(error);
        return false;
    }
    return true;

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
module.exports = {findMeaning,createMeaning};