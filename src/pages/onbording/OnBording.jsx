import { Link } from "react-router-dom";
import yearone from '../../assets/yearone.svg';
import yeartwo from '../../assets/yeartwo.svg';
import yearthree from '../../assets/yearthree.svg';
import bachelors from '../../assets/bachelors.svg';
import masters from '../../assets/masters.svg';


function OnBording() {
    return (
        <>
            <div className='w-10/12 flex flex-col justify-around mx-auto'>
                <div className="text-[#00394C] text-[30px] font-[700] mt-5">Education level</div>
                <div className=" text-[#585A66] text-[14px] font-[400] mb-1">Create a unique emotional story that describes better than words</div>
               
                <div className="items-center bg-[#fff] flex border-[1px] border-solid border-[#FDD563] rounded-[12px] text-[#585A66] text-[14px] font-[400] mb-1">
                    <span><img src={yearone} className="pt-[10px]" /></span>
                    <span className=" text-[#585A66] text-[20px] font-[700]">Year 7-9</span>
                </div>
                <div className="items-center bg-[#fff] flex border-[1px] border-solid border-[#8BE38B] rounded-[12px] text-[#585A66] text-[14px] font-[400] mb-1">
                    <span><img src={yeartwo} className="pt-[10px]" /></span>
                    <span className=" text-[#585A66] text-[20px] font-[700]">Year 10-11</span>
                </div>
                <div className="items-center bg-[#fff] flex border-[1px] border-solid border-[#B3B4F7] rounded-[12px] text-[#585A66] text-[14px] font-[400] mb-1">
                    <span><img src={yearthree} className="pt-[10px]" /></span>
                    <span className=" text-[#585A66] text-[20px] font-[700]">Year 12-13</span>
                </div>
                <div className="items-center bg-[#fff] flex border-[1px] border-solid border-[#C4D7FF] rounded-[12px] text-[#585A66] text-[14px] font-[400] mb-1">
                    <span><img src={bachelors} className="pt-[10px]" /></span>
                </div>
                <div className="items-center bg-[#fff] flex border-[1px] border-solid border-[#E48FFF] rounded-[12px] text-[#585A66] text-[14px] font-[400] mb-1">
                    <span><img src={masters} className="pt-[10px]" /></span>
                    <span className=" text-[#585A66] text-[20px] font-[700]">masters</span>
                </div>
                <Link to={'/agenda'} className="rounded-[12px] text-[#2FD1C5] text-[18px] font-[700] text-right">skip</Link>

            </div>
        </>
    );
}

export default OnBording;