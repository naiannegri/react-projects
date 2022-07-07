import React from 'react';
import './ExpensesFilter.css'

interface ExpensesFilterProps {
  children?: any,
  year?:any,
  selected?:any
}


export const ExpensesFilter: React.FC<ExpensesFilterProps> = function({
year,
selected
}) 
{    
    const selectionHandler = (event:any) => {
        year(event.target.value)
    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select           
        onChange={selectionHandler}
        value={selected}
        >
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>

        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

function setState(): [any, any] {
    throw new Error('Function not implemented.');
}
