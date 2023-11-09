const {getAllPapers,getPaper} = require('../Model/database/research');

const getResearch = async(req,res) =>{
   const paper = await getPaper(req.params.id);
   if(paper===null){
      res.sendStatus(404);
   }
   else{
      res.status(200).json({paper})
   }
}

const getResearchPapers = async(req,res) =>{
     const papers = await getAllPapers();
     if(papers===null){
        res.sendStatus(404);
     }
     else{
        res.status(200).json({papers})
     }
}
module.exports = {getResearchPapers,getResearch};