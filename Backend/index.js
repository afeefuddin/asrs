let express = require('express');
let app = express();
let cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const {getMeaning} = require('./Model/api/dictionary')
const findMeaning = require('./Model/database/Meaning');
const DB = require('./Model/database/connectDB');
const router = require('./Routes/route');

const allowedOrigins = ['https://asrs.vercel.app'];

app.use(
  cors({
    origin: function (origin, callback) {
      // Check if the request origin is in the allowedOrigins array
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // enable set cookie
    optionsSuccessStatus: 204,
  })
);

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