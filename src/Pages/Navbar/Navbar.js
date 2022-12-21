import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
        return (
                <nav class="navbar navbar-collapse  navbar-dark bg-dark navbar-expand-lg sticky-top">
                        <div class="container-fluid">
                                <a class="navbar-brand" href="#">Geniyas Car Mechanis</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                                <li class="nav-item">
                                                        <Link class="nav-link" aria-current="page" to={"/home"}>Home</Link>
                                                </li>
                                                <li class="nav-item">
                                                        <Link class="nav-link" to={"/service"}>Service</Link>
                                                </li>
                                                <li class="nav-item">
                                                        <Link class="nav-link" to={'/expert'}>Expert</Link>
                                                </li>
                                                <li class="nav-item">
                                                        <Link class="nav-link" to={'/login'}>Login</Link>
                                                </li>
                                        </ul>
                                        <form class="d-flex" role="search">
                                                <p className='text-primary'>Sign in: </p>
                                        </form>
                                </div>
                        </div>
                </nav>
        );
};

export default Navbar;