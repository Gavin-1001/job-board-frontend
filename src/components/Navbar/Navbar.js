/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Navbar.css'

import {Link, NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearCurrentUser} from "../../redux/store/actions/users";
import Dropdown from "../Dropdown/Dropdown";


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
                <li className="nav-item">
                    <Link to="/logout" className="nav-link" onClick={() => logout()}>
                        Logout
                    </Link>
                </li>

            </nav>
    );
};


export default Navbar;