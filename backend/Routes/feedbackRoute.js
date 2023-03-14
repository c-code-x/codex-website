//Importing Express
const express = require('express')

//Creating Route
const router = express.Router()

//Importing Controller
const { getFeedback } = require('../Controllers/feedbackController')

//GET Route
router.get('/', getFeedback)

//Exporting Router
module.exports = router