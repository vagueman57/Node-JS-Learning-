const Image = require('../models/Image'); 
const {uploadToCloudinary} = require('../helpers/cloudinaryHelper');


const uploadImageController = async(req, res ) => {
  try{
    // check if file is missing  in req object
    if(!req.file){
      return res.status(400).json({
        success: false,
        message: "File is required. Please upload an image"
      })
    }

     // Debug: Log file info
    console.log('File info:', req.file);

    // upload to cloudinary
    const {url, publicId} = await uploadToCloudinary(req.file.path);
    
     // Debug: Log cloudinary response
    console.log('Cloudinary upload:', {url, publicId});

    // Debug: Log user info
    console.log('User info:', req.userInfo);

    // store the image url and public id along with the uploaded user id 
    const newlyUploadedImage = new Image({
      url, 
      publicId,
      uploadedBy: req.userInfo.userId,
    })

    await newlyUploadedImage.save();

    res.status(201).json({
      success: true,
      message: "Image uploaded successfully",
      image: newlyUploadedImage
    })

  } catch(error){
    console.log(error);
     res.status(500).json({
      success: false,
      message: 'Something went wrong! Please try again'
     })
  }
}

module.exports = {
  uploadImageController,
};