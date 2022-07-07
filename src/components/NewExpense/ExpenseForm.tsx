import React, {useState} from 'react';
import './ExpenseForm.css'

interface ExpenseFormProps {
    children?: any,
    onSaveExpenseData?:any
  }
  
  
  export const ExpenseForm: React.FC<ExpenseFormProps> = function({
  children,
  onSaveExpenseData
  }) 
  {
    const [enterTitle, setEnterTitle] = useState('')
    const [enterAmount, setEnterAmount] = useState('')
    const [enterDate, setEnterDate] = useState('')

    const titleChangeHandler = (event:any) => {
        setEnterTitle(event.target.value)

        // if a state depends on the previour state:
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value}
        // })
    }
  
    const amountChangeHandler = (event:any) => {
        setEnterAmount(event.target.value)
    }

    const dateChangeHandler = (event:any) => {
        setEnterDate(event.target.value)
    }

    const submitHandler = (event:any) => {
        event.preventDefault();
        const expenseData = {
            title: enterTitle,
            amount: enterAmount,
            date: new Date(enterDate)
        }
        onSaveExpenseData(expenseData);
        setEnterAmount('')
        setEnterTitle('')
        setEnterDate('')

    }

      return (

          <form onSubmit={submitHandler}>
              <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                    type='text' 
                    value={enterTitle}
                    onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label> Amount</label>
                    <input 
                    type='number' 
                    min="0.01" 
                    value={enterAmount}
                    step="0.01"
                    onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                    type='date' 
                    value={enterDate}
                    min="2022-06-06" 
                    max="2022-12-31"
                    onChange={dateChangeHandler}
                    />
                </div>
                <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
                </div>
              </div>
          </form>
      )
  }