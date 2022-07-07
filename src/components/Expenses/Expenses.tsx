import React, {useState} from "react";
import "./Expenses.css";
import { ExpenseItem } from "./ExpenseItem";
import { Card } from "../UI/Card";
import { ExpensesFilter } from "./ExpensesFilter";

interface ExpensesProps {
    children?: any;
  array?: any;
}

export const Expenses: React.FC<ExpensesProps> = function ({
  array,
}) {

   const [yearFilter, setYearFilter] = useState()

    const saveYearSelected = (event:any) => {
        setYearFilter(event)
        console.log(event)
    }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
        year={saveYearSelected}
        selected={yearFilter}
         />
        <ExpenseItem
          title={array[0].title}
          amount={array[0].amount}
          date={array[0].date.toString()}
        />
        <ExpenseItem
          title={array[1].title}
          amount={array[1].amount}
          date={array[1].date.toString()}
        />
        <ExpenseItem
          title={array[2].title}
          amount={array[2].amount}
          date={array[2].date.toString()}
        />
      </Card>
    </div>
  );
};

function setState(): [any, any] {
    throw new Error("Function not implemented.");
}

