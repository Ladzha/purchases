import './App.css';
import AllCostItems from './components/AllCostItems';
import NewCost from './components/NewCost';

function App() {
  console.log('APP');

  return (
    <div className="App">
      <NewCost/>
      <AllCostItems/>
    </div>
  );
}

export default App;
