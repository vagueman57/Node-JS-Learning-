const Book = require('../models/book')

// get list of all books
const getAllBooks = async(req, res) => {
  try{
    const allBooks = await Book.find({});
    if(allBooks?.length > 0){
      res.status(250).json({
        success : true,
        message : "List of books fetched successfully",
        data : allBooks
      })
    } else {
      res.status(404).json({
        success : false,
        message : "No books found in collection",
      })
    }
  } catch(e){
    console.log(e);
    res.status(500).json({
      success : false,
      message : "Something went wrong! please try again"
    })
  }
};

// get a single book
const getSingleBookById = async(req, res) => {
  try{
    const getCurrentBookID = req.params.id;
    const bookDetailsByID = await Book.findById(getCurrentBookID);

    if(!bookDetailsByID){
      return res.status(404).json({
        success : false,
        message : "Book with current ID is not found! Please try with a different Id"
      })
    }
    res.status(200).json({
      success : true,
      data : bookDetailsByID
    })

  } catch(e){
    console.log(e);
    res.status(500).json({
      success : false,
      message : "something went wrong! Please try agian",
    });
  }
}; 

// add a new book
const addNewBook = async(req, res) => {
  try{
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);
    if(newBookFormData){
      res.status(201).json({
        success : true,
        message : "Book added successfully",
        data : newlyCreatedBook
      })
    }

  } catch(e){ 
     console.log(e);
     res.status(500).json({
      success : false,
      message : "Something went wrong! please try again"
    })
  }
};

// update a book
const updateBook = async(req, res) => {
  try{
    const updatedBookFormData = req.body;
    const getCurrentBookID = req.params.id;
    const updatedBook = await Book.findByIdAndUpdate(
      getCurrentBookID, updatedBookFormData, {
      new : true,
      }
    );

    if(!updatedBook){
      res.status(404).json({
        success: false, 
        message: "Book is not found with this ID",
      })
    }
    res.status(200).json({
      success: true, 
      message: "Book updated successfully",
      data: updatedBook,
    })

  } catch(e){
    console.log(e),
    res.status(500).json({
      success: false,
      message: "Something went wrong! please try again"
    })
  }
};

// delete a book
const deleteBook = async(req, res) => {
  try{
    const getCurrentBookID = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(getCurrentBookID);

    if(!deleteBook){
      res.status(404).json({
        success: false,
        message: "Book is not found with this ID"
      })
    }
    res.status(200).json({
      success: true,
      data: deletedBook,
    })
  } catch(e){
    console.log(e);
    res.status(500).json({
      success : false,
      message : "Something went wrong! Please try again"
    })
  }
};

module.exports = {getAllBooks, getSingleBookById, addNewBook, updateBook, deleteBook};
