
const mongoose  = require('mongoose');

mongoose.connect('mongodb+srv://rajiv1jan21:himl01113@cluster0.4vzbuoq.mongodb.net/')
  .then(() => console.log("database connected successfully"))
  .catch(e => console.error(e));

  const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
    isActive: Boolean, 
    tags : [String],
    createdAt : {type : Date, default : Date.now}
  });

  // create user model
  const User = mongoose.model('User', userSchema);

  async function runQueryExamples(){
    try{
      // create a new model

      const newUser = await User.create({
        name : 'Updated User',
        email : 'updated23@gmail.com',
        age : 75,
        isActive: true, 
        tags : ['backend', 'music'],
      })

      // const newUser = new User({
      //   name : 'John Doe df',
      //   email : 'john@gmail.com',
      //   age : 21,
      //   isActive: true, 
      //   tags : ['developer', 'designer', 'manager'],
      // })
      // await newUser.save();

      console.log('created new user', newUser)

      // const allUser = await User.find({});
      // console.log(allUser);
        
      // const getUserOfActiveFalse = await User.find({
      //   isActive : true
      // })
      // console.log(getUserOfActiveFalse);
      
      // const getJenny25User = await User.findOne({
      //  name : "Jenny dee"
      // })
      // console.log(getJenny25User);
      
      // const getLastCreatedUserByUserId = await User.findById('689215fc18183888644e7818')
      // console.log(getLastCreatedUserByUserId, "getLastCreatedUserByUserId")

      // const getSelectedFields = await User.find().select('name email -_id');
      // console.log(getSelectedFields);

      // const limitedUsers = await User.find().limit(5).skip(1);
      // console.log(limitedUsers);
      
      // const sortedUsers = await User.find().sort({age: -1});
      // console.log(sortedUsers);

      // const countDocuments = await User.countDocuments({isActive : true});
      // console.log(countDocuments);

      // const deletedUser = await User.findByIdAndDelete(newUser._id);
      // console.log("deleted User ->", deletedUser);

      const UpdatedUser = await User.findByIdAndUpdate(newUser._id, {
        $set : {age: 100}, $push: {tags: "Updated"}
      }, {new: true}
    );
    console.log('updated user', UpdatedUser);

    }catch(e){
      console.log('Error -> ', e);
    }finally{
      await mongoose.connection.close()
    }
  }

  runQueryExamples()