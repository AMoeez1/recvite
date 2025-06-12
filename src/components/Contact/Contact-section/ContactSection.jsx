import React, { useState } from "react";
import "./ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    date: new Date().toISOString().split("T")[0],
    message: "",
    services: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (e) => {
    const { checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      services: checked
        ? [...prev.services, value]
        : prev.services.filter((service) => service !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestData = {
        ...formData,
        date: new Date().toISOString().split("T")[0],
      };

      console.log("Sending contact form data:", requestData);

      const response = await fetch(
        "https://test.hi5-consulting.com/api/contact-us",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      if (response.ok) {
        console.log("Contact form submission successful!");
        alert("Message sent successfully!");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          country: "",
          city: "",
          date: new Date().toISOString().split("T")[0],
          message: "",
          services: [],
        });
      } else {
        console.error("Contact form submission failed:", await response.text());
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    // <section className="contact-section">
    <section className="py-5 d-flex justify-content-center">
      {/* <div className="contact-illustration">
        <img
          src="https://via.placeholder.com/400x400"
          alt="Contact Illustration"
        />
      </div> */}

      <div
        className="card p-5 shadow-xl contact-form-wrapper"
        style={{
          maxWidth: "500px",
          width: "100%",
          border: "none",
          boxShadow: '10px',
          background: "linear-gradient(to right, #EBEBEB, #ffffff)",
        }}
      >
        <h2 className="fw-bold mb-2">Get in touch !</h2>

        <form>
          {/* Name */}
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              className="form-control"
              onChange={handleInputChange}
              placeholder="First Name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              className="form-control"
              onChange={handleInputChange}
              placeholder="Phone"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">How can we help?</label>
            <textarea
              name="message"
              className="form-control"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              required
            ></textarea>
          </div>

          {/* Services */}
          <div className="mb-4">
            <label className="form-label">Services</label>
            <div className="row">
              <div className="col-6">
                <label>
                <input
                  type="checkbox"
                  name="services"
                  value="Permanent Recruitment (Direct Hire)"
                  checked={formData.services.includes(
                    "Permanent Recruitment (Direct Hire)"
                  )}
                  onChange={handleServiceChange}
                />
                Permanent Recruitment (Direct Hire)
              </label>
              <label>
                <input
                  type="checkbox"
                  name="services"
                  value="Temporary/Contract Staffing"
                  checked={formData.services.includes(
                    "Temporary/Contract Staffing"
                  )}
                  onChange={handleServiceChange}
                />
                Temporary/Contract Staffing
              </label>
              </div>
              <div className="col-6">
                              <label>
                <input
                  type="checkbox"
                  name="services"
                  value="Executive Search (Headhunting)"
                  checked={formData.services.includes(
                    "Executive Search (Headhunting)"
                  )}
                  onChange={handleServiceChange}
                />
                Executive Search (Headhunting)
              </label>
              <label>
                <input
                  type="checkbox"
                  name="services"
                  value="Talent Mapping and Market Research"
                  checked={formData.services.includes(
                    "Talent Mapping and Market Research"
                  )}
                  onChange={handleServiceChange}
                />
                Talent Mapping and Market Research
              </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              style={{ backgroundColor: "#7f56d9" }}
            >
              Get started
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
