import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(props) {
    const year = new Date().getFullYear();
    return (
        <Container fluid className="py-2" id="footer">
            <Row>
               <Col className="social py-5">
                 <i className="fab fa-2x fa-whatsapp" style={{"color": "yellowgreen"}}></i> Phone: +91 91059 58359<br/><br/>
                 <i className="fas fa-2x fa-envelope" style={{"color": "#ca3435"}}></i> Email: dulwanisakshi@gmail.com<br/><br/>
               </Col>
            </Row>
            <Row>
               <Col>
                 <p>&copy;Sakshi Dulwani {year}</p>
               </Col>
            </Row>
        </Container>
    );
}

export default Footer;