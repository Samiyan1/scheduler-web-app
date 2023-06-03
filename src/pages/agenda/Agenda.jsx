import Navbar from '../../components/navbar/Navbar';
import Navigator from '../../components/navigator/Navigator';
import left from '../../assets/left.svg';
import agendaButton from '../../assets/agendaButton.svg';
import right from '../../assets/right.svg';
import './agenda.css'
import Scheduler from './Scheduler'
import Carousel from './Carousel';

function Agenda() {

    return (
        <>
            <div className='w-full sticky top-0 overflow-x-hidden z-20 bg-[#F5FBFF] border-b-[1px] border-solid border-[#E4EDFF] box-border'>
                <Navbar title={'Agenda'}/>

                <div className='flex justify-around items-center '>
                    <a className='flex justify-around  '>
                        <img src={left} />
                        <p className='text-[#00394C] font-[400] text-[12px] leading-[45px] ml-2'>Mar</p>
                    </a>
                    <div className='flex justify-between items-center '>
                        <p className='text-[#00394C] font-[700] text-[30px] leading-[45px] mr-3 mb-1 font-[AlmariBold]'>April</p>
                        <a><img src={agendaButton} /></a>
                    </div>
                    <a className='flex justify-around items-center '>
                        <p className='text-[#00394C] font-[400] text-[12px] leading-[45px] mr-2'>May</p>
                        <img src={right} />
                    </a>
                </div>
                <Carousel />
            </div>

            <div className='bg-white py-5 h-[1000px]'>
                <p className=' text-black font-[700] text-left pl-4 text-[21px] leading-[120%] font-[AlmariBold]'>Ongoing</p>
                <Scheduler />
            </div>
            <Navigator />
        </>
    );
}

export default Agenda;
