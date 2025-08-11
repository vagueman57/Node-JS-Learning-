const mongoose = require('mongoose');

const connectDB = async () => {
  try{
    await mongoose.connect(
      'mongodb+srv://rajiv1jan21:rajiv1jan212025@cluster0.3nncoob.mongodb.net/'
    );
    console.log('MongoDB is connected successfully!!')
  }catch(error){
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

module.exports = connectDB;