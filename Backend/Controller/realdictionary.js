const {getMeaning} = require('../Model/api/dictionary')
const {findMeaning,createMeaning }= require('../Model/database/Meaning');
const { authenticateWebToken } = require('./authenticateAdmin');
async function getRealMeaning(req,res){
    try{
    let word = req.params.word
    word = word.toLowerCase();
    const AsrsMeaning = await findMeaning(word);
    console.log(AsrsMeaning.length)
    if(AsrsMeaning.length===0){

        const ans= {};
        const meaning =  getMeaning(word).then(resp=>{
            console.log(resp[0]["meanings"][0]['definitions'])
            helper = resp[0]["meanings"][0]['definitions']
            for(let i=0;i<helper.length;i++){
                ans[`${i+1}`] = resp[0]["meanings"][0]['definitions'][i]['definition']
   
            }
            console.log(ans)
            resp = ans
            res.status(200).json(resp)
        }).catch((e)=>{console.log("Error")
        res.status(404).json({e})
    }
        );
        // const result = meaning["meaning"]
        // const ret = result[0];
        console.log(meaning.json);
        console.log("Not here");
    }
    else{
        res.status(200).json({1:AsrsMeaning});
    }
}
catch(error){
    res.status(500).json({});
}
}
async function createRealMeaning(req,res){
    const token = req.get("token");
    console.log(req.get("id"))
    const isAdmin = await authenticateWebToken(token);
    if(isAdmin){
        let word = req.body.word;
        word = word.toLowerCase();
        const meaning = req.body.meaning;
        const create = await createMeaning(word,meaning)
        if(create){
            res.status(200).json({Message:"Meaning Created Succesfully"});
        }
        else{
            res.status(404).json({error});
        }
    }
    else{
        res.status(404).json({error: "admin not verified"});
    }
}
module.exports = {getRealMeaning,createRealMeaning};