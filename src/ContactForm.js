import React, { useState } from "react";
import "./ContactForm.css"; // Import the CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://10.0.0.26:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <div id="container">
      <h1>&bull; Hello Da3dou3a&bull;</h1>
      <div className="underline"></div>
      <div className="icon_wrapper">
        {/* SVG icon here */}
      </div>
      <form id="contact_form" onSubmit={handleSubmit}>
        <div className="name">
          <input
            type="text"
            placeholder="My name is"
            name="name"
            id="name_input"
            required
            onChange={handleChange}
          />
        </div>
        <div className="email">
          <input
            type="email"
            placeholder="My e-mail is"
            name="email"
            id="email_input"
            required
            onChange={handleChange}
          />
        </div>
        <div className="telephone">
          <input
            type="text"
            placeholder="My number is"
            name="telephone"
            id="telephone_input"
            required
            onChange={handleChange}
          />
        </div>
        <div className="subject">
          <select
            name="subject"
            id="subject_input"
            required
            onChange={handleChange}
          >
            <option disabled hidden selected>
              Subject line
            </option>
            <option>I'd like to start a project</option>
            <option>I'd like to ask a question</option>
            <option>I'd like to make a proposal</option>
          </select>
        </div>
        <div className="message">
          <textarea
            name="message"
            placeholder="I'd like to chat about"
            id="message_input"
            cols="30"
            rows="5"
            required
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="submit">
          <input type="submit" value="Send Message" id="form_button" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
