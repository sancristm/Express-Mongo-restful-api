import express from 'express';
import dotenv from 'dotenv';
import pickspotRoutes from './routes/pickspotRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount the item routes under /api/items
app.use('/api/items', pickspotRoutes);
app.use('/api/items/addItem', pickspotRoutes);
app.use('/api/items/deleteById/:id', pickspotRoutes);

// Catch-all for 404 errors
app.use(notFound);

// Error handling middleware
app.use(errorHandler);

// app.get('/', (req, res) => {
//   res.send('Welcome to the Express.js Practical Test!');
// });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
