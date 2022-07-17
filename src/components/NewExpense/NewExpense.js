import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [newExpenseClicked, setNewExpenseClicked] = useState(false);

  if (newExpenseClicked === false) {
    return (
      <div className="new-expense">
        <button
          onClick={() => {
            setNewExpenseClicked(true);
          }}
        >
          Add new Expense
        </button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        setNewExpenseClicked={setNewExpenseClicked}
      />
    </div>
  );
};

export default NewExpense;
