import React, {useState} from 'react'

const CostForm = (props) => {

  const [inputName, setInputName] = useState('');
  const [inputPrice, setInputPrice] = useState('');
  const [inputDate, setInputDate] = useState('');


  const handleSubmit =(event)=>{  
      event.preventDefault();

      const userInput ={
        date: new Date(inputDate),
        price: inputPrice,
        description: inputName
      };

      props.onSaveCostData(userInput)

      setInputName('');
      setInputPrice('');
      setInputDate('');

      // console.log('From form', userInput);
  }

  const handleNameChange =(event)=>{
    setInputName(event.target.value);
  }

  const handlePriceChange =(event)=>{
    setInputPrice(event.target.value);
  }

  const handleDateChange =(event)=>{
    setInputDate(event.target.value);
  }

  return (
    <form className='form'>
      <div className='form-element'>
        <label> Name </label>
        <input type='text' value={inputName} onChange={handleNameChange}/>
      </div>
      <div className='form-element'>
        <label> Price </label>
        <input type='number' min='0.00' step='0.10' value={inputPrice} onChange={handlePriceChange}/>
      </div>
      <div className='form-element'>
        <label> Date </label>
        <input type='date' min='2020-01-01' max='2023-12-31' value={inputDate} onChange={handleDateChange}/>
      </div>
      <div className='form-element'>
        <button className='button submit' onClick={handleSubmit}>Add new</button>  
      </div>
    </form>
  )
}

export default CostForm