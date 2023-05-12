const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.server.DB_URL).then(()=>{
    console.log("database connected...!!!");
}).catch((err)=>{
    console.log("database is not connected...!!!",err);
})

module.exports = mongoose;