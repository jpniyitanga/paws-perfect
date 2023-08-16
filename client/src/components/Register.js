import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../css/Forms.css";
import Navbar from "./Navbar";

const Register = () => {
  const { user, isAuthenticated } = useAuth0();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    fetchUserInfo(); // Fetch user info from the backend
  }, []);

  const fetchUserInfo = async () => {
    try {
      const response = await fetch("/api/userinfo"); // Replace with backend API endpoint
      const data = await response.json();
      setUserInfo(data);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="Form-header">
          <h1>NEW USER REGISTRATION</h1>
        </div>
        {!userInfo ? (
          <Container className="register-links">
            <Row className="justify-content-center">
              <Link to="/register-owner" className="btn btn-primary">
                Register as a Pet Owner
              </Link>

              <Link to="/register-sitter" className="btn btn-primary">
                Register as a Pet Sitter
              </Link>
            </Row>
          </Container>
        ) : (
          <Container className="text-center">
            <Row className="justify-content-center mt-5">
              <Col md={6} className="text-center">
                <Link to="/bookings" className="btn btn-primary">
                  Your Bookings
                </Link>
              </Col>
            </Row>
          </Container>
        )}
      </main>
    </>
  );
};

export default Register;
