import React from 'react';
import { Link } from 'gatsby';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <nav>
      <Navbar
        className="__gradient"
        variant="dark"
        fixed="top"
        expand="md"
        style={{
          borderBottom: '1px solid #ffffff2c',
        }}
      >
        <Navbar.Brand as={Link} to="/">
          <span className="font-bold text-3xl tracking-tight">pmHIT</span>
        </Navbar.Brand>
        <Navbar.Toggle
          className="focus:outline-none"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto items-start md:items-center">
            <Nav.Link
              as={Link}
              to="/"
              activeStyle={{
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/blog"
              activeStyle={{
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/training"
              activeStyle={{
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              Training
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              <button className="md:ml-1 p-2 border border-solid-1 border-white md:bg-blue-500 text-white text-sm font-bold md:font-semibold rounded-full md:shadow-lg md:hover:bg-blue-400 focus:outline-none">
                Contact Us
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default NavBar;
