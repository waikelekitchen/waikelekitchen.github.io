import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/LocationComponent.css";

const LocationComponent = () => {
    return (
        <div id="location">
            {/* <h2 className="title">LOCATION</h2> */}
            <Row style={{ padding: '0px', margin: '0px' }}>
                <Col id="location-image-container" >
                    <div>
                        {/* <Image className="loc-img" src={locationIMG} alt="locationIMG" /> */}
                    </div>
                </Col>
                <Col sm={6}>
                    <div id="location-section">
                        <br />
                        <br />
                        <h2 className="title">LOCATION</h2>
                        <br />
                        <br />
                        <h3>Address</h3>
                        <a style={{ color: 'black', textDecoration: 'none' }} href="https://www.google.com/maps/place/Waikele+Kitchen+and+Aloha+Coffee+%26+Tea/@21.4025157,-158.00927,17z/data=!3m1!4b1!4m6!3m5!1s0x7c006700500eea67:0x9d76835f264a1e02!8m2!3d21.4025157!4d-158.0066951!16s%2Fg%2F11vyq8v5td?entry=ttu" target="_blank" rel="noopener noreferrer"><p id="location-box">Waikele Premium Outlet</p></a>
                        <p>94-790 Lumiaina St, Waipahu, HI 96797</p>
                        <br />
                        <h3>Hours</h3>
                        <p>Monday - Thursday: 10:30 am to 7:00 pm</p>
                        <p>Friday - Saturday: 10:30 am to 8:00 pm</p>
                        <p>Sunday: 11:00 am to 6:00 pm</p>
                        <br />
                        <br />
                        <br />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default LocationComponent;