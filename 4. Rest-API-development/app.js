
const express = require('express');
const app = express();

// middleware
app.use(express.json());

let books = [
  {
    id: '1',
    title: 'Book 1'
  },
  {
    id: '2',
    title: 'Book 2'
  },
  {
    id: '3',
    title: 'Book 3'
  }
];

// intro route
app.get('/', (req, res) =>{
  res.json({
    message: 'Welcome to our bookstore api',
  });
});

// get all books
app.get('/get', (req, res) => {
  res.json(books)
});

// get a single book
app.get('/get/:id', (req, res) => {
  const book = books.find(item => item.id === req.params.id);
  if(book){
    res.status(200).json(book)
  }else{
    res.status(404).json({
      message: 'Book not found please try with a different Book ID'
    });
  }
});

// add a new book
app.post('/add', (req, res) => {
  const newBook = {
    
    id: Math.floor(Math.random() * 1000).toString(),
    title: `Book ${Math.floor(Math.random() * 1000)}`,
  }

  books.push(newBook);
  res.status(200).json(newBook);
});

// update a book
app.put('/update/:id', (req, res) => {
  const findCurrentBook = books.find(bookItem => bookItem.id === req.params.id);
    if(findCurrentBook){
      
    findCurrentBook.title = req.body.title || findCurrentBook.title;
    
    res.status(200).json(findCurrentBook)
  } else {
    res.status(404).json({
      message: 'Book not found',
    });
  }
})


// delete a book
app.delete('/delete/:id', (req, res) => {
  const findIndexOfCurrentBook = books.findIndex(item => item.id === req.params.id);
  if(findIndexOfCurrentBook !== -1){
    const deletedBook = books.splice(findIndexOfCurrentBook, 1);
    res.status(250).json({
      message : "Book deleted successfully",
      data : deletedBook[0]
    })
  } else {
    res.status(404).json({
      message: "Book not found"
    });
  }
})

const port = 3000;
app.listen(port, () => {
  console.log(`server is now running on port ${port}`);
})