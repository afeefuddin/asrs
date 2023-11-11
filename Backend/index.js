let express = require('express');
let app = express();
let cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const {getMeaning} = require('./Model/api/dictionary')
const findMeaning = require('./Model/database/Meaning');
const DB = require('./Model/database/connectDB');
const router = require('./Routes/route');

app.use(cors({
  origin: 'https://asrs.vercel.app'
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use('/',(req,res)=>{
//     res.json({message : "HELLO"})
// })
app.use(router);
app.get('*',(req,res,next)=>{
    res.status(200).json({
      message:'bad request'
    })
  })

  
DB();
let port = 8000;
app.listen(port,console.log(`Started the server on port ${port}`))