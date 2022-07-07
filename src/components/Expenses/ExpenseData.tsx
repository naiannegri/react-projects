import React from 'react';
import './ExpenseData.css'

interface ExpenseDataProps {
  children?: any,
  date:any
}


export const ExpenseData: React.FC<ExpenseDataProps> = function({
date
}) 
{
    const dateRaw = date.split(" ")
    const month = dateRaw[1]
    const day = dateRaw[2]
    const year = dateRaw[3]

    return (
        <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__day'>{day}</div>
        <div className='expense-date__year'>{year}</div>
      </div>
    )
}