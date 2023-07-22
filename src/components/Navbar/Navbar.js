/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Navbar.css'

import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearCurrentUser} from "../../redux/store/actions/users";

const Navbar = ({links}) => {

    const currentUser = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(clearCurrentUser());
        navigate("/login");
    };

    const options = [
        {label: 'Home', link: '/'},
        {label: 'About', link: '/about'},
        {label: 'Contact', link: '/contact'},
        // Add more options as needed
    ];


    return (
            <nav className="navbar">
                <ul className="list">
                    {links.map((link, index) => (
                        <li key={index} className="listItem">
                            <NavLink to={link.url} className="link">
                                {link.text}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/*<li className="nav-item">*/}
                {/*    <Link to="/logout" className="nav-link" onClick={() => logout()}>*/}
                {/*        Logout*/}
                {/*    </Link>*/}
                {/*</li>*/}

                {currentUser &&
                <div className="dropdown">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                       data-bs-toggle="dropdown" aria-expanded="false">
                        {/*  {currentUser.username} todo->This causes an error when you logout, {currentUser is NULL} */}
                    </a>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><NavLink to="/profile" className="dropdown-item">Profile</NavLink></li>
                        <li><NavLink to="/settings" className="dropdown-item">Settings</NavLink></li>
                        <li><NavLink to="/logout" className="dropdown-item" onClick={() => logout()}>Logout</NavLink></li>
                    </ul>
                </div>
            }

            </nav>
    );
};


export default Navbar;
