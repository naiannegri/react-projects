import React from 'react';
import { Expenses } from './components/Expenses/Expenses'
import { NewExpense } from './components/NewExpense/NewExpense'

const App = () => {
  const expenses = [
    { title: 'Car Insurance', amount: 10000, date: new Date(2022,1,3) },
    { title: 'House Expenses', amount: 5000, date: new Date(2022,20,3) },
    { title: 'Eletronics Expenses', amount: 20000, date: new Date(2022,15,3) }
  ]
  console.log(expenses[0].date.toString())

  const addExpenseHandler = (expense:any) => {
console.log('In app js')
console.log(expense)

  }
  return (
    <div className="App">
      <NewExpense 
      onAddExpense={addExpenseHandler}
      />
      <Expenses 
      array={expenses} 
      />
    </div>
  );

}

export default App;
