require('dotenv').config();
const express = require('express');
const { default: mongoose } = require('mongoose');
const mogoose = require('mongoose');
const productRoutes = require('./routes/product-routes');
const bookRoutes = require('./routes/book-routes');

const app = express();
 
//  connect to our database
mongoose.connect(process.env.MONGO_URI)
.then( () => console.log("MongoDB connected succesfully"))
.catch((e) => console.log("error:", e)); 

// use middleware
app.use(express.json());

app.use("/products", productRoutes); 
app.use("/reference", bookRoutes);


app.listen(process.env.PORT, () => {
  console.log(`server is now running on port ${process.env.PORT}`)
})