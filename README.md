# 📦 Node JS Complete Learning Repository

Welcome to the **Node JS Complete Learning Repository**!  
This repo is a comprehensive, hands-on journey through Node.js, Express, MongoDB, REST APIs, authentication, GraphQL, EJS templating, Socket.IO, and TypeScript.  
It is organized into two main parts, each containing multiple folders and projects that cover essential backend development concepts.

---

## 🗂️ Repository Structure

```
Part 1/
├── 1. Node Lesson/
│   ├── 1.hello-world-node/
│   ├── 2. node-module-system/
│   ├── 3. node-package-manager/
│   ├── 4. Path-module/
│   ├── 5.file-system/
│   ├── 6.http-module/
│   ├── 7.callbacks/
│   ├── 8.promises/
│   ├── 9.async-await/
│   ├── 10.event-emitter/
├── 2. Express-tutorial/
├── 3. EJS tutorial/
├── 4. Rest-API-development/
├── 5. MongoDB-Basics/
├── 6. Bookstore-Api/
├── 7. NodeJS-Auth/
├── 8. MongoDB-Intermediate/
├── 9. Nodejs-socket/
│── 10. NodeJS-GraphQL/
│   │   ├── 1. Basic/
│   │   └── 2. Mongoose-Integration/
├── 11. NodeJS-with-TypeScript/
Part 2/
```

---

## 📚 What You'll Learn

- **Node.js Fundamentals:** Modules, package management, file system, path, HTTP server, callbacks, promises, async/await, event emitters.
- **Express.js:** Routing, middleware, REST API development.
- **MongoDB & Mongoose:** Data modeling, CRUD operations, aggregation, relationships.
- **Authentication & Authorization:** JWT, role-based access, password hashing, image uploads.
- **Templating:** EJS for server-side rendering.
- **Real-time Communication:** Socket.IO chat app.
- **GraphQL:** API design, queries, mutations, integration with MongoDB.
- **TypeScript:** Strongly-typed Node.js backend.

---

## 🏗️ Detailed Breakdown

### 1. Node Lesson

#### 1.hello-world-node/
- **Basic Node.js script**: Logging, arrays, setTimeout.
- **Learning:** Node.js runtime, asynchronous execution.

#### 2. node-module-system/
- **Custom modules**: `1st_module.js` (add, subtract, divide), module exports/imports, wrapper functions.
- **Learning:** Node.js module system, error handling, module wrapper.

#### 3. node-package-manager/
- **Using npm packages**: Example with `lodash` for string capitalization.
- **Learning:** npm, third-party libraries.

#### 4. Path-module/
- **Path operations**: dirname, basename, extname, join, resolve, normalize.
- **Learning:** Node.js `path` module for file path manipulations.

#### 5.file-system/
- **File operations**: Synchronous and asynchronous file creation, reading, appending.
- **Learning:** Node.js `fs` module, callback patterns.

#### 6.http-module/
- **HTTP server**: Basic server, custom routes.
- **Learning:** Node.js `http` module, request/response handling.

#### 7.callbacks/
- **Callbacks**: Function callbacks, reading files with callbacks.
- **Callback hell**: Nested callbacks for file operations.
- **Learning:** Callback pattern, asynchronous flow, error handling.

#### 8.promises/
- **Promises**: Creating and using promises for delays and division.
- **Learning:** Promise API, chaining, error handling.

#### 9.async-await/
- **Async/await**: Delayed greeting, division with error handling.
- **Learning:** Modern async patterns, try/catch.

#### 10.event-emitter/
- **Events**: Custom event emitter classes, listeners, emitting events.
- **Learning:** Node.js event-driven architecture.

---

### 2. Express-tutorial

- **Basic Express server**: Routing, middleware, error handling.
- **Custom middleware**: Logging requests, timestamps.
- **Learning:** Express app structure, middleware, routing, error handling.

---

### 3. EJS tutorial

- **Server-side rendering**: Using EJS templates for dynamic HTML.
- **Views**: Home and About pages, header component.
- **Learning:** EJS syntax, passing data to templates, partials.

---

### 4. Rest-API-development

- **REST API**: CRUD operations for books (in-memory).
- **Learning:** RESTful principles, Express routing, status codes.

---

### 5. MongoDB-Basics

- **Mongoose**: Connecting to MongoDB, defining schemas, CRUD operations, queries, updates, deletes.
- **Learning:** Mongoose models, schema design, query methods.

---

### 6. Bookstore-Api

- **Full-featured REST API**: CRUD for books, MongoDB integration, error handling.
- **Learning:** API design, data validation, modular structure (controllers, routes, models), environment variables.

---

### 7. NodeJS-Auth

- **Authentication & Authorization**: JWT-based login, registration, password change, role-based access (user/admin), image upload with Cloudinary.
- **Learning:** Secure authentication, middleware, file uploads, cloud storage, protected routes.

---

### 8. MongoDB-Intermediate

- **Advanced MongoDB**: Aggregation, relationships (books/authors), sample data insertion, stats and analysis endpoints.
- **Learning:** Aggregation pipelines, population, advanced queries.

---

### 9. Nodejs-socket

- **Real-time chat app**: Socket.IO for messaging, user join/leave notifications, online user list.
- **Learning:** WebSockets, real-time communication, frontend-backend integration.

---

### 10. NodeJS-GraphQL

#### 1. Basic/
- **GraphQL API**: Schema, resolvers, queries, mutations (in-memory data).
- **Learning:** GraphQL basics, schema design, resolver functions.

#### 2. Mongoose-Integration/
- **GraphQL + MongoDB**: Apollo Server, Mongoose models, CRUD via GraphQL.
- **Learning:** Integrating GraphQL with databases, advanced API design.

---

### 11. NodeJS-with-TypeScript

- **TypeScript backend**: Express server, typed models, routes, middleware.
- **Learning:** Type safety, interfaces, type annotations, integrating TypeScript with Node.js and Express.

---

## 🧑‍🎓 Key Concepts & Skills Gained

- **Node.js Core:** Modules, event loop, async programming, file system, HTTP.
- **Express.js:** Routing, middleware, error handling, RESTful APIs.
- **MongoDB/Mongoose:** Data modeling, CRUD, aggregation, relationships.
- **Authentication:** JWT, password hashing, role-based access.
- **Templating:** EJS for dynamic HTML.
- **Real-time Apps:** Socket.IO for chat and notifications.
- **GraphQL:** API schema, queries, mutations, integration with MongoDB.
- **TypeScript:** Strong typing, interfaces, type-safe Express apps.
- **Best Practices:** Modular code, error handling, environment variables, cloud integration.

---

## 🚀 How to Use This Repo

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd "Node JS"
   ```

2. **Navigate to any subfolder** and follow its README for setup and usage.

3. **Install dependencies** (usually with `npm install`).

4. **Run servers** (typically with `npm start` or `npm run dev`).

5. **Explore code**: Each folder is self-contained and demonstrates a specific concept.

---

## 📦 Subfolder Summaries

- **1. Node Lesson/**: Core Node.js concepts, from basics to advanced async/event patterns.
- **2. Express-tutorial/**: Express.js fundamentals, routing, middleware.
- **3. EJS tutorial/**: Server-side rendering with EJS.
- **4. Rest-API-development/**: Simple REST API with Express.
- **5. MongoDB-Basics/**: Mongoose CRUD and queries.
- **6. Bookstore-Api/**: Full REST API with MongoDB.
- **7. NodeJS-Auth/**: Authentication, authorization, image upload.
- **8. MongoDB-Intermediate/**: Aggregation, relationships, advanced queries.
- **9. Nodejs-socket/**: Real-time chat app with Socket