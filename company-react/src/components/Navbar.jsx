import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.jpg";

const NavigationBar = () => {
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);

  const handleMouseEnter = () => setShowAboutDropdown(true);
  const handleMouseLeave = () => setShowAboutDropdown(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt="Mitra Griya Abadi"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          /> Mitra Griya Abadi
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown
              title="About"
              id="about-nav-dropdown"
              show={showAboutDropdown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavDropdown.Item as={Link} to="/about#tentang-kami">Tentang Kami</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about#visi-misi">Visi dan Misi</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about#latar-belakang">Latar Belakang / Sejarah Singkat</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/product-service">Product/Service</Nav.Link>
            <Nav.Link as={Link} to="/ecommerce">Ecommerce</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
