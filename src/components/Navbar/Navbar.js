/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.css";

import {Link, NavLink, useNavigate} from "react-router-dom";
import {clearCurrentUser} from "../../redux/store/actions/users";
import {useDispatch, useSelector} from "react-redux";

const Navbar = () => {
    const currentUser = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
      dispatch(clearCurrentUser());
      navigate("/login");
    };

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
            <NavLink to="/signin" className="nav-link">
              Sign In
            </NavLink>
          </li>
        </div>
        {/*LOGOUT*/}
        {currentUser && (
            <div className="navbar-nav ms-auto">
                {/* <li className="nav-item">
            <NavLink to="/profile">{currentUser.name}</NavLink>
          </li> */}
                <li className="nav-item">
                    <Link to="/logout" className="nav-link" onClick={() => logout()}>
                        Logout
                    </Link>
                </li>
            </div>
        )}
    </nav>
  );
};

export default Navbar;
