import express from "express";
import Income from "../models/Income.js";
import Expense from "../models/Expense.js";

const router = express.Router();

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
      let deletedEntry = await Income.findByIdAndDelete(id);
  
      if (!deletedEntry) {
        deletedEntry = await Expense.findByIdAndDelete(id);
      }
  
      if (!deletedEntry) {
        return res.status(404).json({ error: "Entry not found" });
      }
  
      res.status(200).json({ message: "Entry deleted", deletedEntry });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  });
  

export default router;