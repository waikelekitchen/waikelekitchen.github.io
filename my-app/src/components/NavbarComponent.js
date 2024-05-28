import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import logo from '../img/logo.png';

import {
    Instagram,
} from "react-bootstrap-icons";
import "../css/NavbarComponent.css";

const NavbarComponent = () => {
    return (
        <Navbar id="navbar" fixed="top">
            <Container>
                <Nav className="justify-content-start align-items-center">
                    <Image id="logo" src={logo} alt="Logo" />
                    <Nav.Link className='nav-link' href="#home">Home</Nav.Link>
                    <Nav.Link className='nav-link' href="#menu">Menu</Nav.Link>
                    <Nav.Link className='nav-link' href="#location">Location</Nav.Link>
                    <Nav.Link className='nav-link' href="#about">About</Nav.Link>
                </Nav>
                <a style={{ color: 'black' }} href="https://www.instagram.com/waikelekitchen/" target="_blank" rel="noopener noreferrer"><Instagram size={30} style={{ color: "#FEF6E1" }} /></a>

            </Container>
        </Navbar>
    )
}

export default NavbarComponent;