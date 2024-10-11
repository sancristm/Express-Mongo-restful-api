import asyncHandler from 'express-async-handler';

import Item from '../models/itemModel.js';

// Controller to add an item
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

export const getItems = asyncHandler(async (req, res) => {
  const items = await Item.find();
  res.json(Item);
});

//deleting the Item by Id
export const deleteItemsById = asyncHandler(async (req, res) => {
  const itemToDelete = req.params.ItemId;

  try {
    const deletedItem = await Product.findOneAndDelete({
      Id: { itemToDelete },
    });

    if (!deletedItem) {
      return res.status(404).json({ error: 'item not found' });
    }

    res.status(200).json({ message: 'Item deleted successfully', deletedItem });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete item' });
  }
});
// Function to update an item by its Id
export const updateItemById = asyncHandler(async (req, res) => {
  const { id } = req.params; // Geting the id  from the route parameters //destructuring
  const { name, description } = req.body; // Geting  the new data from the request body //destructuring

  // Find the item by ID
  const item = await Item.findById(id);

  // If item not found, return a 404 error
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }

  // Update item properties ie name & desc
  if (name) item.name = name;
  if (description) item.description = description;

  // Save the updated item
  const updatedItem = await item.save();

  // Return the updated item
  res.status(200).json(updatedItem);
});
