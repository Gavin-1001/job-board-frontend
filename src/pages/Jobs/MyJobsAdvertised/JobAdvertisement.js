import Sidebar from "../../Dashboard/dashboard.page.employer";
import Job from "../../../common/models/Job";
import {useEffect, useRef, useState} from "react";
import './JobAdvertisements.css'
import jobService from "../../../service/JobService.service";
import JobDeleteModal from './../../../components/Modals/JobDeleteModal';
import {JobEditModal} from "../../../components/Modals/JobEditModal";
import Button from "../../../components/Button/Button";

/*
*
* todo -> THIS IS WHERE THE EMPLOYER WOULD ADVERTISE THEY'RE JOBS
*
* */

const JobAdvertisement = () => {

    const [jobSelect, setJobSelect] = useState(new Job());
    const [jobList, setJobList] = useState([]);
    const [, setErrorMessage] = useState([]);

    const deleteJobComponent = useRef();
    const editJobComponent = useRef()


    useEffect(() => {
        jobService.getAllJobs().then((response) => {
            setJobList(response.data);
        });
    }, [])


    const deleteJob = (job) => {
        jobService.deleteJob(jobSelect).then((_) => {
            setJobList(jobList.filter((x) => x.id !== jobSelect.id));
        }).catch((err) => {
            setErrorMessage("Unexpected Error");
            console.log(err);
        });
    };

    const deleteJobRequest = (job) => {
        setJobSelect(job);
        console.log(job);
        deleteJobComponent.current?.showDeleteModal();
    };

    const updateJobRequest = (item) => {
        setJobSelect(item);
//        setJobSelect(Object.assign({}, item));
        //console.log("is being edited: "+job);
        editJobComponent.current?.showEmployeeModal();
    }

    const watchSaveJob = (job) => {
        let itemIndex = jobList.findIndex((item) => item.id === job.id);
        if (itemIndex !== -1) {
            const newList = jobList.map((item) => {
                if (item.id === job.id) {
                    return job;
                }
                return item;
            });
            setJobList(newList);
        } else {
            const newList = jobList.concat(job);
            setJobList(newList);
        }
    };

    return (

        <div className="container">
            <Sidebar/>
            <div className="moveIn">
                <h3>Job Advertisement</h3>
                <div className="container">
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-9">
                                    <h4>My Jobs</h4>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            {jobList.length === 0 ? (
                                <p>No jobs available.</p>
                            ) : (
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Job Title</th>
                                        <th scope="col">Job Description</th>
                                        <th scope="col">Job Salary</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    {jobList.map((item, index) => (
                                        <tr key={item.id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.jobTitle}</td>
                                            <td>{item.jobDescription}</td>
                                            <td>{item.jobSalary}</td>
                                            <td className="button-container">
                                                <Button
                                                    className="btn btn-primary me-1"
                                                    onClick={() => updateJobRequest(item)}
                                                    //onClick={() => console.log(item.id)}
                                                >
                                                    EDIT
                                                </Button>
                                                <Button
                                                    className="btn btn-danger"
                                                    onClick={() => deleteJobRequest(item)}
                                                >
                                                    DELETE
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            )}
                        </div>


                    </div>
                </div>
                <JobDeleteModal
                    ref={deleteJobComponent}
                    onConfirmed={() => deleteJob()}
                />
                <JobEditModal
                    ref={editJobComponent}
                    job={jobSelect}
                    onSaved={(e) => watchSaveJob(e)}
                />
            </div>
        </div>
    ) //end of return
}

export default JobAdvertisement;




