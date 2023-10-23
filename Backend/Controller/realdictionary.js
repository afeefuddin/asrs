const {getMeaning} = require('../Model/api/dictionary')
const findMeaning = require('../Model/database/findMeaning');
async function getRealMeaning(req,res){
    try{
    let word = req.params.word
    const AsrsMeaning = await findMeaning(word);
    console.log(AsrsMeaning.length)
    if(AsrsMeaning.length===0){
        const meaning = await getMeaning(word);
        console.log(meaning.json);
        console.log("Not here");
        res.status(200).json({meaning});
    }
    else{
        res.status(200).json({AsrsMeaning});
    }
}
catch(error){
    res.status(500).json({});
}
}
module.exports = {getRealMeaning};