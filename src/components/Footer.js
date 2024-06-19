import React from 'react';
// import { Container, Typography,  } from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';
import companyLogo from './images/companyLogo.jpg';
import './Footer.css'; // Custom styles for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col md={12} className="text-center">
            <p className="footer-text">
              <img src={companyLogo} alt="Company Logo" className="footer-logo" /> &copy; {new Date().getFullYear()} PetPals. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;