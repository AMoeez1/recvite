import React from "react";
import Header from "../../components/Header/Header";
import PageTitle from "../../components/Blog/Title/Title";
import AgencySection from "../../components/Agency/Agency";
import Footer from "../../components/Footer/Footer";
import FAQSection from "../../components/FAQ/FAQSection";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import JobsTable from "../../components/Jobs/JobsTable";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import { useLocation } from "react-router-dom";

const Jobs = () => {
  const { state } = useLocation();
  const { city, search } = state || { city: "", search: "" };

  const jobs = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
      title: "Web Designer / Developer",
      type: "Full Time",
      location: "Australia",
      time: "2 days ago",
      salary: "$950 – $1100/mo",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      title: "Marketing Director",
      type: "Part Time",
      location: "Russia",
      time: "5 days ago",
      salary: "$950 – $1100/mo",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg",
      title: "Application Developer",
      type: "Remote",
      location: "Germany",
      time: "3 days ago",
      salary: "$950 – $1100/mo",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Lenovo_Global_Corporate_Logo.png",
      title: "Senior Product Designer",
      type: "WFH",
      location: "Italy",
      time: "2 days ago",
      salary: "$950 – $1100/mo",
    },
  ];

  return (
    <div className="page-wrapper">
      <Header />
      <MobileMenu />
      <PageTitle
        title={"Jobs Vacancies"}
        text={""}
        image={'url("/assets/images/web images/job_banner.jpg")'}
      />
      <JobsTable city={city} search={search} />
      <div className="container my-5">
        <div className="row g-4">
          {jobs.map((job, index) => (
            <div key={index} className="col-12 py-2">
              <div className="row shadow-sm border-0 rounded-4 bg-light p-3" style={{display: 'flex', alignItems: 'center'}}>
                <div className="col-md-1">
                  <img
                    src={job.logo}
                    alt={job.title}
                    className="card-img-top rounded-3"
                    style={{ objectFit: "contain", height: "40px" }}
                  />
                </div>
                <div className="col-md-4">
                  <h5 className="card-title fw-semibold">{job.title}</h5>
                </div>
                <div className="col-md-2">
                  <span className="badge bg-primary text-white p-2">
                    {job.type}
                  </span>
                  <p className="text-muted small">
                    <i className="bi bi-clock me-1"></i>
                    {job.time}
                  </p>
                </div>

                <div className="col-md-3">
                  <p className="text-muted small m-0">{job.location}</p>
                  <h6 className="fw-medium">{job.salary}</h6>
                </div>

                <div className="col-md-2">
                  <button className="btn btn-primary rounded-pill mt-auto">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AgencySection />
      <NewsLetter />
      <Footer />
      <button className="scroll-top scroll-to-target" data-target="html">
        <span className="fa fa-arrow-up"></span>
      </button>
    </div>
  );
};

export default Jobs;
