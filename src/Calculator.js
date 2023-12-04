import React, { useState } from 'react'
import './Calculator.css'

const Calculator = () => {

    const [input , setInput] = useState('');
    const [result , setResult] = useState(0);

    const handleClear = () => {
        setInput('');
        setResult(0);
    }

    const handleButtonClick = (value) => {
        setInput((prevInput) => prevInput + value);
      };

    const handleCalculate = () => {
        try {
            setResult(eval(input));
          } catch (error) {
            setResult('Error');
          }
    }

    return (
        <>
            <div className='flex  justify-center items-center h-screen'>
                <div className='bg-yellow-300 w-[440px] h-[600px]'>
                    <div className='flex flex-col justify-center items-center mt-12 '>
                    <div className=" font-bold text-5xl">{input}</div>
                    <div className="result font-bold text-5xl">Result: {result}</div>
                    </div>
                    <div className='flex mt-12'>
                        <button className='button' onClick={() => handleButtonClick('1')}>1</button>
                        <button className='button' onClick={() => handleButtonClick('2')}>2</button>
                        <button className='button' onClick={() => handleButtonClick('3')}>3</button>
                        <button className='button' onClick={() => handleButtonClick('+')}>+</button>
                    </div>
                    <div className='flex'>
                        <button className='button' onClick={() => handleButtonClick('4')}>4</button>
                        <button className='button' onClick={() => handleButtonClick('5')}>5</button>
                        <button className='button' onClick={() => handleButtonClick('6')}>6</button>
                        <button className='button' onClick={() => handleButtonClick('-')}>-</button>
                    </div>
                    <div className='flex'>
                        <button className='button' onClick={() => handleButtonClick('7')}>7</button>
                        <button className='button' onClick={() => handleButtonClick('8')}>8</button>
                        <button className='button' onClick={() => handleButtonClick('9')}>9</button>
                        <button className='button' onClick={() => handleButtonClick('*')}>*</button>
                    </div>
                    <div className='flex'>
                        <button className='button' onClick={handleClear}>C</button>
                        <button className='button' onClick={() => handleButtonClick('0')}>0</button>
                        <button className='button' onClick={handleCalculate}>=</button>
                        <button className='button' onClick={() => handleButtonClick('/')}>/</button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Calculator