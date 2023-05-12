const User = require('../model/auth.model');
const Validator = require('validatorjs');
const twilio = require('twilio');
const config = require('../config/config');
const { request } = require('http');
const { Config } = require('twilio/lib/twiml/VoiceResponse');
exports.registration = async (req, res) => {
    try {
        const validation = new Validator(req.body, {
            username: "required",
            email: "required",
            password: "required",
            phone: "required",
        });
        if (validation.fails()) {
            message = Object.keys(validation.errors.all())[0];
            console.log("message", message);
        }
        else {
            const user = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone
            });
            const accountSid = config.twilio.accountSid;
            const authToken = config.twilio.authToken;
            const client = new twilio(accountSid, authToken);
            console.log("client: " + accountSid, authToken);
            const otp = 123456
            client.messages.create({
                body: 'Your verification code is ' + otp,
                from: config.twilio.fromNumber,
                to: req.body.phone
            }).then(() => {
                console.log("OTP is sent successfully", otp);
            }).catch((err) => {
                console.log("-------", err);
            })
            await user.save();
            res.status(200).json({
                message: "You are registerd successfully....!!!",
                status: 200
            })
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Something went wrong....!!!",
            status: 500
        })
    }
}