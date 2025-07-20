export default Header;
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
    <Navbar.Brand href="#home">Thamotharapandi</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav className="ms-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#internship">Internship</Nav.Link>
        <Nav.Link href="#certifications">Certifications</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
