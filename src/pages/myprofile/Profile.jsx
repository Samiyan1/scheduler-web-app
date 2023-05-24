import Navbar from "../../components/navbar/Navbar";
import Navigator from "../../components/navigator/Navigator";
import image from '../../assets/pro.jpg';
import phone from '../../assets/phone.svg'
import edit from '../../assets/edit.svg';
import email from '../../assets/email.svg';
import location from '../../assets/location.svg';
import time from '../../assets/time.svg';
import buttonEditProfile from '../../assets/buttonEditProfile.svg';



function MyProfile() {
    return (
        <div className="flex flex-col sm:min-h-[796px] md:min-h-[1050px]">
            <Navbar title="My Profile" url="sadsa" />
            <div className="mt-5">
                <img className="w-3/12 mx-auto rounded-[12px] border-[2px] border-solid border-[#2FD1C5] box-border]" src={image} />
                <span className="flex justify-center relative">
                    <a className="absolute md:bottom-7 md:right-1000 sm:bottom-3 sm:left-[54%]">
                        <img className="md:w-11 sm:w-6 " src={buttonEditProfile} />
                    </a>
                </span>
            </div>
            <div className=" mx-auto text-center my-[20px] w-4/12 lg:w-1/12">
                <p className="text-[#2F394B] font-[700] text-[20px]">Denko Neva</p>
                <a className="text-[#2FD1C5] font-[400] text-[14px] leading-[140%]">Log Out</a>
            </div>
            <div className="bg-[#fff] w-12/12 border-t-[1px] border-solid border-[#E4EDFF] box-border">
                <div className="mx-auto">
                    <div className="flex w-10/12 mx-auto border-b-[1px] border-solid border-[#C4D7FF] box-border mt-2">
                        <img src={phone} />
                        <div className="flex-col ml-[16px] my-[12px]">
                            <p className="text-[#585A66]">Phone Number</p>
                            <p className="text-[#585A66]">+971 52 657-0686</p>
                        </div>
                    </div>
                    <div className="flex w-10/12 mx-auto border-b-[1px] border-solid border-[#C4D7FF] box-border">
                        <img src={email} />
                        <div className="flex-col ml-[16px] my-[12px]">
                            <p className="text-[#585A66]">Email</p>
                            <p className="text-[#585A66]">che.nevy@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex w-10/12 mx-auto border-b-[1px] border-solid border-[#C4D7FF] box-border">
                        <img src={location} />
                        <div className="flex-col ml-[16px] my-[12px]">
                            <p className="text-[#585A66]">Location</p>
                            <p className="text-[#585A66]">UAE. Dubai</p>
                        </div>
                    </div>
                    <div className="flex w-10/12 mx-auto">
                        <img src={time} />
                        <div className="flex-col ml-[16px] my-[12px]">
                            <p className="text-[#585A66]">Time Zone</p>
                            <p className="text-[#585A66]">Dubai (GMT+4)</p>
                        </div>
                    </div>
                    <button className="mt-8 mx-auto bg-[#2FD1C5] flex rounded-[12px] px-[45px] py-[15px]">
                        <span className="text-[#fff] font-[700] text-[18px] leading-[120%]">Edit</span>
                        <span className="ml-3"><img src={edit} /></span>
                    </button>
                </div>
            </div>


            <Navigator />
        </div>
    );
}

export default MyProfile;