const express = require('express');
const authMiddleWare = require('../middleware/auth-middleware');
const adminMiddleWare = require('../middleware/admin-middleware');
const uploadMiddleware = require('../middleware/upload-middleware')
const {uploadImageController} = require('../controllers/image-controller'); 

const router = express.Router()

// upload image
router.post(
  "/upload", 
  authMiddleWare, 
  adminMiddleWare, 
  uploadMiddleware.single('image'), 
  uploadImageController
);

// to get all the images

module.exports = router