import React, { Children, createContext, useEffect, useState } from 'react';
import app from '../firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";


export const AuthContext=createContext()
const auth=getAuth(app)
const AuthProvider = ({children}) => {

    const [user,setUser]=useState('')
    const [loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //login
    const LoginIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const userOut=()=>{
        setLoading(true)
        return signOut(auth);
    }

    const updateUser=(userInfo)=>{
        return updateProfile(auth.currentUser,userInfo)
    }





   useEffect(()=>{
       const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        console.log("user : ",currentUser)
        setUser(currentUser)
        setLoading(false)
        console.log("now ",currentUser)
       })

       return ()=>unsubscribe();
   },[])

    const info={
        createUser,LoginIn,user,userOut,
        updateUser,loading

    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;