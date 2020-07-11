import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from "react-scroll";

function Homepage(props) {
    return (
        <Container fluid id="homepage">
            <Container className="my-5 py-5">
                 <h3 className="py-1">Hello :)</h3>
                 <h4 className="py-1">My name is</h4>
                 <h1 className="py-1" style={{"color":"yellowgreen", "fontFamily": "Dancing Script, cursive","fontSize": "5em"}}>
                 <b>Sakshi Dulwani</b></h1>
                 <h4 className="py-1">I am a</h4>
                 <h1 className="py-1" style={{"color":"#2980b9", "textShadow": "4px 1px 0px yellowgreen"}}>React Native Develepor</h1><br/><br/>
                 <Link
                 activeClass="active"
                 to="about"
                 spy={true}
                 smooth={true}
                 offset={-70}
                 duration={500}><i className="my-5 fas fa-3x fa-chevron-circle-down"></i></Link>
            </Container>
        </Container>
    );
}

export default Homepage;