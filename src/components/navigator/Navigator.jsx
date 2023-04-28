import tasks from '../../assets/tasks.svg'
import agenda from '../../assets/agenda.svg'
import mainButton from '../../assets/mainButton.svg'
import notification from '../../assets/notification.svg'
import search from '../../assets/search.svg'



function Navigator() {
    return (
        <div className='bg-[#fff] z-30 fixed bottom-0 left-0 right-0 pt-2 pb-4 flex items-center justify-around border-t-[1px] border-solid border-[#E4EDFF] box-border rounded-[8px]'>
            <a href=''> <img src={agenda}/> </a>
            <a href=''> <img src={tasks}/> </a>
            <a href=''> <img src={mainButton}/> </a>
            <a href=''> <img src={notification}/> </a>
            <a href=''> <img src={search}/> </a>
        </div>
    );
}

export default Navigator;