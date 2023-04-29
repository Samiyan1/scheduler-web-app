import tasks from '../../assets/tasks.svg'
import agenda from '../../assets/agenda.svg'
import mainButton from '../../assets/mainButton.svg'
import notification from '../../assets/notification.svg'
import search from '../../assets/search.svg'
import { Link } from "react-router-dom";



function Navigator() {
    return (
        <div className='bg-[#fff] z-30 fixed bottom-0 left-0 right-0 pt-2 pb-4 flex items-center justify-around border-t-[1px] border-solid border-[#E4EDFF] box-border rounded-[8px]'>
            <Link href=''> <img src={agenda}/> </Link>
            <Link to='/create-task'> <img src={tasks}/> </Link>
            <Link href=''> <img src={mainButton}/> </Link>
            <Link href=''> <img src={notification}/> </Link>
            <Link href=''> <img src={search}/> </Link>
        </div>
    );
}

export default Navigator;