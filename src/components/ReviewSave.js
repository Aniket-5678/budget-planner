import React from "react";

const ReviewSave = ({ formData, setCurrentStep }) => {
  const handleSave = () => {
    localStorage.setItem('budgetData', JSON.stringify(formData));
    alert('Budget data saved!');
  };

  return (
    <div className="review-save">
      <h2>Review and Save</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Preferred Currency: {formData.currency}</p>
      <p>Monthly Income: {formData.income}</p>
      <h3>Expenses</h3>
      {formData.expenses.map((expense, index) => (
        <div key={index}>
          <p>Expense Name: {expense.name}</p>
          <p>Expense Amount: {expense.amount}</p>
        </div>
      ))}
      <button onClick={() => setCurrentStep(0)}>Back to Step 1</button>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ReviewSave;
