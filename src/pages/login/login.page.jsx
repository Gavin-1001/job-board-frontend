import {Link, useNavigate} from "react-router-dom";
import {setCurrentUser} from "../../redux/store/actions/users";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import User from "../../common/models/User";
import AuthService from '../../service/AuthService.service';

const Login = () => {
    const [user, setUser] = useState(new User("", "", ""));
    const [loading, setLoading] = useState(false); //sets a loading state to let the user know the page is loading
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const currentUser = useSelector((state) => state.user);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentUser?.id) {
            navigate("/dashboard");
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((previousState) => {
            return {
                ...previousState,
                [name]: value,
            };
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        //stops the login creds being displayed in url

        setSubmitted(true);
        if (!user.username || !user.password) {
            return; //checks if username and password fields are not empty
        }
        setLoading(true);

        //Authentication next
        AuthService.login(user)
            .then((response) => {
                //set user in session
                dispatch(setCurrentUser(response.data));
                if(currentUser.role === 'Employer') {
                    navigate("/EmployerDashboard");
                }
            })
            .catch((error) => {
                console.log(error);
                setErrorMessage("USERNAME OR PASSWORD IS NOT VALID!!!");
                setLoading(false);
            });
    };

    return (
        <div className="container mt-5">
            <div className="card ms-auto me-auto p-3 shadow-lg custom-card">
                <h3>Sign in</h3> {/*NoT really happy with this but style later if you get a chance*/}
                {errorMessage && (
                    <div className="alert alert-danger">{errorMessage}</div>
                )}
                <form
                    onSubmit={(e) => handleLogin(e)}
                    className={submitted ? "was-validated" : ""}
                    noValidate // does not validate the form
                >
                    <div className="form-group">
                        {/*USERNAME*/}
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            placeholder="Enter your username here"
                            value={user.username}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        {/*DISPLAYS ANY ERROR MESSAGE RELATING TO FIELD*/}
                        <div className="invalid-feedback">USERNAME IS REQUIRED!!</div>
                    </div>

                    <div className="form-group">
                        {/*PASSWORD*/}
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter your password here"
                            value={user.password}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        {/*DISPLAYS ANY ERROR MESSAGE RELATING TO FIELD*/}
                        <div className="invalid-feedback">PASSWORD IS REQUIRED!!</div>
                    </div>

                    {/*Add the button*/}
                    <button className="btn btn-primary w-100 mt-3">Sign in</button>
                </form>
                <Link
                    to="/register"
                    className="btn btn-link"
                    style={{ color: "darkgray" }}
                >
                    Create an Account??
                </Link>
            </div>
        </div>
    );
};
//} think this goes here. EDIT: nvm

export default Login;