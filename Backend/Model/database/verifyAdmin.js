const {Admin} = require('./schema');

async function verifyAdmin(username,password){
    console.log(password)
    const res = await Admin.findOne({username : username});
    console.log(res)
    if(res==null){
        return false;
    }
    if(res.password===password){
        return true;
    }
    return false;
}

module.exports = verifyAdmin;