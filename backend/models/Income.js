import mongoose from "mongoose";


const IncomeSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

const Income = mongoose.model("Income", IncomeSchema);

export default Income
