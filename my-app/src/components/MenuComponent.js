import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import "../css/MenuComponent.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import menu1 from '../img/Menu_1.jpg';
import menu2 from '../img/Menu_2.jpg';
import menu3 from '../img/Menu_3.jpg';
import Modal from 'react-bootstrap/Modal';

const MenuComponent = () => {
    const [showMenu1, setShowMenu1] = useState(false);
    const [showMenu2, setShowMenu2] = useState(false);
    const [showMenu3, setShowMenu3] = useState(false);

    return (
        <div id="menu">
            <Container>
            <h2 className="title">MENU</h2>
            <br />
            <h4>Asian Lunch Plates &middot; Ahi Poke Bowls</h4>
            <br />
            <div id="menu-section">
                <Row>
                    <Col style={{padding: "0px"}} onClick={() => setShowMenu1(true)}><Image className="menu-img" src={menu1} alt="menu1" /></Col>
                    <Modal size="xl" centered aria-labelledby="contained-modal-title-vcenter" show={showMenu1} onHide={() => setShowMenu1(false)} animation={false}>
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body><Image className="menu-model-img" src={menu1} alt="menu1" /></Modal.Body>
                    </Modal>
                    <Col style={{padding: "0px"}} onClick={() => setShowMenu2(true)}><Image className="menu-img" src={menu2} alt="menu2" /></Col>
                    <Modal size="xl" centered aria-labelledby="contained-modal-title-vcenter" show={showMenu2} onHide={() => setShowMenu2(false)} animation={false}>
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body><Image className="menu-model-img" src={menu2} alt="menu2" /></Modal.Body>
                    </Modal>
                </Row>
                <br />
                <br />
                <br />
                <Row>
                    <Col style={{padding: "0px"}} onClick={() => setShowMenu3(true)}><Image className="menu-img" src={menu3} alt="menu3" /></Col>
                    <Modal size="xl" centered aria-labelledby="contained-modal-title-vcenter" show={showMenu3} onHide={() => setShowMenu3(false)} animation={false}>
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body><Image className="menu-model-img" src={menu3} alt="menu3" /></Modal.Body>
                    </Modal>
                </Row>
            </div>
        </Container>
        </div>
    )
}

export default MenuComponent;