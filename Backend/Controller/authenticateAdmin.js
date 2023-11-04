const jwt = require("jsonwebtoken");
const verifyAdmin = require("../Model/database/verifyAdmin");

const JWT_SECRET = process.env.SECRET;

async function generateWebToken(username){
    console.log(username)
    const token =  jwt.sign({username},JWT_SECRET,{expiresIn:'1h'});
    return token;
}

async function authenticateWebToken(token){
    if(token === undefined || token === null){
        return false;
    }
    const verifyToken = jwt.verify(token,JWT_SECRET);
    if(verifyToken){
        return true;
    }
    return false;
}

async function authenticateAdmin(req,res){
    console.log(req.body);
    let username = req.body.username;
    let password = req.body.password;
    const isAdmin = await verifyAdmin(username,password) 
    if(isAdmin===true){
        const token = await generateWebToken(username);
        res.status(200).json({token});

    }
    else{
        res.status(404).json({error: "Incorrect UserName or Password"});
    }
}
module.exports= {authenticateAdmin,authenticateWebToken};