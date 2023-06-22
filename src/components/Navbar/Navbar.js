/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Navbar.css'

import {NavLink} from "react-router-dom";

 const Navbar = ({ links }) => {
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
        </nav>
    );
};


export default Navbar;