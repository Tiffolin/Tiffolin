import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import logo from "../images/name1.png";
import email from "../images/icon/email.png";
import github from "../images/icon/github.png";
import linkedIn from "../images/icon/linkedin.jpg";
import "../style.css";

class Navbar extends Component{    
    constructor() {
    super();
    this.state = {
        scrolled:false,
    };
}

componentDidMount(){
    window.addEventListener("scroll", ()=>{
        const isTop = window.scrollY<100;
        if(isTop !== true){
            this.setState({scrolled: true});
        }else{
            this.setState({scrolled: false});
        }
    });
}

componentWillUnmount() {
window.removeEventListener("scroll");
}

render() {
return(
    <div className={this.state.scrolled ? "nav scrolled" : "nav"}>
        <div className="nav_text">
            <NavLink to = "/Tiffolin"><img id="logo" alt="logo" src={logo}></img></NavLink>
                    <a href="https://github.com/Tiffolin?tab=repositories">
                        <span><img src={github} className="NavSnsImg img-fluid" alt="..."></img></span>
                    </a>     
                    <a href="mailto:szuchinlin3@gmail.com">
                        <span><img src={email} className="NavSnsImg img-fluid" alt="..."></img></span>
                    </a>

                    <a href="https://www.linkedin.com/in/szuchinlin">
                        <span><img src={linkedIn} className="NavSnsImg img-fluid" alt="..."></img></span>
                    </a>
             

        </div>






    </div>
    );
}
}

export default Navbar;