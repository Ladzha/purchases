import React from 'react'
import CostForm from './CostForm'


const NewCost = (props) => {

  const saveCostData = (inputCostData)=>{
    const costData = {
      ...inputCostData, id: new Date()
    }
  
    props.onAddNewCost(costData)
    console.log('FROM NEW COST', costData);
  }


  return (
    <div>
      <CostForm onSaveCostData = {saveCostData}/>
    </div>
  )
}

export default NewCost