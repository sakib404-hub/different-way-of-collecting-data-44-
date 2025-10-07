import React from 'react';
import { NavLink, useNavigate } from 'react-router';

const Header = () => {
    const path = useNavigate();
    const handleButtonClick = () => {
        path('/dataCollectione')
    }
    return (
        <div className='flex items-center justify-between px-10 py-6 bg-gray-700'>
            <NavLink
                className={'text-xl font-semibold cursor-pointer'}
                to={'/'}>
                Home
            </NavLink>

            <button
                className={`btn bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-700 text-black font-semibold shadow-md hover:scale-105 transition-transform duration-200`}
                onClick={handleButtonClick}
            >
                Sign In
            </button>
        </div>
    );
};

export default Header;