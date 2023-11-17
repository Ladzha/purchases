import React, {useState} from 'react';
import CostItem from './CostItem';
import CostFilter from './CostFilter';

const AllCostItems = (props) => {

  const [selectedYear, setSelectedYear] = useState('2023')

  const handleYearChange =(year)=>{
    setSelectedYear(year)
    console.log('FROM ALL COST', year);
  }

  const filteredCosts = props.costs.filter(cost => {
    return cost.date.getFullYear().toString()===selectedYear;
  })

  let constContent = <p>No costs in this period</p>

  if(filteredCosts.length > 0){
    constContent = filteredCosts.map(cost=> {
      return( 
        <CostItem 
        key={Math.random()}
        date={cost.date}
        description={cost.description}
        price={cost.price}
        />)})
  }

  return (
    <div className='all-cost-items-box'>
    <h2>AllCostItems</h2>

    <CostFilter onYearChange={handleYearChange} year={selectedYear}/>
    {constContent}
    </div>
  )
}

export default AllCostItems