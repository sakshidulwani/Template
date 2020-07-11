import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Skills(props) {
    return (
        <div>
            <Container className="skills my-5 py-5">
                <h1 className="my-5 pt-3" style={{"color": "black"}}>Skills</h1>
                <Row>
                   <Col lg={12} className="my-4 justify-content-center">
                   <i className="mx-4 my-2 fab fa-6x fa-react" style={{"color": "lightblue"}}></i>
                   <i className="mx-4 my-2 fab fa-6x fa-js-square" style={{"color": "gold"}}></i>
                   <i className="mx-4 my-2 fab fa-6x fa-bootstrap" style={{"color": "purple"}}></i><br/>
                   <i className="mx-4 my-2 fab fa-6x fa-html5" style={{"color": "darkorange"}}></i>
                   <i className="mx-4 my-2 fab fa-6x fa-css3-alt" style={{"color": "dodgerblue"}}></i>
                   </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Skills;