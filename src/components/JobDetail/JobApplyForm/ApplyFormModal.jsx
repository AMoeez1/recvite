// ApplyFormModal.js
import React, { useState } from "react";
import "./ApplyFormModal.css";
import { IoCloseSharp } from "react-icons/io5";

const ApplyFormModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <IoCloseSharp />
        </button>
        <h2>Apply for this Position</h2>
        <form className="apply-form">
          <label>
            Full Name
            <input type="text" name="fullName" placeholder="Your Name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="name@example.com" required />
          </label>
          <label>
            Phone
            <input type="tel" name="phone" required placeholder="+92xxxxxxxxxx" />
          </label>
          <label>
            Location
            <input type="text" name="location" placeholder="Your Location" required />
          </label>
          <label>
            Cover Letter
            <textarea name="coverLetter" required  placeholder="Message:"/>
          </label>
          <label className="file-upload-label">
            Upload Resume:
            <input
              type="file"
              name="resume"
              accept=".pdf, .doc, .docx"
              required
              className="file-upload-input"
            />
          </label>

          {/* <label>
            Upload CV/Resume
            <input
              type="file"
              name="resume"
              accept=".pdf, .doc, .docx"
              required
            />
          </label> */}
          <label className="consent">
            <input
              type="checkbox"
              name="consent"
              required
              className="checkbox"
            />
            By using this form you agree with the storage and handling of your
            data by this website.
          </label>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyFormModal;
