import React from "react";
import "./JobsList.css";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
const JobsList = ({ filteredJobs }) => {
  return (
    <div className="job-list-container">
      {filteredJobs.map((job, index) => (
        <div className="job-card" key={index}>
          {/* <div className="job-logo">
           
            <img
              src={`/assets/logos/${job.job_industry.toLowerCase()}.png`}
              alt={job.job_industry}
            />
          </div> */}
          <div className="job-details">
            <h3 className="job-list-title">{job.job_title}</h3>
            <div className="job-meta">
              <span className="employment-type">{job.employment_type}</span>
              <span className="job-location">{job.job_industry}</span>
            </div>

            <div className="job-salary">
            <p>
            <CiLocationOn />
            </p>
              
              <p>{job.job_location}</p>
            </div>
          </div>
          {/* <Link 
          to={`/job-detail/${job.id}`}
                  state={{
                    title: job.job_title,
                    description: job.long_description,
                  }}
           className="apply-now-btn ">More Details ➔</Link> */}

          <Link
            to={`/job-detail/${job.id}`}
            state={{
              title: job.job_title,
              description: job.long_description,
            }}
            className="apply-now-btn "
          >
            More Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default JobsList;
