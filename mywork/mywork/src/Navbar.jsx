import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import im from "../src/logo.png";

const Header1 = () => {
  return (
    <div>
      <Navbar
        style={{
          background: "black",
          justifyContent: "center",
          padding: "210px,222px",
        }}
        expand="lg"
      >
        <Container>
          <img src={im} alt="..." height={60} width={100} />
          {/* <Navbar.Brand >Old age Home</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Button variant="danger" href="/Registration">
                Make Appointment
              </Button>{" "}
              <Nav.Link>
                <Link style={{ color: "white", textDecoration: "none" }} to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link style={{ color: "black" }}>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/About"
                >
                  About
                </Link>
              </Nav.Link>
              <Nav.Link style={{ color: "black" }}>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/Service"
                >
                  Our Service
                </Link>
              </Nav.Link>
              <Nav.Link style={{ color: "black" }}>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/Photo"
                >
                  Photo Gallery
                </Link>
              </Nav.Link>
              <Nav.Link style={{ color: "black" }}>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/Blog"
                >
                  Blog
                </Link>
              </Nav.Link>
              <Nav.Link style={{ color: "black" }}>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/ContactUs"
                >
                  Contact
                </Link>
              </Nav.Link>
              {/* <Nav.Link style={{color:"black"}} href="/Service">Our Service</Nav.Link>
            <Nav.Link style={{color:"black"}} href="/Photo">Photo Gallery</Nav.Link>
            <Nav.Link style={{color:"black"}} href="/Blog">Blog</Nav.Link>
            <Nav.Link style={{color:"black"}}  href="/Event">Event</Nav.Link>
            
            
            <Nav.Link style={{color:"black"}} href="/contactUs">Contact</Nav.Link> */}
            </Nav>
            <Button variant="danger" href="/TodoList">
              Event Organization
            </Button>{" "}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header1;
