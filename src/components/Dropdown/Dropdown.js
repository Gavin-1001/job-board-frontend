import React from "react";
import './Dropdown.css';
import {Link} from "react-router-dom";

const Dropdown = ({options}) => {
    return (
        <div className="dropdown">
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Dropdown
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {options.map((option, index) => (
                    <li key={index}>
                        <Link className="dropdown-item" to={option.link}>
                            {option.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );

};
export default Dropdown;