# 📚 Bookstore API

A RESTful API for managing a bookstore collection, built with Node.js, Express, and MongoDB.  
Easily perform CRUD operations on books and test endpoints using Postman.

---

## 🚀 Features

- Add, view, update, and delete books
- Robust error handling and data validation
- Modular code structure (controllers, routes, models)
- Environment variable support with dotenv

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (with Mongoose)
- **dotenv** (for environment variables)
- **Postman** (for API testing)

---

## 🌐 Live Demo

The API is deployed and accessible at:  
[https://book-store-api-1-f8yi.onrender.com](https://book-store-api-1-f8yi.onrender.com)

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd bookstore-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```
   PORT=3000
 
   MONGODB_URI=mongodb://localhost:27017/bookstore
   ```

4. **Start MongoDB**

   Make sure your MongoDB server is running locally or update `MONGODB_URI` for Atlas.

5. **Run the server**
   ```bash
   npm run dev   # For development (with nodemon)
   # or
   npm start     # For production
   ```

---

## 📖 API Endpoints

| Method | Endpoint                | Description                |
|--------|-------------------------|----------------------------|
| GET    | `/api/books/get`        | Get all books              |
| GET    | `/api/books/get/:id`    | Get a book by ID           |
| POST   | `/api/books/add`        | Add a new book             |
| PUT    | `/api/books/update/:id` | Update a book by ID        |
| DELETE | `/api/books/delete/:id` | Delete a book by ID        |

---

## 📝 Book Schema

```js
{
  title: {
    type: String,
    required: true,
    trim: true,
    maxLength: 100
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: Number,
    required: true,
    min: 1000,
    max: currentYear
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}
```

---

## 🧪 Example API Usage (with Postman)

### Add a Book

**POST** `/api/books/add`  
Body (JSON):
```json
{
  "title": "The Pragmatic Programmer",
  "author": "Andrew Hunt",
  "year": 1999
}
```

### Get All Books

**GET** `/api/books/get`

### Get a Book by ID

**GET** `/api/books/get/<book_id>`

### Update a Book

**PUT** `/api/books/update/<book_id>`  
Body (JSON):
```json
{
  "title": "Updated Title"
}
```

### Delete a Book

**DELETE** `/api/books/delete/<book_id>`

---

## 🐛 Error Handling

- Returns `404` if a book is not found
- Returns `400` for validation errors
- Returns `500` for server/database errors

---

## 🧑‍💻 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📬 Contact

For questions or suggestions, open an issue
