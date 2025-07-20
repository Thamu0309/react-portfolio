import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProjectCard = ({ title, description, tech, demo, github }) => (
  <Card className="mb-3 shadow-sm">
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <p><strong>Tech:</strong> {tech}</p>
      <Button variant="primary" href={demo} target="_blank" className="me-2">Live Demo</Button>
      <Button variant="dark" href={github} target="_blank">GitHub</Button>
    </Card.Body>
  </Card>
);

export default ProjectCard;
