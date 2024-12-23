// ApplyFormModal.js
import React, { useState } from "react";
import "./ApplyFormModal.css";
import { IoCloseSharp } from "react-icons/io5";

const ApplyFormModal = ({ isOpen, onClose, jobTitle, jobId }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    coverLetter: "",
    resume: null,
    consent: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submission started");

    if (!jobId) {
      alert("Error: Job ID is missing");
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("date", new Date().toISOString());
      formDataToSend.append("jobTitle", jobTitle);
      formDataToSend.append("jobId", jobId);

      const userDetails = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        coverLetter: formData.coverLetter,
      };

      console.log("User Details:", userDetails);
      console.log("Job ID:", jobId);

      formDataToSend.append("userDetails", JSON.stringify(userDetails));

      if (formData.resume) {
        formDataToSend.append("document", formData.resume);
      } else {
        alert("Please upload your resume");
        return;
      }

      console.log("Sending request to API...");
      const response = await fetch(
        "https://test.hi5-consulting.com/api/apply-job",
        {
          method: "POST",
          body: formDataToSend,
          headers: {
            Accept: "application/json",
          },
        }
      );

      console.log("Response status:", response.status);
      const responseData = await response.json().catch(() => null);
      console.log("Response data:", responseData);

      if (response.ok) {
        alert("Application submitted successfully!");
        onClose();
      } else {
        const errorMessage =
          responseData?.message || "Failed to submit application";
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert(`Failed to submit application: ${error.message}`);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <IoCloseSharp />
        </button>
        <h2>Apply for this Position</h2>
        <form className="apply-form" onSubmit={handleSubmit}>
          <label>
            Full Name
            <input
              type="text"
              name="fullName"
              placeholder="Your Name"
              required
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="name@example.com"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Phone
            <input
              type="tel"
              name="phone"
              required
              placeholder="+92xxxxxxxxxx"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Location
            <input
              type="text"
              name="location"
              placeholder="Your Location"
              required
              value={formData.location}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Cover Letter
            <textarea
              name="coverLetter"
              required
              placeholder="Message:"
              value={formData.coverLetter}
              onChange={handleInputChange}
            />
          </label>
          <label className="file-upload-label">
            Upload Resume:
            <input
              type="file"
              name="resume"
              accept=".pdf, .doc, .docx"
              required
              className="file-upload-input"
              onChange={handleInputChange}
            />
          </label>
          <label className="consent">
            <input
              type="checkbox"
              name="consent"
              required
              className="checkbox"
              checked={formData.consent}
              onChange={handleInputChange}
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
