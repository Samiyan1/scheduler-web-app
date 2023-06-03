import PropTypes from 'prop-types';
import menu from '../../assets/menu.svg';
import arrow from '../../assets/arrow.svg';
import { useState } from 'react';
import close from '../../assets/close.svg';
import { Link, useNavigate } from "react-router-dom";

function Navbar({ title }) {

    const [showHamburgerMenu, setShowHamburgerMenu] = useState(true);

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    const goForward = () => {
        navigate('/profile')
    }

    return (
        <div className='flex justify-between px-[26px] py-9'>
            <Link onClick={goBack} className=''>
                <span><img src={arrow} /></span>
            </Link>

            <p className='text-[#00394C] pt-1 font-[700] text-[16px] leading-[120%] font-[AlmariBold]'>{title}</p>

            <Link to={'/profile'} onClick={() => {
                showHamburgerMenu ? goForward : navigate(-1);
                setShowHamburgerMenu(!showHamburgerMenu);
            }

            }

            >
                <span><img src={showHamburgerMenu ? menu : close} /></span>
            </Link>
        </div>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Navbar;