import React from "react";
// import {NavLink} from "react-router-dom";
import Instructions from "../instructions/instructions";
import first from "../images/projScreenshot/Design1.PNG";
import second from "../images/projScreenshot/Design2.PNG";
import third from "../images/projScreenshot/Design3.PNG";
import forth from "../images/projScreenshot/Design4.PNG";
import fifth from "../images/projScreenshot/Design5.PNG";
import github from "../images/github2.png";
//import Zzzmerch from "../images/projScreenshot/Zzzmerch.png";
//import duo from "../images/projScreenshot/duo.png";


function Webdesigns() {
    return (
<div id="projects" className="row justify-content-md-center sections">        
    <p className="pageTitle col-12">Projects: Web Designs</p>
    <Instructions />

        {/* Design 1  */}
    <div className="ProjWrapper">  
            <a href="https://github.com/Tiffolin/Design1">
                <div className="codeLink">  
                     <span>Design 1</span>
                     <span><img src={github} className="icons" alt="..."></img></span>
                    <span>REPO</span>
                </div> 
            </a>
                
            <a href="https://tiffolin.github.io/Design1/">
                <div className="projectContainer">
                    <div className="topDiv container-fluid"></div>
                    <div className="divUnder row">
                        <img src={first} className="topDiv img-fluid" alt="..."></img>
                    </div>
                </div>
            </a>
    </div>

        {/* Design 2  */}
    <div className="ProjWrapper">  
            <a href="https://github.com/Tiffolin/Design2">
                <div className="codeLink">  
                    <span>Design 2</span>
                    <span><img src={github} className="icons" alt="..."></img></span>
                    <span>REPO</span>
                </div> 
            </a>
                
            <a href="https://tiffolin.github.io/Design2/">
                <div className="projectContainer">
                    <div className="topDiv container-fluid"></div>
                    <div className="divUnder row">
                        <img src={second} className="topDiv img-fluid" alt="..."></img>
                    </div>
                </div>
            </a>
    </div>

        {/* Design 3  */}
    <div className="ProjWrapper">  
            <a href="https://github.com/Tiffolin/Design3">
                <div className="codeLink">  
                    <span>Design 3</span>
                    <span><img src={github} className="icons" alt="..."></img></span>
                    <span>REPO</span>
                </div> 
            </a>
                
            <a href="https://tiffolin.github.io/Design3/">
                <div className="projectContainer">
                    <div className="topDiv container-fluid"></div>
                    <div className="divUnder row">
                        <img src={third} className="topDiv img-fluid" alt="..."></img>
                    </div>
                </div>
            </a>
    </div>

        {/* Design 4  */}
    <div className="ProjWrapper">  
        <a href="https://github.com/Tiffolin/Design4">
            <div className="codeLink">  
                <span>Design 4</span>
                <span><img src={github} className="icons" alt="..."></img></span>
                <span>REPO</span>
            </div> 
        </a>
                
        <a href="https://tiffolin.github.io/Design4/">
            <div className="projectContainer">
                <div className="topDiv container-fluid"></div>
                <div className="divUnder row">
                    <img src={forth} className="topDiv img-fluid" alt="..."></img>
                </div>
            </div>
        </a>
    </div>

        {/* Design 5  */}
    <div className="ProjWrapper">  
        <a href="https://github.com/Tiffolin/Design5">
            <div className="codeLink">  
                <span>Design 5</span>
                <span><img src={github} className="icons" alt="..."></img></span>
                <span>REPO</span>
            </div> 
        </a>
                
        <a href="https://tiffolin.github.io/Design5/">
            <div className="projectContainer">
                <div className="topDiv container-fluid"></div>
                <div className="divUnder row">
                    <img src={fifth} className="topDiv img-fluid" alt="..."></img>
                </div>
            </div>
        </a>
    </div>

    {/* Duo Patisserie 
    <div className="ProjWrapper">  
        <a href="https://github.com/Tiffolin/duo/tree/master">
            <div className="codeLink">  
                <span>Duo Patisserie & Cafe</span>
                <span><img src={github} className="icons" alt="..."></img></span>
                <span>REPO</span>
            </div> 
        </a>
                
        <a href="https://tiffolin.github.io/duo/">
            <div className="projectContainer">
                <div className="topDiv container-fluid"></div>
                <div className="divUnder row">
                    <img src={duo} className="topDiv img-fluid" alt="..."></img>
                </div>
            </div>
        </a>
    </div>*/}

    {/* ZzzMerch  
    <div className="ProjWrapper">  
        <a href="https://github.com/Tiffolin/ZzzMerch">
            <div className="codeLink">  
                <span>ZzzMerch</span>
                <span><img src={github} className="icons" alt="..."></img></span>
                <span>REPO</span>
            </div> 
        </a>
                
        <a href="https://zzzmerch.herokuapp.com/">
            <div className="projectContainer">
                <div className="topDiv container-fluid"></div>
                <div className="divUnder row">
                    <img src={Zzzmerch} className="topDiv img-fluid" alt="..."></img>
                </div>
            </div>
        </a>
    </div>*/}


</div>

    )
}

export default Webdesigns;
