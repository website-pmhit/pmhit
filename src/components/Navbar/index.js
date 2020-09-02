import React from 'react';
import { Link } from 'gatsby';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return (
    <nav>
      <Navbar expand="md">
        <Navbar.Brand as={Link} to="/">
          <span className="font-bold text-blue-500 text-2xl tracking-tight ">
            pmHIT
          </span>
        </Navbar.Brand>
        <Navbar.Toggle
          className="focus:outline-none"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              as={Link}
              to="/"
              className=""
              activeStyle={{
                fontWeight: 'bold',
              }}
            >
              Home
            </Nav.Link>{' '}
            <Nav.Link
              as={Link}
              to="/blog"
              className=""
              activeStyle={{
                fontWeight: 'bold',
              }}
            >
              Blog
            </Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown" className="">
              <NavDropdown.Item as={Link} to="#action/3.1">
                Action
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={Link}
              to="/contact"
              className=""
              activeStyle={{
                fontWeight: 'bold',
              }}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default NavBar;
