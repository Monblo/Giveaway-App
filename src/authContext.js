import React, {useEffect, useState} from 'react';
import {auth} from "./firebase";

export const AuthContext = React.createContext({});

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setCurrentUser(user)
            setLoggedIn(true)
        })
    }, []);

    const currentUserEmail = currentUser ? auth.currentUser.email : '';

    const value = {
        currentUser,
        setCurrentUser,
        loggedIn,
        setLoggedIn,
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

