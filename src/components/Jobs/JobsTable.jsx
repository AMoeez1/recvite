import React, { useState } from 'react';
import './JobsTable.css';
import { Link } from 'react-router-dom';
const JobTable = () => {
  const [jobs] = useState([
    { title: 'Market and Credit Risk Specialist', industry: 'Finance', location: 'Doha, Qatar', description: 'Responsible for analyzing market and credit risks.' },
    { title: 'Incubation Specialist', industry: 'Banking', location: 'Doha, Qatar', description: 'Focus on developing and incubating new financial products.' },
    { title: 'Financial Specialist', industry: 'Banking', location: 'Doha, Qatar', description: 'Manage financial resources and provide financial guidance.' },
    { title: 'Product Development Officer', industry: 'Banking', location: 'Doha, Qatar', description: 'Oversee the development of new banking products.' },
  ]);
  return (
    <div className="job-table-container">
      <h2>Jobs</h2>
      <div className="filters">
        <input type="text" placeholder="Search" className="search-input-table" />

        <div className="table-dropdown">
          All Job Industry
          <div className="table-dropdown-menu">
            <div className="table-dropdown-item">Finance</div>
            <div className="table-dropdown-item">Banking</div>
            <div className="table-dropdown-item">Entertainment</div>
          </div>
        </div>

        <div className="table-dropdown">
          All Job Type
          <div className="table-dropdown-menu">
            <div className="table-dropdown-item">Full-time</div>
            
          </div>
        </div>

        <div className="table-dropdown">
          All Job Location
          <div className="table-dropdown-menu">
            <div className="table-dropdown-item">Doha, Qatar</div>
            <div className="table-dropdown-item">Remote</div>
            <div className="table-dropdown-item">Doha</div>
          </div>
        </div>
      </div>

      <table className="job-table">
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index}>
              <td className='job-table-title'>{job.title}</td>
              <td>{job.industry}</td>
              <td>{job.location}</td>
              <td>
             
<Link 
  to={`/job-detail/${index}`} 
  state={{ title: job.title, description: job.description }}
  className="details-link"
>
  More Details ➔
</Link>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobTable;
