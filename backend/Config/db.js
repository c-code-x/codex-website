const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

//Connecting to DB
const database = module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

  try {
    mongoose.connect(process.env.MONGO_URI)
    console.log("Database Connected")
  }
  catch (error) {
    console.log(error)
    console.log("Database connection failed")

  }
}


database();