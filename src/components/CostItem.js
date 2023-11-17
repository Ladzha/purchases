import React from 'react'
import CostDate from './CostDate'

const CostItem = (props) => {
  return (
    <div className='cost-items-box'>
      <CostDate date={props.date}/>
      <div>{props.description}</div>
      <div>${props.price}</div>
    </div>
  )
}

export default CostItem