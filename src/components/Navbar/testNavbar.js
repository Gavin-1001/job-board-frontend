import React from 'react';
import {NavLink} from "react-router-dom";
import './testNavbar.css'


const TestNavbar = ({ links }) => {
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


export default TestNavbar;