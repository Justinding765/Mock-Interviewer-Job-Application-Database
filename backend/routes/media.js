const express = require('express')
const router = express.Router()
const {
    media_upload,
    get_images,
    get_videos,
    upload
} = require('../controllers/media_Controller')

// POST a new workout
router.post("/api/media/upload", upload.fields([{ name: 'video', maxCount: 1 }, { name: 'image', maxCount: 1 }]), (req, res) => {
    res.status(200).send("File uploaded successfully");
  });
router.get('/get_images', get_images)
router.get('/get_videos', get_videos)
module.exports = router