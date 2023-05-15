import './navigator.css';
import { ReactComponent as MainButton } from '../../assets/mainbuttonn.svg';
import notepad from '../../assets/notepad.svg';
import reminder from '../../assets/reminder.svg';
import plus from '../../assets/plus.svg';
import { Link } from "react-router-dom";

function MainButtonCoponent() {
    return (
        <div className='w-full fixed bottom-0'>
            <div className='mudal p-[16px]'>
                <div className='flex justify-around'>
                    <button className="border-[1px] border-solid border-[#C4D7FF] rounded-[12px] w-[60%] py-[21px] bg-white mr-[12px] flex items-center text-[#585A66] font-[400] text-[16px] leading-[120%]">
                        <span>
                            <img className="mx-3" src={notepad}/>
                        </span>
                        Notepad
                    </button>
                    <button className="border-[1px] border-solid border-[#C4D7FF] rounded-[12px] w-[60%] py-[21px] bg-white flex items-center text-[#585A66] font-[400] text-[16px] leading-[120%]">
                        <span>
                            <img className="mx-3" src={reminder}/>
                        </span>
                        Reminder
                    </button>
                </div>
                <Link to='/create-task' className="border-[1px] flex items-center justify-center border-solid border-[#C4D7FF] rounded-[12px] w-[100%] py-[21px] bg-white mt-[12px] text-[#585A66] font-[400] text-[16px] leading-[120%]">
                    <span>
                        <img className="mx-3" src={plus}/>
                    </span>
                    Create Task
                </Link>
            </div>
            <div className='px-[8px] pb-3'>
                <MainButton className='mx-auto blueColor'/>
            </div>
        </div>
    );
}

export default MainButtonCoponent;