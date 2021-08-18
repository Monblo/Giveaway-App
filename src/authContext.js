import React, {useEffect, useState} from 'react';
import {auth} from "./firebase";

export const AuthContext = React.createContext({});

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setCurrentUser(user)
        })
    }, []);

    const currentUserEmail = currentUser ? auth.currentUser.email : '';

    const value = {
        currentUser,
        setCurrentUser,
        currentUserEmail
    };

    return (
        <div>
            <AuthContext.Provider value={{...value}}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

