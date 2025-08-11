const express = require('express');
const {getAllBooks, getSingleBookById, addNewBook, updateBook, deleteBook} = require('../controllers/book-controller');

// create express routes
const router = express.Router();

// all the routes that are related to books only
router.get('/get', getAllBooks);
router.get('/get/:id', getSingleBookById);
router.post('/add', addNewBook);
router.put('/update/:id', updateBook);
router.delete('/delete/:id', deleteBook);

module.exports = router;