//import { useState } from 'react'
import pic from '../../assets/pic.svg'
import { Link } from "react-router-dom";
import Loader from '../../assets/loader.svg';
import loaderimage from '../../assets/loaderimage.svg';
import { useState, useEffect } from 'react';

function Main() {

  const [loadingImage, setLoadingImage] = useState(true);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    setInterval(() => {
      setLoading(false);
    }, 1000);

  });

  return (

    <>
      {
        loading ?
          <img src={Loader} className='W-[30vw] h-[30vh] mt-[30vh] m-auto' /> : (
            <div className='flex flex-col h-full justify-between'>
              <div className='md:w-10/12 w-full pt-[8rem] mx-auto'>
                {
                  loadingImage ? (
                    <img
                      src={loaderimage} className="W-[30vw] h-[10vh] m-auto"
                      style={loadingImage ? {} : { display: 'none' }}
                      onLoad={() => setLoadingImage(false)} />
                  ) : (
                    <img className="mx-auto mb-4" alt='logo' src={pic} />
                  )
                }

              </div>

              <div className='w-full flex flex-col justify-between bg-[#fff] rounded-t-[25px] h-[55%] fixed bottom-0'>

                <div className='w-full flex flex-row justify-center mt-9'>
                  <span className='bg-[#2FD1C5] h-[5px] rounded-[25px] mx-[1px] px-3'></span>
                  <span className='bg-[#2FD1C5] h-[5px] rounded-[50px] mx-[1px] w-[5px]'></span>
                  <span className='bg-[#2FD1C5] h-[5px] rounded-[50px] mx-[1px] w-[5px]'></span>
                </div>
                <div>
                  <p className='font-[700] text-[2rem] text-center text-[#00394C] mt-[10vh]'>Task Manager</p>
                  <p className='w-10/12 mx-auto text-[1rem] text-[#585A66] text-center pt-5 font-[Lato]'>Create a unique emotional story that describes better than words</p>
                </div>
                <Link to='./login' className='w-8/12 bg-[#2FD1C5] text-center text-white rounded-[12px] p-[1.2rem] mx-auto mb-[3rem] mt-[10vh]'>Get Started</Link>
              </div>
            </div>
          )
      }
    </>

  )
}

export default Main
