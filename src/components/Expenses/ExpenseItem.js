import React from "react";
import { Card } from "../UI";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.scss";

export default function ExpenseItem({ expense }) {
  //Presentational Component
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={expense.date} />
        <div className="expense-item__description">
          <h2>{expense.title}</h2>
          <div className="expense-item__price">{expense.amount}</div>
        </div>
      </Card>
    </li>
  );
}
