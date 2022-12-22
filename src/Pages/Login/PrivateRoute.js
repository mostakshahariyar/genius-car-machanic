import React from 'react';
import { Navigate } from "react-router-dom"
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
       // const auth = getAuth();
       const {users, isLogin} = useAuth();
       console.log(isLogin)
       if(isLogin)
       {
        return <div className="spinner-grow text-primary d-flex justify-content-center m-5" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
       }

        return users.email ? children : <Navigate to="/login" />;
};

export default PrivateRoute;