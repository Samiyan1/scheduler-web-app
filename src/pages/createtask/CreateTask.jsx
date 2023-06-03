import Navbar from "../../components/navbar/Navbar";
import flag from '../../assets/flag.svg';
import flagsmall from '../../assets/flag-alt.svg';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './createtask.css';

function CreateTask() {

    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 },
        {
            label: 'The Lord of the Rings: The Return of the King',
            year: 2003,
        },];

    return (
        <div>
            <Navbar title="Create a Task" url="sadsa" />
            <div className="flex mt-2">
                <input placeholder="Name" className="drop-shadow textarea-plaece placeholder:text-[#585A66] placeholder:pl-3 w-11/12 mx-auto h-[50px] mt-3 rounded-[8px] bg-white" type="text" />
            </div>
            <div className="flex justify-center mt-3">
                <button className="drop-shadow w-[45%] py-6 bg-white mr-1 rounded-[8px] flex text-[#585A66] font-[400] text-[14px] leading-[140%]">
                    <span><img className="mx-3" src={flag} /></span>
                    Start Time
                </button>
                <button className="drop-shadow w-[45%] py-6 bg-white ml-1 rounded-[8px] flex text-[#585A66] font-[400] text-[14px] leading-[140%]">
                    <span><img className="mx-3" src={flagsmall} /></span>
                    End Time
                </button>
            </div>
            <div className='bg-[#fff] w-12/12 border-t-[1px] border-solid border-[#E4EDFF] h-[535px] mt-4'>
                <FormControl fullWidth>
                    <Autocomplete
                        className="drop-shadow py-3 w-11/12 mx-auto mt-4 border-[1px] border-solid border-[#E4EDFF] rounded-[8px]"
                        options={top100Films}
                        id="clear-on-escape"
                        clearOnEscape
                        renderInput={(params) => (
                            <TextField {...params} variant="standard" />
                        )}
                    />
                    <Autocomplete
                        className="drop-shadow py-3 w-11/12 mx-auto mt-4 border-[1px] border-solid border-[#E4EDFF] rounded-[8px]"
                        options={top100Films}
                        id="clear-on-escape"
                        clearOnEscape
                        renderInput={(params) => (
                            <TextField {...params} variant="standard" />
                        )}
                    />
                    <textarea placeholder="Details" className="drop-shadow textarea-plaece border-[1px] border-solid border-[#E4EDFF] box-border w-11/12 my-4 rounded-[8px] mx-auto min-h-[123px] p-3 text-black placeholder:text-[#CCC] bg-white"></textarea>
                    <div className="flex justify-around py-4 border-[1px] border-solid border-[#C4D7FF] box-border px-3">
                        <label className="container">
                            <input type="radio" className="" name="color" />
                            <span className="checkmark bg-[#FFB017]"></span>
                        </label>
                        <label className="container">
                            <input type="radio" className="" name="color" />
                            <span className="checkmark bg-[#E48FFF]"></span>
                        </label>
                        <label className="container">
                            <input type="radio" className="" name="color" />
                            <span className="checkmark bg-[#FF7A7B]"></span>
                        </label>
                        <label className="container">
                            <input type="radio" className="" name="color" />
                            <span className="checkmark bg-[#57E597]"></span>
                        </label>
                        <label className="container">
                            <input type="radio" className="" name="color" />
                            <span className="checkmark bg-[#26BFBF]"></span>
                        </label>
                        <label className="container">
                            <input type="radio" className="" name="color" />
                            <span className="checkmark bg-[#004E8E]"></span>
                        </label>
                        <label className="container">
                            <input type="radio" className="" name="color" />
                            <span className="checkmark bg-[#00394C]"></span>
                        </label>
                        <label className="container">
                            <input type="radio" className="" name="color" />
                            <span className="checkmark bg-[#115a38]"></span>
                        </label>
                    </div>
                </FormControl>
                <button className="my-7 mx-auto bg-[#2FD1C5] flex rounded-[12px] px-[80px] py-[20px]">
                    <span className="text-[#fff] font-[700] text-[18px] leading-[120%]">create</span>
                </button>
            </div>
        </div>
    );
}

export default CreateTask;