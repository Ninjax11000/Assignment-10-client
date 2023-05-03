import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext= createContext(null);


const auth=getAuth(app);
const AuthProviders = ({children}) => {



    const [user,setUser]=useState(null);

    const createUser= (email,password)=>{
            return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
   const setProfile =(name,photo)=>{
       return  updateProfile(auth.currentUser,{
        displayName: name, photoURL: photo
       })
   }

   const logOut =()=>{
    return signOut(auth); 
   }
   useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,loggedUser=>{
        setUser(loggedUser);
    })
    return ()=>{
        unsubscribe();
    }
   },[])

    const authInfo={
        user,
        createUser,
        signIn,
        setProfile,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;