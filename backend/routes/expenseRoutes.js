import express from 'express';
import Expense from '../models/Expense.js';

const router = express.Router();

router.post('/', async (req,res) => {
    try {
        const newExpense = new Expense(req.body);
        const savedExpense  = await newExpense.save();
        res.status(201).json(savedExpense);

    } catch (err) {
        res.status(400).json({ error: err.message });   
    }
});

router.get('/', async (req, res) => {
    try {
        const expenses  = await Expense.find();
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;