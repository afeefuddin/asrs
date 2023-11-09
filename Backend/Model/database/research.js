const {Papers} = require('./schema');


const createPaper = async()=>{
    try{
        
    }catch(error){

    }
}

const getAllPapers = async() =>{

    try{
    const res =  await Papers.find({},{
        title : 1,
        image : 1,
        date : 1,
    });
    return res;
    }
    catch(error){
        console.log(error);
        return null;
    }
}
const getPaper = async(req) =>{
    try{
        const res = await Papers.findById(req);
        return res;
    }
    catch(error){
        console.log(error);
        return null;
    }
}
module.exports = {
    getAllPapers , getPaper
}