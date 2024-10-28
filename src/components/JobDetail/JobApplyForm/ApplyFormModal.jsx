// ApplyFormModal.js
import React, { useState } from 'react';
import './ApplyFormModal.css';

const ApplyFormModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Apply for this Position</h2>
        <form className="apply-form">
          <label>
            Full Name *
            <input type="text" name="fullName" required />
          </label>
          <label>
            Email *
            <input type="email" name="email" required />
          </label>
          <label>
            Phone *
            <input type="tel" name="phone" required />
          </label>
          <label>
            Cover Letter *
            <textarea name="coverLetter" required />
          </label>
          <label>
            Upload CV/Resume *
            <input type="file" name="resume" accept=".pdf, .doc, .docx" required />
          </label>
          <label>
            <input type="checkbox" name="consent" required />
            By using this form you agree with the storage and handling of your data by this website.
          </label>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ApplyFormModal;
