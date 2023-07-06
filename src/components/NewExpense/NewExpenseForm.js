import React from "react";
import "./NewExpenseForm.scss";

export default function NewExpenseForm({ onSaveData, hideFormHandler }) {
  const [data, setData] = React.useState({
    title: "",
    amount: "",
    date: "",
  });
  const onChangeHandler = (identifier, value) => {
    setData((prevState) => ({
      ...prevState,
      [identifier]: value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      ...data,
      date: new Date(data.date),
      amount: +data.amount
    };
    onSaveData(formData);
    hideFormHandler();
    setData({
      title: "",
      amount: "",
      date: "",
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={data.title}
            onInput={(e) => onChangeHandler("title", e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={data.amount}
            onChange={(e) => onChangeHandler("amount", e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min=""
            max=""
            value={data.date}
            onChange={(e) => onChangeHandler("date", e.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={hideFormHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
