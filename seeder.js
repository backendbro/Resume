const mongoose = require('mongoose')
const dotenv = require('dotenv')

//Load ENV VARS
dotenv.config({path: "./config/config.env"})

//Load our module
const contacts = require('./models/Contact')



//Connect to Db
mongoose.connect(process.env.MongoURL, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:true,
    useUnifiedTopology:true
})

//Destroy Data
const DestroyData = async () => {
    try{
        await contacts.deleteMany()
        console.log(`Data Destroyed..`)
        process.exit()
}   
    catch(err){
        console.error(err)
    }
}


if(process.argv[2] === '-d'){
    DestroyData()
}
