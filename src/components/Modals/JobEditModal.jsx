import {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import Job from "../../common/models/Job";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import jobService from "../../service/JobService.service";
import {Modal} from "react-bootstrap";

const JobEditModal = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => ({
        //interaction with parent
        showEditModal() {
            setTimeout(() => {
                setShow(true);
            }, 0);
        },
    }));

    const [job, setJob] = useState(new Job("", "", "", "", "", "", "", "", "", ""));
    const currentUser = useSelector((state) => state.user);
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setJob(props.job);
    }, [props.job])

    const editJob = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (!currentUser.id) {
            return <Navigate to={{pathname: "/login"}}/>;
        }
        if (!Job.jobTitle || !Job.jobDescription || !Job.jobSalary || !Job.jobStartDate || !Job.jobLocation || !Job.jobQualifications || !Job.jobCategory || !Job.jobCompanyName) {
            return;
        }
        jobService.editJob(job)
            .then((response) => {
                props.onSaved(response.data);
                setShow(false);
                setSubmitted(false);
            }).catch((err) => {
            setErrorMessage("UNEXPECTED ERROR");
            console.log(err);
        });

    };
    const handleChange = (e) => {
        const {name, value} = e.target;

    };


    return (
        <Modal show={show}>
            <form onSubmit={(e) => editJob(e)}
                  noValidate
                  className={submitted ? "was-validated" : ""}>

                <div className="modal-header">
                    <div className="modal-title">
                        Job Details
                    </div>
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setShow(false)}
                    ></button>
                </div>

                <div className="modal-body">
                    {errorMessage && (
                        <div className="alert alert-danger">
                            {errorMessage}
                        </div>
                    )}
                    <div className="form-group">
                        <label htmlFor="jobTitle">
                            Job Title
                        </label>
                        <input type="text"
                               name="jobTitle"
                               placeholder={"Job Title"}
                               className={"form-control"}
                               value={Job.jobTitle}
                               onChange={(e) => handleChange(e)}
                               required/>
                    </div>
                    <div className={"invalid-feedback"}>Job Title is required</div>

                    <div className="form-group">
                        <label htmlFor="jobDescription">
                            Job Description
                        </label>
                        <input type="text"
                               name="jobDescription"
                               placeholder={"Job Description"}
                               className={"form-control"}
                               value={Job.jobDescription}
                               onChange={(e) => handleChange(e)}
                               required/>
                    </div>
                    <div className="invalid-feedback">Job Description is required</div>

                    <div className="form-group">
                        <label htmlFor="jobSalary">
                            Job Salary
                        </label>
                        <input type="text"
                               name="jobSalary"
                               placeholder={"Job Salary"}
                               className={"form-control"}
                               value={Job.jobSalary}
                               onChange={(e) => handleChange(e)}
                               required/>
                    </div>
                    <div className="invalid-feedback">Job Salary is required</div>

                    <div className="form-group">
                        <label htmlFor="jobLocation">
                            Job Location
                        </label>
                        <input type="text"
                               name="jobLocation"
                               placeholder={"Job Location"}
                               className={"form-control"}
                               value={Job.jobLocation}
                               onChange={(e) => handleChange(e)}
                               required/>
                    </div>
                    <div className="invalid-feedback">Job Location is required</div>


                    <div className="form-group">
                        <label htmlFor="jobStartDate">
                            Job Start Date
                        </label>
                        <input type="date"
                               name="jobStartDate"
                               placeholder={"Job Start Date"}
                               className={"form-control"}
                               value={Job.jobStartDate}
                               onChange={(e) => handleChange(e)}
                               required/>
                    </div>
                    <div className="invalid-feedback">Job Start Date is required</div>


                    <div className="form-group">
                        <label htmlFor="jobQualification">
                            Job Qualification
                        </label>
                        <input type="text"
                               name="jobQualification"
                               placeholder={"Job Qualification"}
                               className={"form-control"}
                               value={Job.jobQualification}
                               onChange={(e) => handleChange(e)}
                               required/>
                    </div>
                    <div className="invalid-feedback">Job Qualification is required</div>


                    <div className="form-group">
                        <label htmlFor="jobCategory">
                            Job Category
                        </label>
                        <input type="text"
                               name="jobCategory"
                               placeholder={"Job Category"}
                               className={"form-control"}
                               value={Job.jobCategory}
                               onChange={(e) => handleChange(e)}
                               required/>
                    </div>
                    <div className="invalid-feedback">Job Category is required</div>


                    <div className="form-group">
                        <label htmlFor="jobCompanyName">
                            Job Company Name
                        </label>
                        <input type="text"
                               name="jobCategory"
                               placeholder={"Job CompanyName"}
                               className={"form-control"}
                               value={Job.jobCompanyName}
                               onChange={(e) => handleChange(e)}
                               required/>
                    </div>
                    <div className="invalid-feedback">Job Company Name is required</div>

                </div>
                <div className="modal-footer">
                    <button type={"button"}
                            className={"btn btn-secondary"}
                            onClick={() => setShow(false)}
                    >
                        Close
                    </button>
                    <button type="submit"
                            className={"btn btn-primary"}>
                        Save Changes
                    </button>
            </div>
        </form>
</Modal>
)

    /// todo -> the update form is not submitting


});

export {JobEditModal};