import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.scss";

export default function ExpensesList({ items }) {
  if (items.length === 0) return <p className="expenses-list__fallback">No Results found.</p>;
  return (
    <ul className="expenses-list">
      {items.map((item) => (
        <ExpenseItem key={item.id} expense={item} />
      ))}
    </ul>
  );
}
