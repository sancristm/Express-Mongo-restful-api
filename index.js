import express from 'express';
import dotenv from 'dotenv';
import pickspotRoutes from './routes/pickspotRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount the item routes under /api/items
app.use('/api/items', pickspotRoutes);

// Define the root route
app.get('/', (req, res) => {
  res.send('Welcome to the Express.js Practical Test!');
});

// Catch-all for 404 errors
app.use(notFound);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
