// import React from 'react';

// const Header = ({setUser, data}) => {

//     const LogoutHandler = () => {
//   localStorage.removeItem("logInUser");
//   localStorage.removeItem("employeedta");  // ✅ clear it
//   setUser(null);
 
// };



//     return (
//         <div>
//             <div className=' flex justify-between'>
//                 <h1 className='text-2xl font-semibold'>Hello <br /><span className='text-3xl'>{data?.name ? data.name : "ADMIN"}👋</span></h1>
//                  <button onClick={LogoutHandler} className=' h-9 m-5 px-6  rounded-md bg-zinc-700'>Logout</button>
//             </div>
//         </div>
//     );
// }

// export default Header;







const Header = ({setUser, data}) => {

    const LogoutHandler = () => {
        localStorage.removeItem("logInUser");
        localStorage.removeItem("employeedta");
        setUser(null);
    };

    return (
        <div className="w-full px-4 py-2">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                <h1 className="text-xl sm:text-2xl font-semibold">
                    Hello <br className="block sm:hidden" />
                    <span className="text-2xl sm:text-3xl">
                        {data?.name ? data.name : "ADMIN"}👋
                    </span>
                </h1>
                <button
                    onClick={LogoutHandler}
                    className="h-9 mt-2 sm:mt-0 px-4 sm:px-6 rounded-md bg-zinc-700 text-xs sm:text-base"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Header;
