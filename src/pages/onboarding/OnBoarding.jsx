import { Link } from "react-router-dom";
import yearone from '../../assets/year-7-9.svg';
import yeartwo from '../../assets/year10-11.svg';
import yearthree from '../../assets/year12-13.svg';
import bachelors from '../../assets/bachelors.svg';
import masters from '../../assets/masters.svg';
import OnBordingSkeletone from './OnBordingSkeletone'
import { useState, useEffect } from 'react';

function OnBording() {


    // const [loadingImage, setLoadingImage] = useState(true);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        setInterval(() => {
            setLoading(false);
        }, 3000);

    });

    return (
        <div className='w-10/12 flex flex-col mt-7 justify-between mx-auto'>

            {loading ? <OnBordingSkeletone /> : (
                <>
                    <div className="text-[#00394C] text-[30px] font-[700]  mt-7">Education level</div>
                    <div className=" text-[#585A66] text-[14px] font-[400] mb-1">Create a unique emotional story that describes better than words</div>

                    <div className="items-center bg-[#fff] flex border-[1px] border-solid border-[#FDD563] rounded-[12px] text-[#585A66] text-[14px] font-[400] mb-3 mt-4 drop-shadow">
                        <span><img src={yearone} className="pt-[10px]" /></span>
                        <span className=" text-[#585A66] text-[20px] font-[700]">Year 7-9</span>
                    </div>
                    <div className="items-center bg-[#fff] flex border-[1px] border-solid border-[#8BE38B] rounded-[12px] text-[#585A66] text-[14px] font-[400] mb-3 drop-shadow">
                        <span><img src={yeartwo} className="pt-[10px]" /></span>
                        <span className=" text-[#585A66] text-[20px] font-[700]">Year 10-11</span>
                    </div>
                    <div className="items-center bg-[#fff] flex border-[1px] border-solid border-[#B3B4F7] rounded-[12px] text-[#585A66] text-[14px] font-[400] mb-3 drop-shadow">
                        <span><img src={yearthree} className="pt-[10px]" /></span>
                        <span className=" text-[#585A66] text-[20px] font-[700]">Year 12-13</span>
                    </div>
                    <div className="items-center bg-[#fff] flex border-[1px] border-solid border-[#C4D7FF] rounded-[12px] text-[#585A66] text-[14px] font-[400] mb-3 drop-shadow">
                        <span><img src={bachelors} className="pt-[10px]" /></span>
                    </div>
                    <div className="items-center bg-[#fff] flex border-[1px] border-solid border-[#E48FFF] rounded-[12px] text-[#585A66] text-[14px] font-[400] mb-3 drop-shadow">
                        <span><img src={masters} className="pt-[10px]" /></span>
                        <span className=" text-[#585A66] text-[20px] font-[700]">masters</span>
                    </div>
                    <Link to={'/agenda'} className="rounded-[12px] text-[#2FD1C5] text-[18px] font-[700] text-right mt-4">Skip</Link>

                </>
            )}

        </div>
    );
}

export default OnBording;