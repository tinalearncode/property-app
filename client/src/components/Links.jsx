import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Links = () => {
  return (
    <Nav className="me-auto">
      <Nav.Link>
        <Link to="/properties/list" className="nav-link text-white">
          List Properties
        </Link>
      </Nav.Link>

      <Nav.Link>
        <Link to="/properties/create" className="nav-link text-white">
          Create Properties
        </Link>
      </Nav.Link>
    </Nav>
  );
};

export default Links;
