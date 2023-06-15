/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();

  //   const logout = () => {
  //     dispatch(clearCurrentUser());
  //     navigate("/login");
  //   };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="#" className="nav-link">
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink to="/register" className="nav-link">
              Sign up
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login" className="nav-link">
              Sign In
            </NavLink>
          </li>
        </div>
    </nav>
  );
};

export default Navbar;
