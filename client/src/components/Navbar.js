import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import LoginButton from './LoginButton';
import LogoutButton  from './LogoutButton';

function MainNavBar() {

  return (
    <>
      <Navbar bg="light" data-bs-theme="light" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <img src="perfect logo.png" alt="logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/sitters">
              <p class="fw-bold">Search Sitters</p>
            </Nav.Link>
            <Nav.Link href="/owners">
              <p class="fw-bold">Search Owners</p>
            </Nav.Link>
            <Nav.Link href="/bookings">
              <p class="fw-bold">Bookings</p>
            </Nav.Link>
            <Nav.Link href="/jobs">
              <p class="fw-bold">Join the Team</p>
            </Nav.Link>
            <Nav.Link href="/contact">
              <p class="fw-bold">Contact Us</p>
            </Nav.Link>
            <Nav.Link href="login">
              <p class="fw-bold">Sign In</p>
            </Nav.Link>
            <Nav.Link href="/register">
              <p class="fw-bold">Sign Up</p>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>

      <br />
    </>
  );
}

export default MainNavBar;