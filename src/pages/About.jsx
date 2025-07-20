import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="bg-light py-5">
      <Container>
        <h2 className="text-center mb-4">About Me</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src="/images/profile.jpg"  // Add your image inside public/images/
              alt="Thamotharapandi"
              className="img-fluid rounded-circle border"
              style={{ maxWidth: '300px' }}
            />
          </Col>
          <Col md={6}>
            <p>
              I'm <strong>Thamotharapandi U</strong>, a passionate Full Stack Developer and Software Tester from Theni, Tamil Nadu.
              I hold a B.Sc. CS (AI & DS) from Karpagam Academy of Higher Education (CGPA: 8.7), and I'm skilled in both backend and frontend development.
            </p>
            <p>
              I love building efficient, responsive web applications, Software Development and Software Testing ensuring their quality through manual and automated testing.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
