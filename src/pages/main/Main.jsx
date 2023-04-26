//import { useState } from 'react'
import pic from '../../assets/pic.svg'
import Login from '../login/Login'
import { Link } from "react-router-dom";

function Main() {

  return (
    <>
      <div className='flex flex-col h-screen justify-between'>
        <div className='md:w-10/12 w-full pt-[9rem] mx-auto'>
          <img className="mx-auto" alt='logo' src={pic} />
        </div>

        <div className='w-full flex flex-col justify-between bg-[#fff] rounded-t-[25px] h-[60%]'>

          <div className='w-full flex flex-row justify-center pt-3 '>
            <span className='bg-[#2FD1C5] h-[5px] rounded-[25px] mx-[1px] px-1'></span>
            <span className='bg-[#2FD1C5] h-[5px] rounded-[50px] mx-[1px] w-[5px]'></span>
            <span className='bg-[#2FD1C5] h-[5px] rounded-[50px] mx-[1px] w-[5px]'></span>
          </div>
          <div>
            <p className='font-[700] text-[2rem] text-center text-[#00394C]'>Task Manager</p>
            <p className='w-10/12 mx-auto text-[1rem] text-[#585A66] text-center pt-1'>Create a unique emotional story that describes better than words</p>
          </div>
          <Link to='./login' className='w-8/12 bg-[#2FD1C5] text-center text-white rounded-[12px] p-[1.2rem] mx-auto mb-[3rem]'>Get Started</Link>
        </div>

      </div>
    </>
  )
}

export default Main
