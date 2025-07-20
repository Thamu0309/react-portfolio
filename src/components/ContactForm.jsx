import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/contact", formData);
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send message.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      {status && <div className="alert alert-info">{status}</div>}
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow bg-light">
        <div className="mb-3">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Phone</label>
          <input
            className="form-control"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="[6-9]{1}[0-9]{9}"
          />
        </div>
        <div className="mb-3">
          <label>Message</label>
          <textarea
            className="form-control"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
