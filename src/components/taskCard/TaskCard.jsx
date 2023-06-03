import profile from '../../assets/feedus.png'

function TaskCard() {
    return (
        <div className="bg-[#FFB017] h-[15vh] pt-4 px-4 rounded-[15px] w-9/12 ml-[16vw] flex justify-between flex-col">
            <p className="font-[700] text-[16px] leading-[120%] font-[AlmariBold]">task title</p>
            <p className="font-[400] text-[10px] leading-[14px]">Saber & Oro</p>
            <div className='flex justify-between mb-1 align-middle'>
                <img className="w-[8vw] h-[4vh] rounded-[50px]" src={profile} />
                <p className="font-[400] text-[10px] leading-[14px] text-right pt-3">9.00 AM - 10.00 AM</p>
            </div>
        </div>
    );
}

export default TaskCard;