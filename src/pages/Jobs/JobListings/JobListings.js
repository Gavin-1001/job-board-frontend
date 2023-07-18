import React, {useEffect, useState} from "react";
import './../../../App.css'
import Sidebar from "../../Dashboard/dashboard.page.employer";
import JobService from "../../../service/JobService.service";
import JobCard from "./JobCard";
import './JobListings.css'


const JobListings = () => {

        const [jobListing, setJobListings] = useState([]);
        const [jobs, setJobs] = useState([]);

        useEffect(() => {
            JobService.getAllJobs().then((response) => {
                setJobListings(response.data);
                console.log(response.data);
            });
        }, []);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await JobService.getAllJobs() // Replace <API_ENDPOINT> with the actual API endpoint URL
                setJobs(response.data); // Assuming the API response returns an array of job objects
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchJobs();
    }, []);


        return (
            <div className="container">
                <div className="moveIn">
                    <h3>Job Listings</h3>
                    <div className="cardContainer">
                        {jobs.map((job, index) => (
                            <JobCard key={index} job={job} />
                        ))}
                    </div>
                </div>
                <Sidebar/>
            </div>
        );
    };


export default JobListings;
