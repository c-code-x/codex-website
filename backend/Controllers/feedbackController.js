//Importing Express-async-handler
const asyncHandler = require('express-async-handler')

//Importing feedbackModel
const Feedback = require('../Models/feedbackModel')

// @desc GET FEEDBACK
// GET /feedback
// access PRIVATE
const getFeedback = asyncHandler(async (req, res) => {

  if (!req.body.name) {
    res.status(400)
    throw new Error('Enter your name')
  }
  else if (!req.body.email) {
    res.status(400)
    throw new Error('Enter your email')
  }
  else if (!req.body.number) {
    res.status(400)
    throw new Error('Enter your mobile number')
  }
  else if (!req.body.branch) {
    res.status(400)
    throw new Error('Enter your branch')
  }
  else if (!req.body.query) {
    res.status(400)
    throw new Error('Enter your query')
  }

  if (req.body.name || req.body.email || req.body.number || req.body.branch || req.body.query) {
    const feedbackData = {
      name: req.body.name,
      email: req.body.email,
      number: req.body.number,
      branch: req.body.branch,
      query: req.body.query,
      createdAt: new Date()
    };

    const feedback = await Feedback.create(feedbackData);

    console.log(feedback);

    res.status(200).send("Success");
  }



})

//Exporting feedbackController
module.exports = {
  getFeedback,
}