require('dotenv').config();
const express = require('express');
const connectToDB = require("./database/db"); 
const bookRoutes = require('./routes/book-routes');


const app = express();
const PORT = process.env.PORT || 3000;


// connect to our DataBase
connectToDB();

// middleware -> express.json()
app.use(express.json()); 

// routes here
app.use('/api/books', bookRoutes)

app.listen(PORT, () => {
  console.log(`server is now running on: ${PORT}`);
})