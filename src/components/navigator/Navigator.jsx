import tasks from '../../assets/tasks.svg';
import agenda from '../../assets/agenda.svg';
import mainButton from '../../assets/mainButton.svg';
import notification from '../../assets/notification.svg';
import search from '../../assets/search.svg';
import { Link } from "react-router-dom";
import { ReactComponent as Agenda } from '../../assets/Agenda.svg';
import { ReactComponent as Tasks } from '../../assets/Tasks.svg';
import { ReactComponent as MainButton } from '../../assets/MainButton.svg';
import { ReactComponent as Notification } from '../../assets/Notification.svg';
import { ReactComponent as Search } from '../../assets/Search.svg';
import './navigator.css';



function Navigator() {
    return (
        <div className='bg-[#fff] z-30 fixed bottom-0 left-0 right-0 pt-2 pb-4 flex items-center justify-around border-t-[1px] border-solid border-[#E4EDFF] box-border rounded-[8px]'>
            <Link href=''>
                <Agenda />
                <p className='text-[#000]'>Agenda</p>
            </Link>
            <Link to='/create-task'>
                <Tasks />
                <p>Tasks</p>
            </Link>
            <Link href=''>
                <MainButton />
            </Link>
            <Link href=''>
                <Notification />
                <p>Notification</p>
            </Link>
            <Link href=''>
                <Search />
                <p>Search</p>
            </Link>
        </div>
    );
}

export default Navigator;