import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-dark text-light pt-4">
    <Container>
      <Row>
        {/* About / Logo */}
        <Col md={4} className="mb-3">
          <h5>Thamotharapandi U</h5>
          <p>
            Aspiring Full Stack Developer & Software Tester.
            Passionate about building web apps and ensuring software quality.
          </p>
        </Col>

        {/* Quick Links */}
        <Col md={4} className="mb-3">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="#home" className="text-light text-decoration-none">Home</a></li>
            <li><a href="#about" className="text-light text-decoration-none">About</a></li>
            <li><a href="#projects" className="text-light text-decoration-none">Projects</a></li>
            <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
          </ul>
        </Col>

        {/* Contact Info */}
        <Col md={4} className="mb-3">
          <h5>Contact</h5>
          <p><FaEnvelope className="me-2" /> thamotharapandiu@gmail.com</p>
          <p><FaPhone className="me-2" /> +91-7826975435</p>
          <div>
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-light me-3 fs-4">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
              <FaLinkedin />
            </a>
          </div>
        </Col>
      </Row>
      <hr className="bg-light" />
      <p className="text-center pb-2 mb-0">&copy; 2025 Thamotharapandi U. All rights reserved.</p>
    </Container>
  </footer>
);

export default Footer;
