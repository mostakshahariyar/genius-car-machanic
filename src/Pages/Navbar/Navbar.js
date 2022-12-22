import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
        const {users, logOut} = useAuth();
        return (
                <nav class="navbar navbar-collapse navbar-dark bg-dark navbar-expand-lg sticky-top">
                        <div class="container">
                        <Link class="navbar-brand fw-bold" to="/">Geniyas Car Mechanis</Link>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                                <li class="nav-item">
                                                        <Link class="nav-link fw-bold" aria-current="page" to={"/home"}>Home</Link>
                                                </li>
                                                <li class="nav-item">
                                                        <Link class="nav-link fw-bold" to={"/service"}>Service</Link>
                                                </li>
                                                <li class="nav-item">
                                                        <Link class="nav-link fw-bold" to={'/expert'}>Expert</Link>
                                                </li>
                                                <li class="nav-item">
                                                        {users?.email ? <button class="nav-link fw-bold btn" onClick={logOut}>Logout</button> : <Link className='nav-link fw-bold' to={"/login"}>Login</Link>}
                                                </li>
                                        </ul>
                                        <form class="d-flex" role="search">
                                                <p className='text-primary fw-bold'>Sign in: <u className='text-white fw-bold'>{users?.displayName}</u> </p>
                                        </form>
                                </div>
                        </div>
                </nav>
        );
};

export default Navbar;