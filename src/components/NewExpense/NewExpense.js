import { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  function handleSaveExpenseData(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setShowExpenseForm(false);
  }

  function handleShowExpenseForm() {
    setShowExpenseForm(true);
  }

  function handleCancelExpenseForm() {
    setShowExpenseForm(false);
  }

  return (
    <div className="new-expense">
      {!showExpenseForm ? (
        <button onClick={handleShowExpenseForm}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={handleSaveExpenseData}
          onCancelExpenseForm={handleCancelExpenseForm}
        />
      )}
    </div>
  );
}

export default NewExpense;
