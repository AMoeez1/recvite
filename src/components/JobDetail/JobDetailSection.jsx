import React, { useState } from "react";
import "./JobDetailSection.css";
import ApplyFormModal from "./JobApplyForm/ApplyFormModal";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineWork } from "react-icons/md";
import { BsCash } from "react-icons/bs";
const JobDetailSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="job-detail-section">
      <div className="main-content-job">
        <div className="job-apply">
          <div className="employment-type-job">Full-Time</div>
          <button className="apply-button" onClick={handleOpenModal}>
            Apply Now
          </button>
        </div>

        <h1 className="job-title">IT Support Associate</h1>

        <div className="job-data-details">
          <div className="job-detail-location">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <CiLocationOn />
            </div>

            <p>Jakarta, Indonesia</p>
          </div>

          <div className="job-detail-industry">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <MdOutlineWork />
            </div>
            <p>Construction</p>
          </div>

          <div className="job-detail-salary">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <BsCash />
            </div>
            <p>
               $20k - $25k
            </p>
          </div>
        </div>

        <hr className="hr-line" />

        <div className="job-summary">
          <h2>Job Description</h2>
          <p>
            Sodales adipiscing semper litora cras ut vulputate eu viverra erat
            volutpat...
          </p>
          <p>
            Sodales adipiscing semper litora cras ut vulputate eu viverra erat
            volutpat...
          </p>
        </div>

        <div className="job-responsibilities">
          <h2>Duties & Responsibilities</h2>
          <ul>
            <li>Arcu ac penatibus class ad et inceptos</li>
            <li>Massa lectus maecenas dignissim quam auctor</li>
            <li>Nulla felis auctor litora amet lorem</li>
            <li>Porta blandit aenean a amet</li>
            <li>Congue bibendum a suspendisse massa</li>
          </ul>
        </div>

        <div className="job-responsibilities">
          <h2>Minimum Qualifications</h2>
          <ul>
            <li>Arcu ac penatibus class ad et inceptos</li>
            <li>Massa lectus maecenas dignissim quam auctor</li>
            <li>Nulla felis auctor litora amet lorem</li>
            <li>Porta blandit aenean a amet</li>
            <li>Congue bibendum a suspendisse massa</li>
          </ul>
        </div>

        <ApplyFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </div>
  );
};

export default JobDetailSection;
