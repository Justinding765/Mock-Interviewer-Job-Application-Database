const express = require('express')
const router = express.Router()
const {
    getSummary,
    getInterviewQuestions,
    addApplication,
    getApplications,
    deleteApplication,
    updateApplication
} = require('../controllers/applications_Controller')
//GET all workouts
router.post('/summary', getSummary)
router.post('/Interview_Questions', getInterviewQuestions)
router.post('/add', addApplication)
router.get('/getApplications', getApplications)
router.delete('/deleteApplication/:id', deleteApplication)
router.patch('/updateApplication/:id', updateApplication)
module.exports = router