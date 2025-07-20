import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Certifications = () => {
  return (
    <section id="certifications" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Certifications</h2>

        <Row className="g-4">
          {/* Certification 1 */}
          <Col md={6}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Selenium Testing</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Stair Progressive Minds Pvt. Ltd – July 2024</Card.Subtitle>
                <Card.Text>
                  Gained practical knowledge on automated testing using Selenium WebDriver and TestNG. Practiced locating elements, writing test cases, and automation scripts.
                </Card.Text>
                {/* Optional Certificate Link */}
                <Button variant="primary" href="/certificates/selenium.pdf" target="_blank">
                  View Certificate
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Certification 2 */}
          <Col md={6}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>C Programming</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Bharathidasan University – Feb/Mar 2018</Card.Subtitle>
                <Card.Text>
                  Completed a certified course in C Programming and developed foundational knowledge in procedural programming, logic building, and memory management.
                </Card.Text>
                {/* Optional Certificate Link */}
                <Button variant="primary" href="/certificates/cprogramming.pdf" target="_blank">
                  View Certificate
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* You can add more certifications below similarly */}
        </Row>
      </Container>
    </section>
  );
};

export default Certifications;

