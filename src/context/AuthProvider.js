import React, { Children, createContext, useEffect, useState } from 'react';
import app from '../firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";


export const AuthContext=createContext()
const auth=getAuth(app)
const AuthProvider = ({children}) => {

    const [user,setUser]=useState('')

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //login
    const LoginIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const userOut=()=>{
        return signOut(auth);
    }

    const updateUser=(userInfo)=>{
        return updateProfile(auth.currentUser,userInfo)
    }





   useEffect(()=>{
       const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        console.log("user : ",currentUser)
        setUser(currentUser)
       })

       return ()=>unsubscribe();
   },[])

    const info={
        createUser,LoginIn,user,userOut,
        updateUser,

    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;