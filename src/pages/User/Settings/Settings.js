import React, {useEffect, useState} from "react";
import Sidebar from "../../Dashboard/dashboard.page.employer";
import {useSelector} from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";
import User from "../../../common/models/User";
import UserService from "../../../service/UserService.service";

const Settings = () => {

    const [submitted, setSubmitted] = useState(false);
    const currentUser = useSelector((state) => state.user);
    const navigate = useNavigate();
    const [user, setUser] = useState(new User("", "", "", "", "", "", "", "", "", "", "", "", ""))
    const [errorMessage, setErrorMessage] = useState("");

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        dateOfBirth: '',
        phoneNumber: '',
        homeCity: '',
        homeCountry: '',
        homeAreaCode: '',
        streetAddress: '',
        collegeDegree: '',
        collegeName: '',
        collegeGrade: '',
    });


    const handleFormSubmit = (e) => {
        e.preventDefault();
        setSubmitted(false)
        if (!currentUser.id) {
            return <Navigate to={{pathname: "/login"}}/>;
        }
        if (
            !user.firstName ||
            !user.lastName ||
            !user.emailAddress ||
            !user.dateOfBirth ||
            !user.phoneNumber ||
            !user.streetAddress ||
            !user.homeCity ||
            !user.homeAreaCode ||
            !user.homeCountry ||
            !user.collegeDegree ||
            !user.collegeName ||
            !user.collegeGrade
        ) {

            UserService.postUserDetails(formData).then((_) => {
                console.log(formData);
                navigate("/");
            }).catch((err) => {
                setErrorMessage("There was an unexpected error");
                console.log(err);
            })
        }
    }


    return (
        <div className="container">
            <Sidebar/>
            <div className="moveIn">
                <form onSubmit={handleFormSubmit} className="job-form-container">
                    <div>
                        <label htmlFor="firstName" className="job-form-label">
                            First Name:
                        </label>
                        <input type="text"
                               id="firstName"
                               name="firstName"
                               value={formData.firstName}
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
                               value={formData.lastName}
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
                               value={formData.emailAddress}
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
                               value={formData.dateOfBirth}
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
                               value={formData.phoneNumber}
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
                               value={formData.streetAddress}
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
                               value={formData.homeCity}
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
                               value={formData.homeAreaCode}
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
                               value={formData.homeCountry}
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
                               value={formData.collegeDegree}
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
                               value={formData.collegeName}
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
                               value={formData.collegeGrade}
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