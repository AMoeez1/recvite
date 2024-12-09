import React, { useState } from "react";
import "./JobsTable.css";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useEffect } from "react";


const JobTable = () => {
  const [jobs] = useState([
    {
      title: "Market and Credit Risk Specialist",
      industry: "Finance",
      type: "Full-time",
      location: "Doha, Qatar",
      description: "Responsible for analyzing market and credit risks.",
    },
    {
      title: "Incubation Specialist",
      industry: "Banking",
      type: "Full-time",
      location: "Doha, Qatar",
      description: "Focus on developing and incubating new financial products.",
    },
    {
      title: "Financial Specialist",
      industry: "Banking",
      type: "Part-time",
      location: "Remote",
      description: "Manage financial resources and provide financial guidance.",
    },
    {
      title: "Product Development Officer",
      industry: "Banking",
      type: "Full-time",
      location: "Doha, Qatar",
      description: "Oversee the development of new banking products.",
    },
  ]);

  const [Apijobs, setApiJobs] = useState([]);

  useEffect(() => {
    // Fetch jobs from the API
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          "https://test.hi5-consulting.com/api/all-jobs"
        );
        const data = await response.json();
        console.log("All Jobs data from api :", data.data); // Log retrieved jobs data
        setApiJobs(data.data); // Set the retrieved jobs data
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const [filters, setFilters] = useState({
    industry: "",
    type: "",
    location: "",
    search: "",
  });

  const handleFilterChange = (filterKey, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterKey]:
        value ===
        `All Job ${filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}`
          ? ""
          : value,
    }));
  };

  const handleSearchChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      search: e.target.value,
    }));
  };

  // const filteredJobs = jobs.filter((job) => {
  //   const { industry, type, location, search } = filters;
  //   return (
  //     (!industry || job.industry === industry) &&
  //     (!type || job.type === type) &&
  //     (!location || job.location === location) &&
  //     (!search || job.title.toLowerCase().includes(search.toLowerCase()))
  //   );
  // });


  const filteredJobs = Apijobs.filter((job) => {
    const { industry, type, location, search } = filters;
    return (
      (!industry || job.job_industry === industry) &&
      (!type || job.employment_type.toLowerCase() === type.toLowerCase()) &&
      (!location || job.job_location.toLowerCase().includes(location.toLowerCase())) &&
      (!search || job.job_title.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div className="job-table-container">
      <h2>Jobs</h2>
      <div className="filters">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search"
            className="search-input-table"
            value={filters.search}
            onChange={handleSearchChange}
          />
          <FaSearch className="search-icon" />
        </div>

        <div className="table-dropdown">
          <div
            className="table-dropdown-header"
            onClick={() =>
              handleFilterChange(
                "industry",
                filters.industry ? "" : "All Job Industry"
              )
            }
          >
            {filters.industry || "All Job Industry"}
          </div>
          <div className="table-dropdown-menu">
            <div
              className="table-dropdown-item"
              onClick={() => handleFilterChange("industry", "Finance")}
            >
              Finance
            </div>
            <div
              className="table-dropdown-item"
              onClick={() => handleFilterChange("industry", "Banking")}
            >
              Banking
            </div>
            <div
              className="table-dropdown-item"
              onClick={() => handleFilterChange("industry", "Entertainment")}
            >
              Entertainment
            </div>
          </div>
        </div>
        <div className="table-dropdown">
          <div
            className="table-dropdown-header"
            onClick={() =>
              handleFilterChange("type", filters.type ? "" : "All Job Type")
            }
          >
            {filters.type || "All Job Type"}
          </div>
          <div className="table-dropdown-menu">
            <div
              className="table-dropdown-item"
              onClick={() => handleFilterChange("type", "Full-time")}
            >
              Full-time
            </div>
            <div
              className="table-dropdown-item"
              onClick={() => handleFilterChange("type", "Part-time")}
            >
              Part-time
            </div>
          </div>
        </div>
        <div className="table-dropdown">
          <div
            className="table-dropdown-header"
            onClick={() =>
              handleFilterChange(
                "location",
                filters.location ? "" : "All Job Location"
              )
            }
          >
            {filters.location || "All Job Location"}
          </div>
          <div className="table-dropdown-menu">
            <div
              className="table-dropdown-item"
              onClick={() => handleFilterChange("location", "Doha, Qatar")}
            >
              Doha, Qatar
            </div>
            <div
              className="table-dropdown-item"
              onClick={() => handleFilterChange("location", "Remote")}
            >
              Remote
            </div>
          </div>
        </div>
      </div>
      <table className="job-table">
        {/* <tbody>
          {filteredJobs.map((job, index) => (
            <tr key={index}>
              <td className="job-table-title">{job.title}</td>
              <td>{job.industry}</td>
              <td>{job.type}</td>
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
        </tbody> */}
        <tbody>
          {filteredJobs.map((job, index) => (
            <tr key={index}>
              <td className="job-table-title">{job.job_title}</td>
              <td>{job.job_industry}</td>
              <td>{job.employment_type}</td>
              <td>{job.job_location}</td>
              <td>
                <Link
                  to={`/job-detail/${job.id}`}
                  state={{
                    title: job.job_title,
                    description: job.long_description,
                  }}
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
