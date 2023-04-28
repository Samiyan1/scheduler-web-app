import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

function Carousel() {

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
    <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={8}
        containerProps={{
            style: {
                backgroundColor: '#F5FBFF',
                marginBottom: '20px',
                marginTop: '20px'
            }
        }}
        itemsToScroll={10}
        speed={400}
        easing="linear"
        infinite={false}
    >
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2'>
            <p className=' text-[#9A9A9A] font-[700] text-center text-[30px] leading-[120%] mt-5 '>1</p>
            <p className=' text-[#9A9A9A] font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2'>
            <p className=' text-[#9A9A9A] font-[700] text-center text-[30px] leading-[120%] mt-5 '>1</p>
            <p className=' text-[#9A9A9A] font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2'>
            <p className=' text-[#9A9A9A] font-[700] text-center text-[30px] leading-[120%] mt-5 '>1</p>
            <p className=' text-[#9A9A9A] font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2'>
            <p className=' text-[#9A9A9A] font-[700] text-center text-[30px] leading-[120%] mt-5 '>1</p>
            <p className=' text-[#9A9A9A] font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2'>
            <p className=' text-[#9A9A9A] font-[700] text-center text-[30px] leading-[120%] mt-5 '>1</p>
            <p className=' text-[#9A9A9A] font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2'>
            <p className=' text-[#9A9A9A] font-[700] text-center text-[30px] leading-[120%] mt-5 '>1</p>
            <p className=' text-[#9A9A9A] font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2'>
            <p className=' text-[#9A9A9A] font-[700] text-center text-[30px] leading-[120%] mt-5 '>1</p>
            <p className=' text-[#9A9A9A] font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2'>
            <p className=' text-[#9A9A9A] font-[700] text-center text-[30px] leading-[120%] mt-5 '>1</p>
            <p className=' text-[#9A9A9A] font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2'>
            <p className=' text-[#9A9A9A] font-[700] text-center text-[30px] leading-[120%] mt-5 '>1</p>
            <p className=' text-[#9A9A9A] font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2'>
            <p className=' text-[#9A9A9A] font-[700] text-center text-[30px] leading-[120%] mt-5 '>1</p>
            <p className=' text-[#9A9A9A] font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2'>
            <p className=' text-[#9A9A9A] font-[700] text-center text-[30px] leading-[120%] mt-5 '>1</p>
            <p className=' text-[#9A9A9A] font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2'>
            <p className=' text-[#9A9A9A] font-[700] text-center text-[30px] leading-[120%] mt-5 '>1</p>
            <p className=' text-[#9A9A9A] font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2'>
            <p className=' text-[#9A9A9A] font-[700] text-center text-[30px] leading-[120%] mt-5 '>1</p>
            <p className=' text-[#9A9A9A] font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2'>
            <p className=' text-[#9A9A9A] font-[700] text-center text-[30px] leading-[120%] mt-5 '>1</p>
            <p className=' text-[#9A9A9A] font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2'>
            <p className=' text-[#9A9A9A] font-[700] text-center text-[30px] leading-[120%] mt-5 '>1</p>
            <p className=' text-[#9A9A9A] font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2'>
            <p className=' text-[#9A9A9A] font-[700] text-center text-[30px] leading-[120%] mt-5 '>1</p>
            <p className=' text-[#9A9A9A] font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2'>
            <p className=' text-[#9A9A9A] font-[700] text-center text-[30px] leading-[120%] mt-5 '>1</p>
            <p className=' text-[#9A9A9A] font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
    </ReactSimplyCarousel>);
}

export default Carousel;