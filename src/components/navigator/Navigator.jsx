import { Link } from "react-router-dom";
import { ReactComponent as Agenda } from '../../assets/agendaa.svg';
import { ReactComponent as Tasks } from '../../assets/taskss.svg';
import { ReactComponent as MainButton } from '../../assets/mainbuttonn.svg';
import { ReactComponent as Notification } from '../../assets/notificationn.svg';
import { ReactComponent as Search } from '../../assets/searchh.svg';
// import PropTypes from 'prop-types';
import MainButtonCoponent from './MainButtonCoponent';
import { useState } from 'react';
import './navigator.css';
import Backdrop from '@mui/material/Backdrop';
function Navigator() {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };


    return (
        <div className='bg-[#fff] z-30 fixed bottom-0 left-0 right-0 py-2 flex items-center justify-around border-t-[1px] border-solid border-[#E4EDFF] w-full px-2'>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1,backgroundColor:'transparent',backdropFilter: 'blur(5px)' }}
                open={open}
                onClick={handleOpen}
            >
            <MainButtonCoponent />
            </Backdrop>
            <Link>
                <div className="">
                    <Agenda className='agendaIcon' />
                    <p className='text-[#00394C] text-[10px] leading-[140%] mt-2 text-center'>Agenda</p>
                </div>
            </Link>

            <Link>
                <Tasks />
                <p className='text-[#00394C] text-[10px] leading-[140%] mt-2 text-center'>Tasks</p>
            </Link>
            <Link onClick={handleOpen}>
                <MainButton />
            </Link>
            <Link>
                <Notification className='notif' />
                <p className='text-[#00394C] text-[10px] leading-[140%] mt-2 text-center'>Notification</p>
            </Link>
            <Link>
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