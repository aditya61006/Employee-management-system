import React from 'react';

const Header = () => {
    return (
        <div>
            <div className=' flex justify-between'>
                <h1 className='text-2xl font-semibold'>Hello <br /><span className='text-3xl'>Aditya 👋</span></h1>
                 <button className=' h-9 m-5 px-6  rounded-md bg-zinc-700'>Logout</button>
            </div>
        </div>
    );
}

export default Header;
