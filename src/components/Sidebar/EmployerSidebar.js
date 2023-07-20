import React from "react";
import './EmployerSidebar.css'
import {Link, NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import logout from "../../pages/Logout";



const EmployerSidebar = () => {


     const currentUser = useSelector((state) => state.user);
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    //
    // const logout = () => {
    //     dispatch(clearCurrentUser());
    //     navigate("/login");
    // };

    return (
        <div className="sidebar">
            <ul>
                <li><NavLink to="/createJob">Create Job</NavLink></li>
                <li><NavLink to="/jobListings">Job Search</NavLink></li>
                <li><NavLink to="/jobsAdvertisement">My Jobs</NavLink></li>
                <li><a href="#">Contact</a></li>


            </ul>

            {/*LOGOUT*/}
            {currentUser && (
                <div className="navbar-nav">
                    {/* <li className="nav-item">
            <NavLink to="/profile">{currentUser.name}</NavLink>
          </li> */}
                    <li className="nav-item">
                        <Link to="/profile" className="nav-link" onClick={() => console.log("profile")}>
                            Profile
                        </Link>
                    </li>
                </div>
            )}
        </div>
    );
};

//export default Sidebar;
export default EmployerSidebar;