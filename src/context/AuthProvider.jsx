import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { getLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [userdata, setUserdata] = useState(null);

        // 3. Fetch localStorage data only once on mount
  useEffect(() => {
    const storedUser = getLocalStorage();
    setUserdata(storedUser);
    console.log(storedUser);
  }, []);

    return (
        <div>
            <AuthContext.Provider value={ userdata}>
            {children}
            </AuthContext.Provider>
        </div>
    );
}

export default AuthProvider;
