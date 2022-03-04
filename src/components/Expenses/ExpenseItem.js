import { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UserInterface/Card";

import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  function handleChangeTitle() {
    setTitle("Updated");
  }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={handleChangeTitle}>Change Title</button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
