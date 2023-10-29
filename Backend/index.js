let express = require('express');
let app = express();
let cors = require('cors');
require('dotenv').config();
const {getMeaning} = require('./Model/api/dictionary')
const findMeaning = require('./Model/database/findMeaning');
const DB = require('./Model/database/connectDB');
const router = require('./Routes/route');

app.use(cors({
    origin: "*"
}))

app.use(router);
DB();

let port = 8000;
app.listen(port,console.log(`Started the server on port ${port}`))