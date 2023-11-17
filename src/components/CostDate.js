import React from 'react'

const CostDate = (props) => {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("en-EN", {month: "long"});
  const day = props.date.toLocaleString("en-EN", {day: "2-digit"});

  return (
    <div className='cost-items-box-date'>
      <div>
        {year}
      </div>
      <div>
        {month}
      </div>
      <div>
        {day}
      </div>
    </div>
  )
}

export default CostDate