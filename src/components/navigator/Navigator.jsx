import { Link } from "react-router-dom";
import { ReactComponent as Agenda } from '../../assets/Agenda.svg';
import { ReactComponent as Tasks } from '../../assets/Tasks.svg';
import { ReactComponent as MainButton } from '../../assets/MainButton.svg';
import { ReactComponent as Notification } from '../../assets/Notification.svg';
import { ReactComponent as Search } from '../../assets/Search.svg';
// import PropTypes from 'prop-types';

import './navigator.css';

function Navigator() {
    return (
        <div className='bg-[#fff] z-30 fixed bottom-0 left-0 right-0 py-2 flex items-center justify-around border-t-[1px] border-solid border-[#E4EDFF] w-full px-2'>

            <Link href=''>
                <div className="">
                    <Agenda className='agendaIcon' />
                    <p className='text-[#00394C] text-[10px] leading-[140%] mt-2 text-center'>Agenda</p>
                </div>
            </Link>

            <Link to='/create-task'>
                <Tasks />
                <p className='text-[#00394C] text-[10px] leading-[140%] mt-2 text-center'>Tasks</p>
            </Link>
            <Link href=''>
                <MainButton />
            </Link>
            <Link href=''>
                <Notification className='notif'/>
                <p className='text-[#00394C] text-[10px] leading-[140%] mt-2 text-center'>Notification</p>
            </Link>
            <Link href=''>
                <Search />
                <p className='text-[#00394C] text-[10px] leading-[140%] mt-2 text-center'>Search</p>
            </Link>
        </div>
    );

    // const getPages = () => {
    //     sw
    // }
}


export default Navigator;