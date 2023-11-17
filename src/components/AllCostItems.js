import React from 'react'
import CostItem from './CostItem'

const AllCostItems = () => {
  const purchases = [
    {
      date: new Date(2021, 7, 23),
      description:'Hostel',
      price: 20
    },
    {
      date: new Date(2022, 8, 12),
      description:'Ticket',
      price: 45
    },
    {
      date: new Date(2023, 9, 31),
      description:'Food',
      price: 67
    }
  ]
  return (
    <div className='all-cost-items-box'>
    <h2>AllCostItems</h2>
    
    <CostItem 
    date={purchases[0].date}
    description={purchases[0].description}
    price={purchases[0].price}
    />
    <CostItem 
    date={purchases[1].date}
    description={purchases[1].description}
    price={purchases[1].price}
    />
    <CostItem 
    date={purchases[2].date}
    description={purchases[2].description}
    price={purchases[2].price}
    />

    </div>
  )
}

export default AllCostItems