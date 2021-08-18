const mongoose = require('mongoose')

const connectDb = async () => {
    const conn = await mongoose.connect(process.env.MongoUrl, {
        useCreateIndex:true,
        useUnifiedTopology:true,
        useNewUrlParser:true,
        useFindAndModify:false
    })

    console.log(`MongoDb connected: ${conn.connection.host}`)
}

module.exports = connectDb