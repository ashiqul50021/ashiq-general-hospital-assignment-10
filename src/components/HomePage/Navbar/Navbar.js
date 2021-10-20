import React from 'react';
import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSistrix } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css'
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <nav class="shadow-sm p-3 bg-body rounded navbar navbar-expand-lg navbar-light bg-light p-3">
                <div class="container">
                    <img src={logo} alt="" className="logo-img" />
                    <div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent ">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item ">
                                    <Link class="nav-link menu-color" aria-current="page" to="/home">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link menu-color" to="/doctors">Doctors</Link>
                                </li>

                                <li class="nav-item">
                                    <Link class="nav-link menu-color" to="/ourservice">Our Service</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link menu-color" to="/contactus">Contact us</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link menu-color" to="/"><FontAwesomeIcon icon={faSistrix} /></Link>
                                </li>
                                {
                                    !user.email || user.name ?


                                        <Link class="btn btn-dark mx-2" to="/register" role="button"> Register/Login </Link>







                                        :
                                        <div className="d-flex">
                                            <span class="nav-link menu-color">Hey, {user.displayName}</span>
                                            <button className="btn btn-dark" onClick={logout}>log out</button>
                                        </div>
                                }


                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;