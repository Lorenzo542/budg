import express from 'express';
import Income from '../models/Income.js';

const router = express.Router();

// POST income
router.post('/', async (req, res) => {
  try {
    const newIncome = new Income(req.body);
    const savedIncome = await newIncome.save();
    res.status(201).json(savedIncome);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET incomes
router.get('/', async (req, res) => {
  try {
    const incomes = await Income.find();
    res.json(incomes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
