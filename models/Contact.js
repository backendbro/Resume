const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    fname:{
        type:String,
        required: [true, 'Full-name is required']
    },
    email:{
        type:String,
        required: [true, 'Email is required']
    },
    message:{
        type:String,
        required:[true, 'Message is required']
    },
    date:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Contact', ContactSchema)