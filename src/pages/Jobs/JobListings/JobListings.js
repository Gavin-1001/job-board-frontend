import React from "react";
import './../../../App.css'
import Sidebar from "../../Dashboard/dashboard.page.employer";

const JobListings = () => {
  return (
    <div className="container">
        <Sidebar />
      <div className="moveIn">
        <h3>Job Listings</h3>
      </div>
    </div>
  );
};

export default JobListings;
