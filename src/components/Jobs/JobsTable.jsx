import React, { useState, useEffect } from "react";
import "./JobsTable.css";
import { FaSearch } from "react-icons/fa";
import JobsList from "./jobList/JobsList";

const JobTable = ({ city, search }) => {
  const [Apijobs, setApiJobs] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [locations, setLocations] = useState([]);
  const [filters, setFilters] = useState({
    industry: "",
    type: "",
    location: city || "", 
    search: search || "", 
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("https://test.hi5-consulting.com/api/all-jobs");
        const data = await response.json();
        setApiJobs(data.data);
        console.log("data is: " + Apijobs);

        // Extract unique industries
        const uniqueIndustries = [...new Set(data.data.map((job) => job.job_industry))];
        setIndustries(uniqueIndustries);

        // Extract unique locations
        const uniqueLocations = [...new Set(data.data.map((job) => job.job_location))];
        setLocations(uniqueLocations); 
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    // console.log(Apijobs)

    fetchJobs();
  }, [Apijobs]);

  const handleFilterChange = (filterKey, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterKey]: value === "" ? "" : value,
    }));
  };

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
        {/* Search Input */}
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search"
            className="search-input-table"
            value={filters.search}
            onChange={(e) => handleFilterChange("search", e.target.value)}
          />
          <FaSearch className="search-icon" />
        </div>

        {/* Industry Dropdown */}
        <div className="table-dropdown">
          <div
            className="table-dropdown-header"
            onClick={() =>
              handleFilterChange("industry", filters.industry ? "" : "All Job Industry")
            }
          >
            {filters.industry || "All Job Industry"}
          </div>
          <div className="table-dropdown-menu">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="table-dropdown-item"
                onClick={() => handleFilterChange("industry", industry)}
              >
                {industry}
              </div>
            ))}
          </div>
        </div>

        {/* Type Dropdown */}
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

        {/* Location Dropdown */}
        <div className="table-dropdown">
          <div
            className="table-dropdown-header"
            onClick={() =>
              handleFilterChange("location", filters.location ? "" : "All Job Location")
            }
          >
            {filters.location || "All Job Location"}
          </div>
          <div className="table-dropdown-menu">
            {locations.map((location, index) => (
              <div
                key={index}
                className="table-dropdown-item"
                onClick={() => handleFilterChange("location", location)}
              >
                {location}
              </div>
            ))}
          </div>
        </div>
      </div>

      <table className="job-table">
        <JobsList filteredJobs={filteredJobs} />
      </table>
    </div>
  );
};

export default JobTable;
