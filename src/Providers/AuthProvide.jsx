import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext=createContext(null);

const AuthProvide = ({children}) => {
    const auth=getAuth(app)

    const user={
        name: "Suvrodev"
    }

    const authInfo={
        user,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvide;