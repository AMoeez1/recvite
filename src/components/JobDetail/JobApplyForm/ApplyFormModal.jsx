// ApplyFormModal.js
import React, { useState } from "react";
import "./ApplyFormModal.css";
import { IoCloseSharp } from "react-icons/io5";

const ApplyFormModal = ({ isOpen, onClose, jobTitle, jobID }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
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

    try {
      const formDataToSend = new FormData();

      // Format date as YYYY-MM-DD
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().split("T")[0];
      formDataToSend.append("date", formattedDate);

      // Add all required fields
      formDataToSend.append("first_name", formData.firstName);
      formDataToSend.append("last_name", formData.lastName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("country", formData.country);
      formDataToSend.append("city", formData.city);

      if (formData.resume) {
        formDataToSend.append("document", formData.resume);
      } else {
        alert("Please upload your resume");
        return;
      }

      // Log the exact data being sent
      console.log("Form Data Contents:");
      for (let pair of formDataToSend.entries()) {
        console.log(pair[0] + ": ", pair[1]);
      }

      console.log("Sending request to API...");
      const response = await fetch(
        "https://test.hi5-consulting.com/api/contact-us",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      console.log("Response status:", response.status);
      const responseData = await response.json().catch(() => null);
      console.log("Response data:", responseData);

      if (response.ok) {
        alert("Application submitted successfully!");
        onClose();
      } else {
        console.error("API Error Response:", responseData);
        const errorMessage =
          responseData?.message ||
          responseData?.error ||
          "Failed to submit application";
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
            First Name
            <input
              type="text"
              name="firstName"
              placeholder="Your First Name"
              required
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Last Name
            <input
              type="text"
              name="lastName"
              placeholder="Your Last Name"
              required
              value={formData.lastName}
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
            Country
            <input
              type="text"
              name="country"
              placeholder="Your Country"
              required
              value={formData.country}
              onChange={handleInputChange}
            />
          </label>
          <label>
            City
            <input
              type="text"
              name="city"
              placeholder="Your City"
              required
              value={formData.city}
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
