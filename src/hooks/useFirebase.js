import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializauthentication from "../Pages/Login/Firebase/firebase.init";

initializauthentication();

const useFirebase= () =>{
        const [users, setUsers] = useState({});
        const [isLogin, setIsLogin] = useState(true);
        const [errors, setErrors] = useState({});
        const auth = getAuth();
        const signInUsingGoogle = () =>{
                setIsLogin(true);
                const googleProvider = new GoogleAuthProvider();
                signInWithPopup(auth, googleProvider)
                .then(result=>{
                        setUsers(result.user);
                        console.log(result.user)
                })
                .finally(()=>{setIsLogin(false)})
                
                    
        }

        // observe user state change 
        useEffect( ()=>{
               const unsubscribe =  onAuthStateChanged(auth, user=>{
                        if(user)
                        {
                                setUsers(user);
                        }
                        else{
                                setUsers({});
                        }

                        setIsLogin(false);
                })
                return () => unsubscribe;
        },[])

        const logOut = () =>{
                signOut(auth)
                        setIsLogin(true)
                .then(
                        setUsers({})
                )
                .finally(()=>{setIsLogin(false)})
        }


        return {
                users,
                signInUsingGoogle,
                errors,
                logOut, 
                isLogin
        }
}

export default useFirebase;