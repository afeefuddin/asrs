const { getFact } = require("../Model/api/facts");
const {get83Facts} = require('../Model/database/RealFacts');

async function getFacts(req,res){
    console.log("here")
    const n = req.header('n')
    if(n===0){
        res.sendStatus(404);
    }
    if(n==1){
        try{
        let realFact = await get83Facts(1);
        if(realFact===null || realFact.length===0){
            let dummyfact = await getFact(1);
            res.status(200).json(dummyfact);

        }
        res.status(200).json(realFact);
    }
    catch(error){
        res.sendStatus(404).json({error})
    }
}
    else{
        let dummyfact = await getFact(n-2);
        let realFact = await get83Facts(2);
        let result= {...dummyfact,...realFact};
        res.status(200).json(result);
    }
    
}

module.exports = {getFacts};