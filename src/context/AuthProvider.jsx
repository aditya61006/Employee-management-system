import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { getLocalStorage,setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [userdata, setUserdata] = useState(null);
  const [refresh, setRefresh] = useState(false);

        // 3. Fetch localStorage data only once on mount
  useEffect(() => {
     setLocalStorage();
    const {employeesData,adminData} = getLocalStorage();
    setUserdata({employeesData,adminData});
 
  }, []);
  useEffect(() => {
     setLocalStorage();
    const {employeesData,adminData} = getLocalStorage();
    setUserdata({employeesData,adminData});
 
  }, [refresh]);

    return (
        <div>
            <AuthContext.Provider value={{userdata , setRefresh}} >
            {children}
            </AuthContext.Provider>
        </div>
    );
}

export default AuthProvider;
