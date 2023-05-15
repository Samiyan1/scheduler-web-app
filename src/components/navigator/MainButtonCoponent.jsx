import './navigator.css';
import { ReactComponent as MainButton } from '../../assets/mainbuttonn.svg';

function MainButtonCoponent() {
    return (
        <div>
            <div className='mudal p-[16px]'>
                <div className='flex justify-around'>
                    <button className="border-[1px] border-solid border-[#C4D7FF] rounded-[12px] w-[60%] py-[21px] bg-white mr-[12px]  flex text-[#585A66] font-[400] text-[16px] leading-[120%]">
                        <span>
                            <img className="mx-3" />
                        </span>
                        Notepad
                    </button>
                    <button className="border-[1px] border-solid border-[#C4D7FF] rounded-[12px] w-[60%] py-[21px] bg-white   flex text-[#585A66] font-[400] text-[16px] leading-[120%]">
                        <span>
                            <img className="mx-3" />
                        </span>
                        Reminder
                    </button>                </div>
                <button className="border-[1px] border-solid border-[#C4D7FF] rounded-[12px] w-[100%] py-[21px] bg-white mt-[12px] flex text-[#585A66] font-[400] text-[16px] leading-[120%]">
                    <span>
                        <img className="mx-3" />
                    </span>
                    Create Task
                </button>
            </div>
            <MainButton className='mx-auto ' />
        </div>
    );
}

export default MainButtonCoponent;