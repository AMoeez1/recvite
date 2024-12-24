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
    <section className="contact-section">
      <div className="contact-illustration">
        <img
          src="https://via.placeholder.com/400x400"
          alt="Contact Illustration"
        />
      </div>

      <div className="contact-form-wrapper">
        <h2>Get in touch !</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              required
            />
          </div>

          <div className="form-row">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone"
              required
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              placeholder="Country"
              required
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="City"
              required
            />
          </div>

          {/* <div className="form-row">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </div> */}

          <div className="contact-form-msg">
            <label>How can we assist?</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              required
            ></textarea>
          </div>

          <div className="services-section-contact">
            <h3>Services</h3>
            <div className="services-options-contact">
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

          <button type="submit" className="theme-btn-one">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
