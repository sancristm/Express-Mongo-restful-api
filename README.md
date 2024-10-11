# Practical Test: Build an Express.js API with MongoDB

## Task Overview

In this practical test, you are required to build a simple REST API using **Express.js** and **MongoDB**. The API will perform CRUD (Create, Read, Update, Delete) operations on a collection of items in MongoDB.

You are provided with a basic folder structure. Your task is to write the necessary code to complete the API.

## Requirements

### 1. Setup

- Use the provided **MongoDB connection string** to connect to the database.
- Create a Mongoose model to represent an `Item` with the following fields:
  - `name`: String (required)
  - `description`: String (optional)
  - `createdAt`: Date (auto-generated)

### 2. API Endpoints

Create the following endpoints in your **Express.js** app:

- **GET /api/items**: Retrieve all items from the MongoDB collection.
- **GET /api/items/:id**: Retrieve a specific item by its ID.
- **POST /api/items**: Add a new item to the collection.
- **PUT /api/items/:id**: Update an existing item by its ID.
- **DELETE /api/items/:id**: Delete an item from the collection by its ID.

### 3. MongoDB Connection

You will be using a remote MongoDB instance. Use the following connection string to connect to the database:

mongodb://ndungu:ndungu11@192.168.0.105:27017/


### 4. Business Logic

Write the business logic for CRUD operations in the `controllers/` folder, organized as:

- **`getItems`**: Fetch all items from MongoDB.
- **`getItemById`**: Fetch a single item by its ID.
- **`addItem`**: Create a new item in the collection.
- **`updateItem`**: Update an existing item.
- **`deleteItem`**: Remove an item from the collection.

### 5. Routes

Define the necessary routes in the `routes/` folder that map to the controller methods for the CRUD operations.

### 6. Bonus (Optional)

If you have extra time, consider adding one or more of the following:
- **Input Validation**: Use a validation library like `Joi` or `express-validator` to validate the request payloads.
- **Error Handling**: Improve error handling for cases like invalid IDs, missing items, etc.
- **Search Feature**: Add a query parameter to search for items by name.

## Instructions to Run

1. **Install dependencies**:
   ```bash
   npm install
The server will run on http://localhost:5000/.

Expected Output
Your API should handle all the above operations with MongoDB and respond appropriately to requests. Use a tool like Postman to test the API routes.

Good luck, and feel free to ask any clarifying questions!
