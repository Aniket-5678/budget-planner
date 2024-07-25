import React from "react";


const IncomeExpenses = ({ formData, setFormData }) => {
  const addExpense = () => {
    setFormData({
      ...formData,
      expenses: [...formData.expenses, { name: '', amount: '' }],
    });
  };

  const removeExpense = (index) => {
    const newExpenses = formData.expenses.filter((_, i) => i !== index);
    setFormData({ ...formData, expenses: newExpenses });
  };

  const updateExpense = (index, field, value) => {
    const newExpenses = formData.expenses.map((expense, i) =>
      i === index ? { ...expense, [field]: value } : expense
    );
    setFormData({ ...formData, expenses: newExpenses });
  };

  return (
    <div className="income-expenses">
      <h2>Income and Expenses</h2>
      <label>
        Monthly Income:
        <input
          type="number"
          value={formData.income}
          onChange={(e) => setFormData({ ...formData, income: parseFloat(e.target.value) || '' })}
        />
      </label>
      <h3>Expenses</h3>
      {formData.expenses.map((expense, index) => (
        <div className="expense-item" key={index}>
          <label>
            Expense Name:
            <input
              type="text"
              value={expense.name}
              onChange={(e) => updateExpense(index, 'name', e.target.value)}
            />
          </label>
          <label>
            Expense Amount:
            <input
              type="number"
              value={expense.amount}
              onChange={(e) => updateExpense(index, 'amount', parseFloat(e.target.value) || '')}
            />
          </label>
          <button onClick={() => removeExpense(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addExpense}>Add Expense</button>
    </div>
  );
};

export default IncomeExpenses;
