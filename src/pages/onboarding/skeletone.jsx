import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function skeletone() {


    return (

        <>
            <Skeleton  width={200} height={20} className='mt-9'></Skeleton>
            <Skeleton width={600} height={20}className='mb-9'></Skeleton>

            <div className="items-center p-3 bg-[#fff] flex border-[1px] border-solid border-[#f7f7f7] rounded-[12px] text-[#585A66] text-[14px] font-[400] mb-3 mt-4 drop-shadow">
                <Skeleton circle={true} width={80} height={80} className='mr-3'></Skeleton>
                <Skeleton width={200} height={20}></Skeleton>
            </div>
            <div className="items-center p-3 bg-[#fff] flex border-[1px] border-solid border-[#f7f7f7] rounded-[12px] text-[#585A66] text-[14px] font-[400] mb-3 mt-4 drop-shadow">
                <Skeleton circle={true} width={80} height={80} className='mr-3'></Skeleton>
                <Skeleton width={200} height={20}></Skeleton>
            </div>
            <div className="items-center p-3 bg-[#fff] flex border-[1px] border-solid border-[#f7f7f7] rounded-[12px] text-[#585A66] text-[14px] font-[400] mb-3 mt-4 drop-shadow">
                <Skeleton circle={true} width={80} height={80} className='mr-3'></Skeleton>
                <Skeleton width={200} height={20}></Skeleton>
            </div>
            <div className="items-center p-3 bg-[#fff] flex border-[1px] border-solid border-[#f7f7f7] rounded-[12px] text-[#585A66] text-[14px] font-[400] mb-3 mt-4 drop-shadow">
                <Skeleton circle={true} width={80} height={80} className='mr-3'></Skeleton>
                <Skeleton width={200} height={20}></Skeleton>
            </div>
        
        </>

    );
}

export default skeletone;