const express = require('express')
const dotenv = require('dotenv')
const exphbs = require('express-handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

const connectDb = require('./db/db')

const app = express()


//middlewares
dotenv.config({path: 'config/config.env'})

//connect to db
connectDb()

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended:false }))

app.use(express.static('public'))


//bring in the routes
const contact = require('./routes/contact')

//mount routes
app.use('/', contact)


const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
    console.log(`Server started on Port: ${port}`)
})


//handle rejected promises
process.on('unhandledRejection', (err, promise) => {
    //log the error to the console
    console.log(err.message)

    //shut down the server
    server.close(() => process.exit(1))
})
