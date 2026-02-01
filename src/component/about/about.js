import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../style.css";
import profile from "../images/profile2.png";

function About() {
    return (       
        <div id="about" className="justify-content-md-center sections">
             <Row>
             <p className="pageTitle">ABOUT TIFFO LIN 。我</p>
            <Col lg={6} md={12} id="aboutImgContainer">
                <img alt="boss5" src={profile} className="pictures2 img-fluid" ></img>
            </Col>
            <Col lg={6} md={12}>
                    <p className="info col-12 aboutinfo">

                    <p>My background spans office administration, creative work, and life abroad.</p>
                    <br></br>
                    <p> I’ve lived and worked in five countries, taught snowboarding, and spent years in office environments 
                        where organization and attention to detail weren’t optional—they were essential.
                        Today, I work with web development and video editing, supported by a strong administrative foundation. 
                        I enjoy creating clean, well-organized digital experiences, fixing things that somehow broke, and making 
                        systems run a little smoother than they did yesterday.</p>
                       <br></br>
                       <br></br>

                </p>
            </Col>
            <Col lg={12}>
                <br></br>
                <br></br>
            <p className="learn">Organized by nature, curious by default, and always improving the details—one fix at a time.</p>
            </Col>
                       
            </Row>
        </div>
  
    )
}

export default About;