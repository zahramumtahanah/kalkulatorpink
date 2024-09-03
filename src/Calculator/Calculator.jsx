import React from 'react'
import { useState } from 'react'

const Calculator = () => {
    const [result, setResult] = useState('')

    const handleClick = (e) => setResult(result.concat(e.target.id));

    const clear = () => setResult('');

    const deleteEl = () => setResult(result.slice(0,-1));

    const calculate = () => {
        try{
            setResult(eval(result).toString());
        }   catch (error) {
            setResult ('Error');
        }
    }
  return (
    <section className='flex items-center justify-center min-h-screen bg-cream'>
    <div className='bg-chero w-[270px] h-[400px] flex flex-col justify-center rounded-xl border-4 border-pink shadow-[0px_5px_10px#BBE9FF]'>
        <div className='flex items-center justify-center mb-4'>
            <input
            className='bg-pink w-[220px] h-[80px] text-3xl text-white font-semibold text-right shadow-[5px_5px__10px#ffffff] rounded-xl px-4'
            type= 'text'
            value={result}
            placeholder='0'
            disabled
            />
        </div>
        <div className='grid grid-cols-4 px-4 gap-2'>
            <button className='p-2 bg-pink text-lg text-white font-semibold shadow-md hover:bg-secondary transition rounded-full'onClick={clear}>AC</button>
            <button className='p-2 bg-pink text-lg text-white font-semibold shadow-md hover:bg-secondary transition rounded-full'onClick={deleteEl}>DEL</button>
            <button id='/' className='p-2 bg-white text-xl text-pink font-semibold shadow-md hover:bg-chiri transition rounded-full'onClick={handleClick}>/</button>
            <button id='%' className='p-2 bg-white text-xl text-pink font-semibold shadow-md hover:bg-chiri transition rounded-full'onClick={handleClick}>%</button>

            <button id='7' className='p-2 bg-pink text-lg text-white font-semibold shadow-md hover:bg-secondary transition rounded-full'onClick={handleClick}>7</button>
            <button id='8' className='p-2 bg-pink text-lg text-white font-semibold shadow-md hover:bg-secondary transition rounded-full'onClick={handleClick}>8</button>
            <button id='9' className='p-2 bg-pink text-lg text-white font-semibold shadow-md hover:bg-secondary transition rounded-full'onClick={handleClick}>9</button>
            <button id='*' className='p-2 bg-white text-2xl text-pink font-semibold shadow-md hover:bg-chiri transition rounded-full'onClick={handleClick}>*</button>

            <button id='4' className='p-2 bg-pink text-lg text-white font-semibold shadow-md hover:bg-secondary transition rounded-full'onClick={handleClick}>4</button>
            <button id='5' className='p-2 bg-pink text-lg text-white font-semibold shadow-md hover:bg-secondary transition rounded-full'onClick={handleClick}>5</button>
            <button id='6' className='p-2 bg-pink text-lg text-white font-semibold shadow-md hover:bg-secondary transition rounded-full'onClick={handleClick}>6</button>
            <button id='-' className='p-2 bg-white text-2xl text-pink font-semibold shadow-md hover:bg-chiri transition rounded-3xl'onClick={handleClick}>-</button>

            <button id='1' className='p-2 bg-pink text-lg text-white font-semibold shadow-md hover:bg-secondary transition rounded-full'onClick={handleClick}>1</button>
            <button id='2' className='p-2 bg-pink text-lg text-white font-semibold shadow-md hover:bg-secondary transition rounded-full'onClick={handleClick}>2</button>
            <button id='3' className='p-2 bg-pink text-lg text-white font-semibold shadow-md hover:bg-secondary transition rounded-full'onClick={handleClick}>3</button>
            <button id='+' className='p-2 bg-white text-2xl text-pink font-semibold shadow-md hover:bg-chiri transition rounded-full'onClick={handleClick}>+</button> 
            
            <button id='0' className='p-2 bg-pink text-lg text-white font-semibold shadow-md hover:bg-secondary transition rounded-full'onClick={handleClick}>0</button>
            <button id='.' className='p-2 bg-pink text-2xl text-white font-bold shadow-md hover:bg-secondary transition rounded-full'onClick={handleClick}>.</button>
            <button id='=' className='p-2 bg-zhra text-2xl text-white font-semibold shadow-md hover:bg-pink transition rounded-3xl col-span-2'onClick={calculate}>=</button>           
        </div>
    </div>
    </section>
  )
}

export default Calculator