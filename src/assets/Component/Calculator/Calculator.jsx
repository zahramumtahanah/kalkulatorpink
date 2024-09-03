import React from 'react'

const Calculator = () => {
  return (
    <div className='bg-pink w-[300px] h-[500px] flex flex-col justify-center items-center gap-10 rounded-xl'>
        <div>
            <input
            className='bg-abu w-[260px] h-[100px] text-white font-semibold text-right rounded-xl'
            type="text"
            value=""
            disabled
            />
        </div>
        <div className='grid grid-cols-4 px-6 gap-4'>
            <button className='bg-chero text-white text-xl font-semibold shadow-md hover:bg-gray-400 transition rounded-xl'>AC</button>
            <button className='bg-chero text-white text-xl font-semibold shadow-md hover:bg-gray-400 transition rounded-xl'>DEL</button>
        </div>
    </div>
  )
}

export default Calculator