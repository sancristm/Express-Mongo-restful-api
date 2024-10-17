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

### 4. Business Logic

Write the business logic for CRUD operations in the `controllers/` folder, organized as:

- **`getItems`**: Fetch all items from MongoDB.
- **`getItemById`**: Fetch a single item by its ID.
- **`addItem`**: Create a new item in the collection.
- **`updateItem`**: Update an existing item.
- **`deleteItem`**: Remove an item from the collection.

### 5. Routes

Define the necessary routes in the `routes/` folder that map to the controller methods for the CRUD operations.

### 6. Todo

If you have extra time, consider adding one or more of the following:

- **Input Validation**: Use a validation library like `Joi` or `express-validator` to validate the request payloads.
- **Error Handling**: Improve error handling for cases like invalid IDs, missing items, etc.
- **Search Feature**: Add a query parameter to search for items by name.

## Instructions to Run

1. **Install dependencies**:
   ```bash
   npm install
   The server will run on http://localhost:5000/.
   ```

Expected Output
Your API should handle all the above operations with MongoDB and respond appropriately to requests. Use a tool like Postman to test the API routes.

# Items API Documentation

This is a RESTful API for managing items, built with Node.js, Express, and MongoDB.

**Base URL:**

```
http://localhost:5000/api/items
```

---

## **Endpoints**

### 1. Get All Items

- **Endpoint:** `GET /api/items`
- **Description:** Fetches all items from the database.

**Response Example:**

```json
[
  {
    "_id": "60d21b9967d0d8992e610c85",
    "name": "Item 1",
    "description": "Description of item 1",
    "createdAt": "2024-10-16T21:32:23.933Z",
    "updatedAt": "2024-10-16T21:32:23.933Z",
    "__v": 0
  }
]
```

### 2. Add a New Item

- **Endpoint:** `POST /api/items/addItem`
- **Description:** Adds a new item to the database.

**Request Body:**

```json
{
  "name": "New Item",
  "description": "Description for the new item"
}
```

**Response Example:**

```json
{
  "_id": "60d21b9967d0d8992e610c85",
  "name": "New Item",
  "description": "Description for the new item",
  "createdAt": "2024-10-17T14:48:22.594Z",
  "updatedAt": "2024-10-17T14:48:22.594Z",
  "__v": 0
}
```

### 3. Delete an Item by ID

- **Endpoint:** `DELETE /api/items/deleteById/:id`
- **Description:** Deletes an item by its ID.

**Response Example:**

```json
{
  "message": "Item deleted successfully",
  "deletedItem": {
    "_id": "60d21b9967d0d8992e610c85",
    "name": "Item 1",
    "description": "Description of item 1",
    "createdAt": "2024-10-16T21:32:23.933Z",
    "updatedAt": "2024-10-16T21:32:23.933Z",
    "__v": 0
  }
}
```

---

## **Setup and Installation**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sancristm/Express-Mongo-restful-api.git
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up the environment variables:**
   Create a `.env` file in the root of the project:

   ```env
   MONGO_URI=
   PORT=5000
   ```

4. **Start the server:**
   ```bash
   npm run dev
   ```

---

## **Error Handling**

Common error responses for invalid requests.

**Error Example (Item Not Found):**

```json
{
  "error": "Item not found"
}
```

---

## License

This project is licensed under the MIT License.
