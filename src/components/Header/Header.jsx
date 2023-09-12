import React from 'react';
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center max-w-7xl mx-auto border-b-2'>
            <h2 className='text-4xl'>Knowlwdge Cafee</h2>
            <img src={profile}></img>
        </header>
    );
};

export default Header;