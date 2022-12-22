import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
        const {signInUsingGoogle} = useAuth();
        return (
                <div className='text-center'>
                        <div>
                                <h2>Please Login...</h2>
                                <h4 onClick={signInUsingGoogle} className='btn bg-warning'>Google Login </h4>
                        </div>
                </div>
        );
};

export default Login;