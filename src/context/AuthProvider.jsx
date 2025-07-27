import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { getLocalStorage,setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [userdata, setUserdata] = useState(null);


        // 3. Fetch localStorage data only once on mount
  useEffect(() => {
     setLocalStorage();
    const {employeesData,adminData} = getLocalStorage();
    setUserdata({employeesData,adminData});
 
  }, []);

    return (
        <div>
            <AuthContext.Provider value={userdata}>
            {children}
            </AuthContext.Provider>
        </div>
    );
}

export default AuthProvider;
