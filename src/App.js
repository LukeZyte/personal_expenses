import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
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

  return (
    <div className="App">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
