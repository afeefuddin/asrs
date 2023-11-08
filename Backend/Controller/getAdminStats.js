const { getTotalMeaning } = require("../Model/database/Meaning");
const { authenticateWebToken } = require("./authenticateAdmin");

async function getAdminStats(req,res){
    let token = req.header('jwt_token')
    console.log(token)
    if(token===null){
        res.sendStatus(404);
    }
    const isValid = await authenticateWebToken(token);
    if(!isValid){
        res.sendStatus(404);
    }
    else{
        //meaning
        let ret = {};
        try{
        let totalMeaning = await getTotalMeaning();
        ret['totalMeaning'] = totalMeaning;
        res.status(200).json(ret);
        }
        catch(error){
            res.sendStatus(404);
        }

    }

}
module.exports = {getAdminStats};