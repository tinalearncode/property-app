import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

import Links from './Links';
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="md" fixed="top">
      <Container>
        <Navbar.Brand>
          <Nav.Link className="font-weight-bold text-white text-uppercase" href="/">
            <img alt="" src="/logo.png" width="35" height="35" className="d-inline-block align-bottom" />
            <span className="d-none d-sm-inline">uckland Property</span>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Links />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
