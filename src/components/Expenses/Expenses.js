import React from "react";
import "./Expenses.scss";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses({ expenses }) {
  const [selectedYear, setSelectedYear] = React.useState("2023");
  const yearFilterHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };
  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <>
      <div className="expenses">
        <ExpensesFilter
          selectedYear={selectedYear}
          onYearFilter={yearFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </div>
    </>
  );
}
