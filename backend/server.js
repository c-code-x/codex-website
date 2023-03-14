const express = require('express')
const connectDB = require('./Config/db')
const dotenv = require('dotenv').config()
const port = process.env.PORT

//Creating app
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Feedback Endpoint
app.use('/feedback', require('./Routes/feedbackRoute'))



//Server Started
app.listen(port, () => console.log("Server started on port : " + port))