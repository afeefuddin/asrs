const {getMeaning} = require('../Model/api/dictionary')
const findMeaning = require('../Model/database/findMeaning');
async function getRealMeaning(req,res){
    try{
    let word = req.params.word
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
module.exports = {getRealMeaning};