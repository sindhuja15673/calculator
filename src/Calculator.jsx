import React, { useState } from 'react';
import './Calculator.css';


function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleAdd = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  return (
    
    <div className='calci'>
       <div className="background-image"></div>
      
      <div className='cal'>
      <h2>Simple Calculator</h2>
        <input
          type="number"
          placeholder="Enter number 1"
          value={num1}
          onChange={handleNum1Change}
        />
        <input
          type="number"
          placeholder="Enter number 2"
          value={num2}
          onChange={handleNum2Change}
        /><br/>
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        {result && (
          <p>
            Result: {num1} + {num2} = {result}
          </p>
        )}
      </div>
    </div>
  );
}

export default Calculator;
