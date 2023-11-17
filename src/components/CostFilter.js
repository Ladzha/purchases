import React, {useState} from 'react'

const CostFilter = (props) => {


  const handleYearChange = (event)=>{
    props.onYearChange(event.target.value)
  }


  return (
    <div className='filter-menu'>
      <label>Filter by year</label>
      <select value={props.year} onChange={handleYearChange}>
        <option value='2021'>2021</option>
        <option value='2022'>2022</option>
        <option value='2023'>2023</option>
      </select>
    </div>
  )
}

export default CostFilter