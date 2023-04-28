import PropTypes from 'prop-types';
import menu from '../../assets/menu.svg';
import arrow from '../../assets/arrow.svg';
import { useState } from 'react';
import close from '../../assets/close.svg';

function Navbar({ title, url }) {
    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
    return (
        <div className='flex justify-between px-[26px] py-[50px]'>
            <a href={url} className=''>
                <span><img src={arrow} /></span>
            </a>

            <p className='text-[#00394C] font-[700] text-[16px] leading-[120%]'>{title}</p>

            <a onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}>
                <span><img src={showHamburgerMenu ? close : menu} /></span>
            </a>
        </div>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default Navbar;