import React, {useEffect, useState} from "react";
import './../../../App.css'
import Sidebar from "../../Dashboard/dashboard.page.employer";
import JobService from "../../../service/JobService.service";
import axios from "axios";
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
                    <div style={styles.cardContainer}>
                        {jobs.map((job, index) => (
                            <JobCard key={index} job={job} />
                        ))}
                    </div>


                </div>
                <Sidebar/>
            </div>
        );
    };

const styles = {
    cardContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '20px'
    },
    card: {
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '10px',
        margin: '10px',
        width: '300px'
    }
};

export default JobListings;
