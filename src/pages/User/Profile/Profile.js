import './Profile.css';
import EmployerSidebar from "../../../components/Sidebar/EmployerSidebar";
import React, {useState} from "react";


const Profile = () => {

    const [submitted, setSubmitted] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setSubmitted(false)
    }





    return (

        <div>
            <EmployerSidebar/>
            <div className="container">
                <div className="moveIn">
                    <span>{}</span> //need to inject the service to get the profile information, such as first/last name etc etc
                </div>
            </div>
        </div>
    )
};

export default Profile;
