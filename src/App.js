import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Books",
    amount: 500,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 10000, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Tshirt",
    amount: 420,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Keyboard",
    amount: 2000,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
