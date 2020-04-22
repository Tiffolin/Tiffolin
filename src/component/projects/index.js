import React from "react";
// import {NavLink} from "react-router-dom";
import Insructions from "../Insructions";
import first from "../images/projScreenshot/Design1.PNG";
import second from "../images/projScreenshot/Design2.PNG";
import third from "../images/projScreenshot/Design3.PNG";
import forth from "../images/projScreenshot/Design4.PNG";
import fifth from "../images/projScreenshot/Design5.PNG";
import github from "../images/github2.png";
import recipe from "../images/projScreenshot/recipeRecite.PNG"
import clickGame from "../images/projScreenshot/testyourmemory.PNG"
import timeToGo from "../images/projScreenshot/timeToGo.png";
import duo from "../images/projScreenshot/duo.png";
// import wineAway from "../images/projScreenshot/wineAway.png";
// import pokemon from "../images/projScreenshot/pokemon.png";


function Projects() {
    return (
<div id="projects" className="row justify-content-md-center sections">        
    <p className="pageTitle col-12">Projects: Web Designs</p>
    <Insructions />

    {/* Duo Patisserie  */}
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

    <p className="pageTitle col-12">Projects : Apps</p>
    <Insructions />
    {/* Recipe Recite  */}
    <div className="ProjWrapper">  
            <a href="https://github.com/Tiffolin/Project-3_Team-2">
                <div className="codeLink">  
                    <span>Recipe Recite</span>
                    <span><img src={github} className="icons" alt="..."></img></span>
                    <span>REPO</span>
                </div> 
            </a>
                
            <a href="https://vast-cliffs-50637.herokuapp.com/">
                <div className="projectContainer">
                    <div className="topDiv container-fluid"></div>
                    <div className="divUnder row">
                        <img src={recipe} className="topDiv img-fluid" alt="..."></img>
                    </div>
                </div>
            </a>
    </div>
    {/* Time to Go  */}
    <div className="ProjWrapper">  
            <a href="https://github.com/Treudey/time-to-go-toronto">
                <div className="codeLink">  
                    <span>Time to Go</span>
                    <span><img src={github} className="icons" alt="..."></img></span>
                    <span>REPO</span>
                </div> 
            </a>
                
            <a href="https://limitless-retreat-50315.herokuapp.com/">
                <div className="projectContainer">
                    <div className="topDiv container-fluid"></div>
                    <div className="divUnder row">
                        <img src={timeToGo} className="topDiv img-fluid" alt="..."></img>
                    </div>
                </div>
            </a>
        </div>
    {/* Find a home for your Pokemon */}
    {/* <div className="ProjWrapper">  
            <a href="https://github.com/Saigonomai/Project1Team5.git">
                 <div className="codeLink">  
                     <span>Find a home for your Pokemon</span>
                     <span><img src={github} className="icons" alt="..."></img></span>
                     <span>REPO</span>
                </div> 
            </a>
                
            <a href="https://saigonomai.github.io/Project1Team5/">
                <div className="projectContainer">
                    <div className="topDiv container-fluid"></div>
                    <div className="divUnder row">
                        <img src={pokemon} className="topDiv img-fluid" alt="..."></img>
                    </div>
                </div>
            </a>
    </div> */}
    {/* Test your memory (Click Game)  */}
    <div className="ProjWrapper">  
            <a href="https://github.com/Tiffolin/Test-your-memory-Click-Game-">
                <div className="codeLink">  
                    <span>BT21 Click Game</span>
                    <span><img src={github} className="icons" alt="..."></img></span>
                    <span>REPO</span>
                </div> 
            </a>
                
            <a href="https://test-your-memory-glick-game.herokuapp.com/">
                <div className="projectContainer">
                    <div className="topDiv container-fluid"></div>
                    <div className="divUnder row">
                        <img src={clickGame} className="topDiv img-fluid" alt="..."></img>
                    </div>
                </div>
            </a>
    </div>
    {/* Wine Away  */}
    {/* <div className="ProjWrapper">  
            <a href="https://github.com/Tiffolin/Wine-Away">
                <div className="codeLink">  
                    <span>Wine Away</span>
                    <span><img src={github} className="icons" alt="..."></img></span>
                    <span>REPO</span>
                </div> 
            </a>
                
            <a href="https://wine-away.herokuapp.com/">
                <div className="projectContainer">
                    <div className="topDiv container-fluid"></div>
                    <div className="divUnder row">
                        <img src={wineAway} className="topDiv img-fluid" alt="..."></img>
                    </div>
                </div>
            </a>
    </div> */}

</div>

    )
}

export default Projects;
