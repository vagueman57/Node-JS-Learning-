
const express = require('express');
const app = express();

// root route
app.get("/", (req, res) => {
  res.send("welcome to our Home page");
});

// get all products 
app.get('/products', (req, res) => {
   const products = [
    {
      id: 1, 
      label: 'product 1'
    },
    {
      id: 2, 
      label: 'product 2'
    },
    {
      id: 3, 
      label: 'product 3'
    }
   ]
   res.json(products);
})

// get a single product 
app.get('/products/:productId', (req,res) => {
  console.log("req.params:", req.params)
  const productId = parseInt(req.params.productId);
     const products = [
    {
      id: 1, 
      label: 'product 1'
    },
    {
      id: 2, 
      label: 'product 2'
    },
    {
      id: 3, 
      label: 'product 3'
    }
   ];

   const getSingleProduct = products.find(product => product.id === productId);
   if(getSingleProduct){
    res.json(getSingleProduct);
   }
   else{
    res.status(404).send('product is not found! please try with different id');
   }
})

const port = 3000;
app.listen(port, () => {
  console.log(`server is now running at port ${port}`);
});