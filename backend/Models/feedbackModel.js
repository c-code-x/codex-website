const { timeStamp } = require('console')
//Importing Mongoose
const mongoose = require('mongoose')

//Feedback Schema
const feedbackSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true]
  },
  email: {
    type: String,
    required: [true],
    unique: true
  },
  branch: {
    type: String,
    required: [true]
  },
  number: {
    type: Number,
    required: [true]
  },
  query: {
    type: String,
    required: [true]
  },
},
  {
    timeStamps: true,
  })

//Exporting feedbackModel
module.exports = mongoose.model('Feedback', feedbackSchema)