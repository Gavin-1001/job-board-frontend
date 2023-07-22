import React, {useEffect, useState} from "react";
import Sidebar from "../../Dashboard/dashboard.page.employer";
import {useSelector} from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";
import User from "../../../common/models/User";
import UserService from "../../../service/UserService.service";
import userServiceService from "../../../service/UserService.service";

const Settings = () => {

    const [submitted, setSubmitted] = useState(false);
    const currentUser = useSelector((state) => state.user);
    const navigate = useNavigate();
    const [user, setUser] = useState(new User("", "", "", "", "", "", "", "", "", "", "", "", ""))
    const [errorMessage, setErrorMessage] = useState("");




    const handleFormSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true)
        if (!currentUser.id) {
            return <Navigate to={{ pathname: "/login" }} />;
        }
        if (
            !user.firstName ||
            !user.lastName ||
            !user.emailAddress ||
            !user.dateOfBirth ||
            !user.phoneNumber ||
            !user.userGender ||
            !user.streetAddress ||
            !user.homeCity ||
            !user.homeAreaCode ||
            !user.homeCountry ||
            !user.collegeDegree ||
            !user.collegeName ||
            !user.collegeGrade
        ) {
            return;
        }
        UserService
            .postUserDetails(user)
            .then((response) => {
                //...
                setSubmitted(false);
            })
            .catch((err) => {
                setErrorMessage("Unexpected error occurred.");
                console.log(err);
            });
    }


    return (
        <div className="container">
            <Sidebar/>
            <div className="moveIn">
                <div>Settings</div>
                <form onSubmit={handleFormSubmit} className="job-form-container">
                    <div>
                        <label htmlFor="firstName" className="job-form-label">
                            First Name:
                        </label>
                        <input type="text"
                               id="firstName"
                               name="firstName"
                               value={User.firstName}
                               onChange={handleFormSubmit}
                               required
                               className="job-form-input"/>
                    </div>

                    <div>
                        <label htmlFor="lastName" className="job-form-label">
                            Last Name:
                        </label>
                        <input type="text"
                               id="lastName"
                               name="lastName"
                               value={User.lastName}
                               onChange={handleFormSubmit}
                               required
                               className="job-form-input"/>
                    </div>

                    <div>
                        <label htmlFor="emailAddress" className="job-form-label">
                            Email Address:
                        </label>
                        <input type="text"
                               id="emailAddress"
                               name="emailAddress"
                               value={User.emailAddress}
                               onChange={handleFormSubmit}
                               required
                               className="job-form-input"/>
                    </div>

                    <div>
                        <label htmlFor="dateOfBirth" className="job-form-label">
                            Date Of Birth:
                        </label>
                        <input type="date"
                               id="dateOfBirth"
                               name="dateOfBirth"
                               value={User.dateOfBirth}
                               onChange={handleFormSubmit}
                               required
                               className="job-form-input"/>
                    </div>

                    <div>
                        <label htmlFor="phoneNumber" className="job-form-label">
                            Phone Number:
                        </label>
                        <input type="tel"
                               id="phoneNumber"
                               name="phoneNumber"
                               pattern="\d*"
                               maxLength={12}
                               value={User.phoneNumber}
                               onChange={handleFormSubmit}
                               required
                               className="job-form-input"/>
                    </div>

                    <div>
                        <label htmlFor="streetAddress" className="job-form-label">
                            Home Address:
                        </label>
                        <input type="text"
                               id="streetAddress"
                               name="streetAddress"
                               value={User.streetAddress}
                               onChange={handleFormSubmit}
                               required
                               className="job-form-input"/>
                    </div>

                    <div>
                        <label htmlFor="homeCity" className="job-form-label">
                            Home City:
                        </label>
                        <input type="text"
                               id="homeCity"
                               name="homeCity"
                               value={User.homeCity}
                               onChange={handleFormSubmit}
                               required
                               className="job-form-input"/>
                    </div>

                    <div>
                        <label htmlFor="homeAreaCode" className="job-form-label">
                            Home Area Code:
                        </label>
                        <input type="text"
                               id="homeAreaCode"
                               name="homeAreaCode"
                               value={User.homeAreaCode}
                               onChange={handleFormSubmit}
                               required
                               className="job-form-input"/>
                    </div>

                    <div>
                        <label htmlFor="homeCountry" className="job-form-label">
                            Home Country:
                        </label>
                        <input type="text"
                               id="homeCountry"
                               name="homeCountry"
                               value={User.homeCountry}
                               onChange={handleFormSubmit}
                               required
                               className="job-form-input"/>
                    </div>

                    <div>
                        <label htmlFor="collegeDegree" className="job-form-label">
                            College Degree:
                        </label>
                        <input type="text"
                               id="collegeDegree"
                               name="collegeDegree"
                               value={User.collegeDegree}
                               onChange={handleFormSubmit}
                               required
                               className="job-form-input"/>
                    </div>

                    <div>
                        <label htmlFor="collegeName" className="job-form-label">
                            College Name:
                        </label>
                        <input type="text"
                               id="collegeName"
                               name="collegeName"
                               value={User.collegeName}
                               onChange={handleFormSubmit}
                               required
                               className="job-form-input"/>
                    </div>

                    <div>
                        <label htmlFor="collegeGrade" className="job-form-label">
                            College Grade:
                        </label>
                        <input type="text"
                               id="collegeGrade"
                               name="collegeGrade"
                               value={User.collegeGrade}
                               onChange={handleFormSubmit}
                               required
                               className="job-form-input"/>
                    </div>

                    <button type={"submit"} className={"job-form-submit"}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )


}

export default Settings;
