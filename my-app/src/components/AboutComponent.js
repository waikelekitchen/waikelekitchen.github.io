import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import history from '../img/history.jpeg';
import "../css/AboutComponent.css";

const AboutComponent = () => {
    return (
        <div id="about">
            <Container>
            <h2 className="title">ABOUT</h2>
            <br/>
            <Row>
                <Col sm={6}>
                    <h3>History</h3>
                    <br/>
                    <p id="history-summary">
                    Waikele Kitchen, newly opened in 2024, is now welcoming visitors at the open-air food court in Waikele Premium Outlets. The restaurant offers a delectable selection of local-style Ahi Poke Bowls and Asian lunch plates, inviting customers to indulge in a variety of delicious flavors.
                    </p>
                    <br/>
                    <p>
                        We look forward to meeting you!
                    </p>
                </Col>
                <Col id="about-img-container" sm={6}>
                    <div id="about-img-box">
                        <Image id="about-img" src={history} alt="food" />
                    </div>
                </Col>
            </Row>
            <Row>
                
            </Row>
        </Container>
        </div>
    )
}

export default AboutComponent;