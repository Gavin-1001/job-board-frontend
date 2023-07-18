import Sidebar from "../../Dashboard/dashboard.page.employer";
import '../../../App.css';
import {useEffect, useRef, useState} from "react";
import './postJob.css';
import JobService from "../../../service/JobService.service";
import Job from "../../../common/models/Job";
import {Navigate, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";


const PostJob = () => {
    const [submitted, setSubmitted] = useState(false);
    const [job, setJob] = useState(new Job("", "", "", "", "", "", "", ""));
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const currentUser = useSelector((state) => state.user);

    const userRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        //userRef.current.focus();
    }, [])

    const [formData, setFormData] = useState({
        jobTitle: '',
        jobDescription: '',
        job_salary: '',
        jobLocation: '',
        startDate: '',
        jobQualification: '',
        jobCategory: '',
        jobCompanyName: '',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        setSubmitted(true);

        if (!currentUser.id) {
            return <Navigate to={{pathname: "/login"}}/>;
        }
        if (
            !job.jobTitle ||
            !job.jobDescription ||
            !job.jobSalary ||
            !job.jobLocation ||
            !job.jobQualifications ||
            !job.jobStartDate ||
            !job.jobCategory ||
            !job.jobCompanyName
        ) {


            JobService.postJob(formData).then((_) => {
                console.log(formData);
                navigate("/jobListings")
            })
                .catch((err) => {
                    setErrorMessage("Unexpected error occurred.");
                    console.log(err);
                })
            console.log(JSON.stringify(formData) + "has been sent");
        }

        // Reset the form fields
        setFormData({
            jobTitle: '',
            jobDescription: '',
            job_salary: '',
            jobLocation: '',
            startDate: '',
            jobQualification: '',
            jobCategory: '',
            jobCompanyName: '',

        });
    };
    return (
        <div className="container">
            <div className="moveIn">
                <Sidebar/>
                <form onSubmit={handleSubmit} className="job-form-container">
                    <div>
                        <div>
                            <label htmlFor="jobTitle" className="job-form-label">
                                jobTitle:
                            </label>
                            <input
                                type="text"
                                id="jobTitle"
                                name="jobTitle"
                                value={formData.jobTitle}
                                onChange={handleChange}
                                required
                                className="job-form-input"
                            />
                            <div className="invalid-feedback">jobTitle cannot be empty</div>
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

                            ><div className="align-items-start">€</div></textarea>
                        </div>
                        <div className="invalid-feedback">Job Title is required</div>
                    </div>


                    <div>
                        <label htmlFor="jobSalary" className="job-form-label">
                            Salary:
                        </label>
                        <input
                            type="text"
                            id="jobSalary"
                            name="jobSalary"
                            value={formData.jobSalary}
                            onChange={handleChange}
                            required
                            className="job-form-input"
                        />
                        <div className="invalid-feedback">Salary cannot be empty</div>
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
                        <div className="invalid-feedback">Location cannot be empty</div>
                    </div>

                    <div>
                        <label htmlFor="jobCompanyName" className="job-form-label">
                            Job Company Name:
                        </label>
                        <input
                            type="text"
                            id="jobCompanyName"
                            name="jobCompanyName"
                            value={formData.jobCompanyName}
                            onChange={handleChange}
                            required
                            className="job-form-input"
                        />
                        <div className="invalid-feedback">Company Name cannot be empty</div>
                    </div>


                    <div>
                        <label htmlFor="jobStartDate" className="job-form-label">
                            Start Date:
                        </label>
                        <input
                            type="date"
                            id="jobStartDate"
                            name="jobStartDate"
                            value={formData.jobStartDate}
                            onChange={handleChange}
                            required
                            className="job-form-input"
                        />
                        <div className={"invalid-feedback"}>Start date must be provided</div>
                    </div>

                    <div>
                        <label htmlFor="jobQualifications" className="job-form-label">
                            Job Qualification:
                        </label>
                        <select
                            id="jobQualifications"
                            name="jobQualifications"
                            value={formData.jobQualifications}
                            onChange={handleChange}
                            required
                            className="job-form-select"
                        >
                            <option value="">Select a Qualification</option>
                            <option value="None">None</option>
                            <option value="Leaving Certificate">Leaving Certificate</option>
                            <option value="Diploma">Higher Diploma</option>
                            <option value="Bachelors">Bachelors Degree</option>
                            <option value="Masters">Masters Degree</option>
                            <option value="Experience">Experience</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="jobCategory" className="job-form-label">
                            Job Category:
                        </label>
                        <select
                            id="jobCategory"
                            name="jobCategory"
                            value={formData.jobCategory}
                            onChange={handleChange}
                            required
                            className="job-form-select"
                        >
                            <option value="">Select a category</option>
                            <option value="IT&TComm">Information Technology and Telecommunications</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Nat/Soc Science">Natural and Social Science</option>
                            <option value="Education">Teaching and Educational</option>
                            <option value="Nursing">Nursing and Midwifery</option>
                            <option value="Sales/Market">Sales, Marketing</option>
                            <option value="Media">Artistic, Literary and Media</option>
                            <option value="Bus/Admin">Business, Research and Administrative</option>
                        </select>
                    </div>

                    <button type="submit" className="job-form-submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )

};

export default PostJob;
