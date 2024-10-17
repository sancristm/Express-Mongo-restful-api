import asyncHandler from 'express-async-handler';
import Item from '../models/itemModel.js';

//  to add an item
export const addItem = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  // Check if item already exists
  const itemExists = await Item.findOne({ name });

  if (itemExists) {
    res.status(400);
    throw new Error('Item already exists');
  }

  // Create a new item
  const item = await Item.create({ name, description });

  res.status(201).json(item);
});

// Controller to fetch all items
export const getItems = asyncHandler(async (req, res) => {
  const items = await Item.find();
  res.json(items); // Return the fetched items
});

// Controller to delete an item by ID
export const deleteItemsById = asyncHandler(async (req, res) => {
  const itemToDelete = req.params.id; // Use the correct param key

  try {
    const deletedItem = await Item.findOneAndDelete({ _id: itemToDelete }); // Use _id for MongoDB
    if (!deletedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.status(200).json({ message: 'Item deleted successfully', deletedItem });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete item' });
  }
});

// Function to update an item by its ID
export const updateItemById = asyncHandler(async (req, res) => {
  const { id } = req.params; // Get the id from the route parameters
  const { name, description } = req.body; // Get the new data from the request body

  // Find the item by ID
  const item = await Item.findById(id);

  // If item not found, return a 404 error
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }

  // Update item properties
  if (name) item.name = name;
  if (description) item.description = description;

  // Save the updated item
  const updatedItem = await item.save();

  // Return the updated item
  res.status(200).json(updatedItem);
});
