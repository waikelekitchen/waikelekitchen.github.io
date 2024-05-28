import React from "react";
import "../css/BannerComponent.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BannerComponent = () => {
    return (
        <div id="banner">
            <Row style={{ padding: '0px', margin: '0px' }}>
                <Col sm={6}>
                    <div id="banner-section">
                        <h1 id="banner-title">Indulge in Delicious Flavors</h1>
                        <h3>Local style Ahi Poke Bowls + Asian lunch plates</h3>
                    </div>
                </Col>
                <Col id="banner-image-container" >
                    <div>
                        {/* <Image className="loc-img" src={locationIMG} alt="locationIMG" /> */}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default BannerComponent;