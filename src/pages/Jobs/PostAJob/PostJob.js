import Sidebar from "../../Dashboard/dashboard.page.employer";
import '../../../App.css';
import {useEffect, useRef, useState} from "react";
import './postJob.css';


const PostJob = () => {
    const userRef = useRef();
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    const [formData, setFormData] = useState({
        jobTitle: '',
        jobDescription: '',
        salary: '',
        jobLocation: '',
        startDate: '',
        jobQualification: '',
        jobCategory: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform any necessary actions with the form data here
        console.log(formData);

        setSubmitted(true)
        console.log(formData);


        // Reset the form fields
        setFormData({
            jobTitle: '',
            jobDescription: '',
            salary: '',
            jobLocation: '',
            startDate: '',
            jobQualification: '',
            jobCategory: '',
        });
    };
    return (
        <div className="container">
            <div className="moveIn">
                <Sidebar/>
                <form onSubmit={handleSubmit} className="job-form-container">
                    <div>
                        <label htmlFor="jobTitle" className="job-form-label">
                            Job Title:
                        </label>
                        <input
                            type="text"
                            id="jobTitle"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleChange}
                            ref={userRef}
                            required
                            className="job-form-input"
                        />
                    </div>

                    <div>
                        <label htmlFor="jobDescription" className="job-form-label">
                            Job Description:
                        </label>
                        <textarea
                            id="jobDescription"
                            name="jobDescription"
                            value={formData.jobDescription}
                            onChange={handleChange}
                            required
                            className="job-form-input"
                        />
                    </div>

                    <div>
                        <label htmlFor="salary" className="job-form-label">
                            Salary:
                        </label>
                        <input
                            type="text"
                            id="salary"
                            name="salary"
                            value={formData.salary}
                            onChange={handleChange}
                            required
                            className="job-form-input"
                        />
                    </div>

                    <div>
                        <label htmlFor="jobLocation" className="job-form-label">
                            Job Location:
                        </label>
                        <input
                            type="text"
                            id="jobLocation"
                            name="jobLocation"
                            value={formData.jobLocation}
                            onChange={handleChange}
                            required
                            className="job-form-input"
                        />
                    </div>

                    <div>
                        <label htmlFor="startDate" className="job-form-label">
                            Start Date:
                        </label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleChange}
                            required
                            className="job-form-input"
                        />
                    </div>

                    <button type="submit" className="job-form-submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PostJob;
