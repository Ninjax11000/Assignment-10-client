import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="mt-5 pt-5 bg-danger text-white">
        <Container>
          <Row>
            <Col lg={4}>
              <h5>About Us</h5>
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, mauris at eleifend accumsan, dolor libero eleifend tortor, ut tristique eros massa id urna.</p>
            </Col>
            <Col lg={4}>
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li><Link  to="/" className="text-decoration-none text-white">Home</Link></li>
                <li><Link to="/blog" className="text-decoration-none text-white">Blog</Link></li>
                <li><Link to="/contact" className="text-decoration-none text-white">Contact Us</Link></li>
              </ul>
            </Col>
            <Col lg={4}>
              <h5>Contact Us</h5>
              <address className="text-white">
                123 Main St<br />
                New York, NY 10001<br />
                USA<br />
                P: (123) 456-7890
              </address>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <p className="text-center text-white">&copy; {new Date().getFullYear()} Italian Restaurant. All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
};

export default Footer;