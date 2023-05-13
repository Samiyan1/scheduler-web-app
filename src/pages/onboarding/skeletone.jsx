import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function skeletone() {
    return (

        <div className="items-center bg-[#fff] flex border-[1px] border-solid border-[#FDD563] rounded-[12px] text-[#585A66] text-[14px] font-[400] mb-3 mt-4 drop-shadow">
            <Skeleton circle={true} width={80} height={80}></Skeleton>
            <Skeleton width={200} height={20}></Skeleton>
        </div>

    );
}

export default skeletone;