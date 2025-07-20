
import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Validate inputs
  const validate = () => {
    const errors = {};
    if (!form.name.trim()) errors.name = 'Name is required';
    if (!form.email.includes('@')) errors.email = 'Valid email is required';
    if (!form.message.trim()) errors.message = 'Message cannot be empty';
    return errors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await axios.post('http://localhost:8080/api/contact', form);
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
      } catch (err) {
        console.error('Error sending message:', err);
      }
    }
  };

  return (
    <section id="contact" className="py-5 bg-white">
      <Container style={{ maxWidth: '600px' }}>
        <h2 className="text-center mb-4">Contact Me</h2>
        
        {submitted && <Alert variant="success">Message sent successfully!</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Your Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              isInvalid={!!errors.message}
            />
            <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
          </Form.Group>

          <Button type="submit" variant="primary" className="w-100">Send Message</Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
