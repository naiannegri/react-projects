import React, { useState } from "react";
import "./ExpenseItem.css";
import { ExpenseData } from "./ExpenseData";
import { Card } from "../UI/Card";

interface ExpenseItemProps {
  children?: any;
  title: string;
  date?: any;
  amount: number;
}

export const ExpenseItem: React.FC<ExpenseItemProps> = function ({
  children,
  title,
  date,
  amount,
}) {


  const [updateTitle, setTitle] = useState(title)

  const clickHandler = () => {
    setTitle('Updated!')
  }

  return (
    <Card className="expense-item">
      <ExpenseData date={date} />
      <div className="expense-item__description">
        <h2>{updateTitle}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={clickHandler}> Change Title</button>
    </Card>
  );
};
