import React from "react";
import './EmployerSidebar.css'
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearCurrentUser} from "../../redux/store/actions/users";


const EmployerSidebar = () => {


    const currentUser = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(clearCurrentUser());
        navigate("/login");
    };

    return (
        <div className="sidebar">
            <ul>
                <li><NavLink to="/createJob">Create Job</NavLink></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>


            </ul>

            {/*LOGOUT*/}
            {currentUser && (
                <div className="navbar-nav">
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
        </div>
    );
};

//export default Sidebar;
export default EmployerSidebar;