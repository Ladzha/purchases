import './App.css';
import AllCostItems from './components/AllCostItems';
import NewCost from './components/NewCost';
import MonthCost from './components/MonthCost';
import React, {useState} from 'react';

const INITIAL_COSTS = [
  {
    date: new Date(2022, 7, 23),
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

function App() {

  const [costs, setCosts] = useState(INITIAL_COSTS)

  //more correct
  const addNewCost =(newCostData)=>{
    setCosts( prevCosts =>{
      return[newCostData, ...prevCosts]})
  }

  console.log('APP');

  return (
    <div className="App">
      <NewCost onAddNewCost={addNewCost}/>
      <MonthCost/>
      <AllCostItems costs={costs}/>
    </div>
  );
}

export default App;
