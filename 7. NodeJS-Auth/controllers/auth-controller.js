const User = require('../models/User');
const bcrypt = require('bcryptjs');

// register controller
const registerUser = async(req, res) => {
  try{
    // extracts user information form our request body
    const {username, email, password, role} = req.body;

    // check if the user already exists  in our databse
    const checkExistingUser = await User.findOne({$or : [{email}, {username}]});
    if(checkExistingUser){
      return res.status(400).json({
        success: false,
        message: 'User is already exists either with same username or same email. Please try with a different useranme or email',
      });
    }

    // hash user password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
  
    // create a new user and save in your database
    const newlyCreatedUser = new User({
      username, 
      email,
      password : hashPassword,
      role : role || 'user'
    })

    await newlyCreatedUser.save();

    if(newlyCreatedUser){
      res.status(201).json({
        success: true,
        message: 'User registered successfully!'
      })
    } else{
      res.status(400).json({
        success: false,
        message: 'Unable to register user! please try again.'
      })      
    }

  }catch(e){
    res.status(500).json({
      success: false,
      message: "Some error occured! Please try again"
    });
  }
};

// login controller

const loginUser = async (req, res) => {
  try{

  } catch(e){
    res.status(500).json({
      success: false,
      message: "some error occured! Please try again"
    });
  }
};

module.exports = { registerUser, loginUser}