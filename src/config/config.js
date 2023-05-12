require('dotenv').config();
module.exports = {
    server:{
        protocol: process.env.PROTOCOL || 'http',
        host: process.env.HOST || '127.0.0.1',
        port: process.env.PORT || 7000,
        DB_URL: process.env.DB_URL || 'mongodb://127.0.0.1:27017/twilio'
    },
    twilio:{
        accountSid: process.env.TWILIO_ACCOUNT_SID,
        authToken: process.env.TWILIO_AUTH_TOKEN,
        fromNumber: process.env.TWILIO_FROM_NUMBER
    }
}