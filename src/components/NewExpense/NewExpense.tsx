import React from 'react';
import './NewExpense.css'
import { ExpenseForm } from './ExpenseForm';
interface NewExpenseProps {
  children?: any,
  onAddExpense?:any
}


export const NewExpense: React.FC<NewExpenseProps> = function({
children,
onAddExpense
}) 
{
  const saveExpenseData = (enteredExpenseData:any) => {
    const expenseData = { 
      id: Math.random().toString(),
      ...enteredExpenseData
    }
  onAddExpense(expenseData)
  }

    return (
        <div className='new-expense'>
            <ExpenseForm 
            onSaveExpenseData={saveExpenseData}
            />
      </div>
    )
}