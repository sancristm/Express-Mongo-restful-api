// Create the following endpoints in your Express.js app:

// GET /api/items: Retrieve all items from the MongoDB collection.
// GET /api/items/:id: Retrieve a specific item by its ID.
// POST /api/items: Add a new item to the collection.
// PUT /api/items/:id: Update an existing item by its ID.
// DELETE /api/items/:id: Delete an item from the collection by its ID.

import express from 'express';
import {
  addItem,
  getItems,
  deleteItemsById,
  updateItemById,
} from '../controllers/itemControllers.js';

const router = express.Router();

// Route to fetch all items (GET /api/items)
router.route('/').get(getItems);

// Route to add an item (POST /api/items/addItem)
router.route('/addItem').post(addItem);

// Route to delete an item by ID (DELETE /api/items/deleteById/:id)
router.route('/deleteById/:id').delete(deleteItemsById);

// Route to update an item by ID (PUT /api/items/:id)
router.route('/:id').put(updateItemById);

export default router;
