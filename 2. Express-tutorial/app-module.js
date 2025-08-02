
const express = require('express');

const app = express();

// application level setting
app.set('view engine', 'ejs');

// routing
app.get('/', (req, res) => {
  res.send("Home Page")
})

app.post('/api/data', (req, res) => {
  res.json({
    message: 'Data recieved',
    data: req.body
  })
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send('something went wrong')
})