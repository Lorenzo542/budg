import express from "express";
import Income from "../models/Income.js";
import Expense from "../models/Expense.js";

const router = express.Router();

router.put('/income/:id', async (req, res) => {
    try {
      const income = await Income.findById(req.params.id);
      if (!income) {
        return res.status(404).json({ error: 'Income not found' });
      }
  
      income.from = req.body.from;
      income.date = req.body.date;
      income.amount = req.body.amount;
  
      const updatedIncome = await income.save();
      res.status(200).json(updatedIncome);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  router.put('/expense/:id', async (req, res) => {
    try {
      const expense = await Expense.findById(req.params.id);
      if (!expense) {
        return res.status(404).json({ error: 'Expense not found' });
      }
  
      expense.category = req.body.category;
      expense.date = req.body.date;
      expense.amount = req.body.amount;
  
      const updatedExpense = await expense.save();
      res.status(200).json(updatedExpense);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
export default router;