import {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import Job from "../../common/models/Job";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

import {Modal} from "react-bootstrap";
import jobServiceService from "../../service/JobService.service";

const JobEditModal = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        //interaction with parent
        showEmployeeModal() {
            setTimeout(() => {
                setShow(true);
            }, 0);
        },
    }));

    //todo -> There is an issue when submitting the edit form, the job.id returns as "undefined"

    const [job, setJob] = useState(
        new Job("", "", "", "", "", "", "", "", "")
    );
    ////
    const currentUser = useSelector((state) => state.user);
    //

    const [errorMessage, setErrorMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setJob(props.job);
    }, [props.job]);

    const editJob = (e) => {
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
            !job.jobStartDate ||
            !job.jobQualifications ||
            !job.jobCategory ||
            !job.jobCompanyName
        ) {
            return;
        }
        jobServiceService
            .editJob(job)
            .then((response) => {
                //...
                props.onSaved(response.data);
                setShow(false);
                setSubmitted(false);
            })
            .catch((err) => {
                setErrorMessage("Unexpected error occurred.");
                console.log(err);
            });
    };

    //<input name="x" value="y">
    const handleChange = (e) => {
        const {name, value} = e.target;

        setJob((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };


    return (
        <Modal show={show}>
            <form
                onSubmit={(e) => editJob(e)}
                noValidate
                className={submitted ? "was-validated" : ""}
            >
                <div className="modal-header">
                    <h5 className="modal-title">Employee Details</h5>
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setShow(false)}
                    ></button>
                </div>

                <div className="modal-body">
                    {errorMessage && (
                        <div className="alert alert-danger">{errorMessage}</div>
                    )}

                    <div className="form-group">
                        <label htmlFor="jobTitle">Job Title: </label>
                        <input
                            type="text"
                            name="jobTitle"
                            placeholder="jobTitle"
                            className="form-control"
                            value={Job.jobTitle}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">First Name is required.</div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="jobDescription">Job Description </label>
                        <input
                            type="text"
                            name="jobDescription"
                            placeholder="Job Description"
                            className="form-control"
                            value={Job.jobDescription}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">First Name is required.</div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="jobSalary">Job Salary: </label>
                        <input
                            type="text"
                            name="jobSalary"
                            placeholder="Job Salary"
                            className="form-control"
                            value={Job.jobSalary}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">First Name is required.</div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="jobLocation">First Name: </label>
                        <input
                            type="text"
                            name="jobLocation"
                            placeholder="Job Location"
                            className="form-control"
                            value={Job.jobLocation}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">Job Start Date is required.</div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="jobStartDate">Job Start Date: </label>
                        <input
                            type="date"
                            name="jobStartDate"
                            placeholder="YYYY/MM/DD"
                            className="form-control"
                            value={Job.jobStartDate}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">First Name is required.</div>
                    </div>


                    <div className="form-group">
                        <label htmlFor="jobQualifications">Job Qualification: </label>
                        <input
                            type="text"
                            name="jobQualifications"
                            placeholder="Job Qualification"
                            className="form-control"
                            value={Job.jobQualifications}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">Last Name is required.</div>
                    </div>

                    {/*Email Address*/}
                    <div className="form-group">
                        <label htmlFor="jobCategory">Job Category: </label>
                        <input
                            type="text"
                            name="jobCategory"
                            placeholder="jobCategory"
                            className="form-control"
                            value={Job.jobCategory}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">Job Category is required</div>
                    </div>

                    {/*Date Of Birth*/}
                    <div className="form-group">
                        <label htmlFor="jobCompanyName">Company Name: </label>
                        <input
                            type="text"
                            name="jobCompanyName"
                            placeholder="Job Company Name"
                            className="form-control"
                            value={Job.jobCompanyName}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">Company Name is required</div>
                    </div>


                </div>

                <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        //onClick={() => setShow(false)}
                        onClick={() => console.log(Job.id)}
                    >
                        Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                        Save Changes
                    </button>
                </div>
            </form>
        </Modal>
    );
});

export {JobEditModal};
