import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";


export const AuthContext= createContext(null);

const AuthProvaider = ({children}) => {
    const [user,setUser]=useState(null);
    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const logOut=()=>{
        return signOut(auth);
    }
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,crrentUser=>{
            console.log('user in the auth state changed',crrentUser);
            setUser(crrentUser);
        });
        return()=>{
            unsubscribe();
        }
    },[])


    const authInfo={
        user,
        createUser,
        signIn,
        logOut,
        provider,
        gitProvider
        


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider >
    );
};

export default AuthProvaider;