import React from "react";
import github from "../images/github2.png";
import Instructions from "../instructions/instructions";
import pokemon from "../images/projScreenshot/pokemon.png";

// import {NavLink} from "react-router-dom";
//import duo from "../images/projScreenshot/duo.png";
//import Zzzmerch from "../images/projScreenshot/Zzzmerch.png";
//import recipe from "../images/projScreenshot/recipeRecite.PNG"
//import clickGame from "../images/projScreenshot/testyourmemory.PNG"
//import timeToGo from "../images/projScreenshot/timeToGo.png";
// import wineAway from "../images/projScreenshot/wineAway.png";

function AppProjects() {
    return (
<div id ="about" className="row justify-content-md-center sections">        
    <p className="pageTitle col-12">Projects : Apps</p>
    <Instructions />

        {/* Find a home for your Pokemon */}
        <div className="ProjWrapper2">  
            <a href="https://github.com/Tiffolin/Find-a-Home-for-my-Pokemon">
                 <div className="codeLink2">  
                     <span>Find a home for my Pokémon </span>
                     <span><img src={github} className="icons" alt="..."></img></span>
                     <span>REPO</span>
                </div> 
            </a>
                
            <a href="https://tiffolin.github.io/Find-a-Home-for-my-Pokemon/">
                <div className="projectContainer2">
                    <div className="topDiv2 container-fluid"></div>
                    <div className="divUnder2 row">
                        <img src={pokemon} className="topDiv2 img-fluid" alt="..."></img>
                    </div>
                </div>
            </a>
        </div>
    {/* Recipe Recite  
    <div className="ProjWrapper">  
            <a href="https://github.com/Tiffolin/Recipe-Recite">
                <div className="codeLink">  
                    <span>Recipe Recite</span>
                    <span><img src={github} className="icons" alt="..."></img></span>
                    <span>REPO</span>
                </div> 
            </a>
                
            <a href="https://recipe-recite-app.herokuapp.com/">
                <div className="projectContainer">
                    <div className="topDiv container-fluid"></div>
                    <div className="divUnder row">
                        <img src={recipe} className="topDiv img-fluid" alt="..."></img>
                    </div>
                </div>
            </a>
    </div>*/}

    {/* BT21Game (Click Game) 
    {/* <div className="ProjWrapper">  
            <a href="https://github.com/Tiffolin/BT21-Game">
                <div className="codeLink">  
                    <span>BT21 Click Game</span>
                    <span><img src={github} className="icons" alt="..."></img></span>
                    <span>REPO</span>
                </div> 
            </a>
                
            <a href="https://bt21game.herokuapp.com/">
                <div className="projectContainer">
                    <div className="topDiv container-fluid"></div>
                    <div className="divUnder row">
                        <img src={clickGame} className="topDiv img-fluid" alt="..."></img>
                    </div>
                </div>
            </a>
    </div>
    */}
    {/* Time to Go  
    {/* <div className="ProjWrapper">  
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
*/}
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

export default AppProjects;
