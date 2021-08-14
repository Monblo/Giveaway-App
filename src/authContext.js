import React, {useEffect, useState} from 'react';
import {auth} from "./firebase";

export const AuthContext = React.createContext({});

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(setCurrentUser)
    }, []);

    const value = {
        currentUser,
    };

    return (
        <div>
            <AuthContext.Provider value={{value}}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

