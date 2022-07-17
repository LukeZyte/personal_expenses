import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 12),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 234.99,
    date: new Date(2022, 7, 10),
  },
  {
    id: "e3",
    title: "Car insurance",
    amount: 50.55,
    date: new Date(2022, 7, 9),
  },
  {
    id: "e4",
    title: "New desk",
    amount: 450,
    date: new Date(2022, 7, 8),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
