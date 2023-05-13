import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";
import google from '../../assets/google.svg';
import apple from '../../assets/apple.svg';
import { useState, useEffect } from 'react';
import Loader from '../../assets/Loader.svg';


function Login() {

   // const [loadingImage, setLoadingImage] = useState(true);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        setInterval(() => {
            setLoading(false);
        }, 1000);

    });

    return (
        <>
            {
                loading ? (
                    <img src={Loader} className='W-[30vw] h-[30vh] mt-[30vh] m-auto' />
                ) : (
                    <div className='flex flex-col justify-between' >
                        <div className='md:w-10/12  w-full  mx-auto pt-10'>
                            <img className="mx-auto" alt='logo' src={logo} />
                            <p className='font-[700] text-[2rem] text-center mt-[1rem] text-[#00394C]'>My Study Life</p>
                            <p className='w-10/12 mx-auto text-[1rem] text-center text-[#585A66] mt-[.5rem] mb-7'>Create a unique emotional story that describes better than words</p>

                        </div>

                        <div className='w-full flex flex-col justify-around bg-[#fff] rounded-t-[25px] h-[60%] mb-0'>

                            <div className='w-full  pt-3 '>
                                <p className='font-[700] sm:ml-7 md:ml-[7.3%] md:mb-8 pl-2 text-[21px] text- text-[#00394C] leading-[120%] mt-7 mb-7'>Signin with</p>
                            </div>
                            <div className="w-11/12 flex flex-row justify-around mx-auto mb-2">

                                <button className='w-5/12  flex flex-row py-[1rem] justify-center border-[1.5px] border-solid border-[#2FD1C5] rounded-[8px]'>
                                    <span className="mr-[.5rem]"> <img src={google} /> </span>
                                    <span className="font-[700] text-[#00394C]">google</span>
                                </button>

                                <button className='w-5/12 flex flex-row py-[1rem] justify-center  border-[1.5px] border-solid border-[#2FD1C5] rounded-[8px]'>
                                    <span className="mr-[.5rem]"> <img src={apple} /> </span>
                                    <span className="font-[700] text-[#00394C]">apple</span>
                                </button>

                            </div>
                            <div className="flex flex-row justify-center my-8">
                                <span className='w-4/12 w-5.5/12 md:mr-16 sm:mr-[1.5rem] border-t-[1px] border-t-solid border-t-[#C4D7FF] p-1 mt-3'></span>
                                <p className='text-[#2F394B] text-[18px] font-[400] leading-[120%] '>Or</p>
                                <span className='w-4/12 w-5.5/12 md:ml-16 sm:ml-[1.5rem] border-t-[1px] border-t-solid border-t-[#C4D7FF] p-1 mt-3'></span>
                            </div>

                            <div className="flex flex-col pb-4">
                                <input type="text" placeholder="d.che.nevsky@gmail.com" className="text-black w-10/12 p-[1.2rem] mx-auto mb-[1rem] border-[1px] border-solid border-[#C4D7FF] rounded-[8px] bg-white" />
                                <Link to='/onboarding' className='w-10/12 bg-[#2FD1C5] text-center text-white rounded-[8px] p-[1.2rem] mx-auto mb-[1rem]'>Continue</Link>
                            </div>
                        </div>

                    </div>
                )
            }
        </>
    );
}

export default Login;