import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Img1 from "../images/shadowImages/2.PNG";
import Img2 from "../images/shadowImages/1.PNG";
import Img3 from "../images/fullstack.png";

import "../style.css";

function Splash() {
    return (
        <div id="splashpage" className="justify-content-center">
            <Row>
                {/* <Col lg={4} md={12}>        
                    <img src={name} id="name" className="img-fluid" alt="..."></img>
                </Col> */}
                <Col lg={4} md={12} sm={12}>
                    <img src={Img1} id="Img1" className="img-fluid" alt="..."></img>
                </Col>
                <Col lg={4} md={12} sm={12}>
                    <img src={Img3} id="Img3" className="img-fluid" alt="..."></img>
                </Col>
                <Col lg={4} md={12} sm={12}>
                <img src={Img2} id="Img2" className="img-fluid" alt="..."></img>
                </Col>
            </Row>
            {/* <div className="snowAnim">
                <div className="snowfalling3 delay3">
                    <div className="snow"></div>
                </div>
            </div> */}
            <div className="snowAnim">
                <div className="snowfalling1 delay3">
                    <div className="snow1"></div>
                </div>
            </div>
            <div className="snowAnim">
                <div className="snowfalling2 delay1">
                    <div className="snow2"></div>
                </div>
            </div>
            <div className="snowAnim">
                <div className="snowfalling3 delay2">
                    <div className="snow3"></div>
                </div>
            </div>
            <div className="snowAnim">
                <div className="snowfalling4 delay3">
                        <div className="snow4"></div>
                </div>
            </div>
            <div className="snowAnim">
                <div className="snowfalling5 delay1">
                    <div className="snow5"></div>
                </div>
            </div>
       
        </div>
    )
}

export default Splash;


                   