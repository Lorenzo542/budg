import { configDotenv } from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import incomeRoutes from './routes/incomesRoutes.js';
import expenseRoutes from './routes/expenseRoutes.js';
import deleteRoutes from './routes/deleteEntry.js';
import modifyRoutes from './routes/modifyEntry.js';
import authRoutes from './routes/authRoutes.js';



configDotenv();
const PORT = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes

app.use('/api/expense', expenseRoutes);
app.use('/api/income', incomeRoutes);
app.use('/api/delete', deleteRoutes);
app.use('/api/modify', modifyRoutes);
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI, {
  }).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }).catch((err) => {
    console.error('MongoDB connection error:', err);
  });

