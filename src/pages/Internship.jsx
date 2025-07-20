import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const Internship = () => {
  return (
    <section id="internship" className="py-5 bg-white">
      <Container>
        <h2 className="text-center mb-4">Internship Experience</h2>

        <Row className="g-4">
          {/* Internship 1 */}
          <Col md={6}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>ISN TechnoSoft – Full Stack Intern</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Jan 2024 – Feb 2024 (45 Days)</Card.Subtitle>
                <Card.Text>
                  During this internship, I worked on building web applications using Django and Bootstrap. I also gained experience with REST APIs and database integration.
                </Card.Text>
                <p><strong>Technologies Used:</strong> Django, Bootstrap, HTML, CSS, MySQL</p>
              </Card.Body>
            </Card>
          </Col>

          {/* Internship 2 */}
          <Col md={6}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Accent Techno Soft – Selenium Testing</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">July 2024 (10 Days)</Card.Subtitle>
                <Card.Text>
                  Learned automation testing using Selenium WebDriver. Practiced writing test cases, locating elements using XPath/CSS selectors, and running test scripts.
                </Card.Text>
                <p><strong>Technologies Used:</strong> Selenium, Java, TestNG, ChromeDriver</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Internship;
