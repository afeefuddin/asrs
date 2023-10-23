const mongoose = require("mongoose")

const db = process.env.MONGODB_URI;
const dbname = 'ASRS';
let connect = async () =>{
    return mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: dbname }
        ).then(()=>console.log("Database Connected")).catch(err=>console.log("Error connecting the DB"))
}
module.exports = connect;