import React from 'react'
import codeImg from "../images/code.png"
import deleteImg from "../images/delete.png"

function GridCard() {
  return (
    <div>

      <div className='bg-[#141414] w-[270px] h-[180px] cursor-pointer rounded-lg shadow-lg shadow-black/50 hover:bg-[#202020] p-[10px]'>
      
      <img src={codeImg} alt="" 
      className='w-20 '
      />

      <h3 className='text-xl w-[90%] line-clamp-1'>My first project project project</h3>

      <div className='flex items-center justify-between'>
        <p className='text-base text-[gray]'>Created on 9 Mon 2023.</p>
        <img src={deleteImg} alt="" 
        className='w-[30px] cursor-pointer'
        />
      </div>

      </div>

    </div>
  )
}

export default GridCard