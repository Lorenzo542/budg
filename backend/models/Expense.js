import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
  category: {
     type: String,
     required: true 
    },
  date: { 
     type: Date,
     required: true 
  },
  amount: { 
     type: Number,
     required: true 
  },
});

const Expense = mongoose.model("Expense", ExpenseSchema);

export default Expense;
