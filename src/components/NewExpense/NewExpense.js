import React, { useState } from "react";
import "./NewExpense.scss";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = ({ onAddExpense }) => {
  const [showForm, setShowForm] = useState(false);
  const saveDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  const showFormHandler = () => {
    setShowForm(true)
  }
  const hideFormHandler = () => {
    setShowForm(false)
  }
  return (
    <div className="new-expense">
      {!showForm ? (
        <button onClick={showFormHandler}>ADD NEW EXPENSE</button>
      ) : (
        <NewExpenseForm
          onSaveData={saveDataHandler}
          hideFormHandler={hideFormHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
