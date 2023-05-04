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
                marginTop: '20px',
                marginLeft:'30px',
            }
        }}
        itemsToScroll={10}
        speed={400}
        easing="linear"
        infinite={false}
    >
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2 text-[#9A9A9A] hover:text-red-50'>
            <p className='font-[700] text-center text-[30px] leading-[120%] mt-5 '>1</p>
            <p className='font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2 text-[#9A9A9A] hover:text-red-50'>
            <p className='font-[700] text-center text-[30px] leading-[120%] mt-5 '>2</p>
            <p className='font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2 text-[#9A9A9A] hover:text-red-50'>
            <p className='font-[700] text-center text-[30px] leading-[120%] mt-5 '>3</p>
            <p className='font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2 text-[#9A9A9A] hover:text-red-50'>
            <p className='font-[700] text-center text-[30px] leading-[120%] mt-5 '>4</p>
            <p className='font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2 text-[#9A9A9A] hover:text-red-50'>
            <p className='font-[700] text-center text-[30px] leading-[120%] mt-5 '>5</p>
            <p className='font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2 text-[#9A9A9A] hover:text-red-50'>
            <p className='font-[700] text-center text-[30px] leading-[120%] mt-5 '>6</p>
            <p className='font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2 text-[#9A9A9A] hover:text-red-50'>
            <p className='font-[700] text-center text-[30px] leading-[120%] mt-5 '>7</p>
            <p className='font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2 text-[#9A9A9A] hover:text-red-50'>
            <p className='font-[700] text-center text-[30px] leading-[120%] mt-5 '>8</p>
            <p className='font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2 text-[#9A9A9A] hover:text-red-50'>
            <p className='font-[700] text-center text-[30px] leading-[120%] mt-5 '>9</p>
            <p className='font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2 text-[#9A9A9A] hover:text-red-50'>
            <p className='font-[700] text-center text-[30px] leading-[120%] mt-5 '>10</p>
            <p className='font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2 text-[#9A9A9A] hover:text-red-50'>
            <p className='font-[700] text-center text-[30px] leading-[120%] mt-5 '>11</p>
            <p className='font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2 text-[#9A9A9A] hover:text-red-50'>
            <p className='font-[700] text-center text-[30px] leading-[120%] mt-5 '>12</p>
            <p className='font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2 text-[#9A9A9A] hover:text-red-50'>
            <p className='font-[700] text-center text-[30px] leading-[120%] mt-5 '>13</p>
            <p className='font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2 text-[#9A9A9A] hover:text-red-50'>
            <p className='font-[700] text-center text-[30px] leading-[120%] mt-5 '>14</p>
            <p className='font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2 text-[#9A9A9A] hover:text-red-50'>
            <p className='font-[700] text-center text-[30px] leading-[120%] mt-5 '>15</p>
            <p className='font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2 text-[#9A9A9A] hover:text-red-50'>
            <p className='font-[700] text-center text-[30px] leading-[120%] mt-5 '>16</p>
            <p className='font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2 text-[#9A9A9A] hover:text-red-50'>
            <p className='font-[700] text-center text-[30px] leading-[120%] mt-5 '>17</p>
            <p className='font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        <div className='w-[64px] h-[105px] bg-white rounded-[12px] hover:bg-[#2FD1C5] mx-2 text-[#9A9A9A] hover:text-red-50'>
            <p className='font-[700] text-center text-[30px] leading-[120%] mt-5 '>18</p>
            <p className='font-[500] text-center text-[18px] leading-[120%]'>sat</p>
        </div>
        
    </ReactSimplyCarousel>);
}

export default Carousel;