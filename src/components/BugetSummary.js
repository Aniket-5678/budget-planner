import React, {useState, useEffect} from "react";
import axios from "axios"

const BudgetSummary = ({ formData }) => {
  const [conversionRate, setConversionRate] = useState(1);
  const [convertedIncome, setConvertedIncome] = useState(formData.income);

  useEffect(() => {
    const fetchConversionRate = async () => {
      try {
        const response = await axios.get(
          `https://api.exchangerate-api.com/v4/latest/${formData.currency}`
        );
        setConversionRate(response.data.rates[formData.currency]);
        setConvertedIncome(formData.income * response.data.rates[formData.currency]);
      } catch (error) {
        console.error("Error fetching conversion rate:", error);
      }
    };

    fetchConversionRate();
  }, [formData.income, formData.currency]);

  const totalExpenses = formData.expenses.reduce((total, expense) => total + (expense.amount || 0), 0);
  const remainingBudget = formData.income - totalExpenses;

  return (
    <div className="budget-summary">
      <h2>Budget Summary</h2>
      <p>Total Income: {formData.income} {formData.currency}</p>
      <p>Total Expenses: {totalExpenses} {formData.currency}</p>
      <p>Remaining Budget: {remainingBudget} {formData.currency}</p>
      <p>Converted Income: {convertedIncome.toFixed(2)}</p>
    </div>
  );
};

export default BudgetSummary;
