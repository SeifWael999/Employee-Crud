// Load ENV variables
require('dotenv').config()

// Grab Dependencies
const express = require('express')
const app = express()
const port = process.env.PORT;
const expressEjsLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')


// Static Middleware

app.use(express.static(__dirname + "/public"))

// Set View Engine

app.set('view engine' , 'ejs')
app.use(expressEjsLayouts)

// Database Connection
mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
if(db) { console.log ("Connection Success")}

// db.on("error",(err)=> console.log(err.message))
// db.once('open', ()=>console.log('Connection success'))

// db.on("error" , (err) => console.error(err.message))

// db.once('open' , () =>  console.log('connection success'))

app.use(express.urlencoded({extended:false}))
app.use(express.json())

// Defining Routes

app.use(require('./routes/web'))

// Running App Server
app.listen(port , () => {
    console.log(`Server Running on localhost:${port}`)
})