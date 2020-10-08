import React from "react";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import email from "../images/icon/email.png";
import github from "../images/icon/github.png";
import linkedIn from "../images/icon/linkedin.jpg";


function Footer() {
    return (
        <div id="footer" className="justify-content-md-center sections">

                <div id="copyright">                
                    <a href="https://www.tiffolin.com"><div id="developer">© 2020, images & web designed by TiffoLin</div></a>
                </div>
                <p className="footerText">Find me on:</p>
                <div id="snsContainer">
                    <a href="https://github.com/Tiffolin?tab=repositories">
                        <span id="facebook"><img src={github} className="snsImg img-fluid" alt="..."></img></span>
                    </a>
                    <a href="mailto:szuchinlin3@gmail.com">
                        <span id="instagram"><img src={email} className="snsImg img-fluid" alt="..."></img></span>
                    </a>

                    <a href="https://www.linkedin.com/in/szuchinlin">
                        <span id="linkedIn"><img src={linkedIn} className="snsImg img-fluid" alt="..."></img></span>
                    </a>
                </div>            
             


</div>
            

    )
}

export default Footer;

