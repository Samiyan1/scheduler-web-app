import { Link } from "react-router-dom";

function PageNotFound() {


    return (
        <>
            <p className='font-[700] text-[2rem] text-center mt-[3rem]  text-rose-700'>error</p>
            <Link to='/' className='w-8/12 bg-[#2FD1C5] text-white rounded-[12px] p-1 mx-auto mt-[4rem] flex justify-center'>go to home</Link>
        </>
    )
}

export default PageNotFound