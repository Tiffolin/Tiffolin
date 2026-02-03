import React from "react";
import Instructions from "../instructions/Instructions";
import github from "../images/github2.png";

import first from "../images/projScreenshot/Design1.PNG";
import second from "../images/projScreenshot/Design2.PNG";
import third from "../images/projScreenshot/Design3.PNG";
import forth from "../images/projScreenshot/Design4.PNG";
import fifth from "../images/projScreenshot/Design5.PNG";

const WEB_DESIGNS = [
  { title: "Design 1", repo: "https://github.com/Tiffolin/Design1", live: "https://tiffolin.github.io/Design1/", image: first },
  { title: "Design 2", repo: "https://github.com/Tiffolin/Design2", live: "https://tiffolin.github.io/Design2/", image: second },
  { title: "Design 3", repo: "https://github.com/Tiffolin/Design3", live: "https://tiffolin.github.io/Design3/", image: third },
  { title: "Design 4", repo: "https://github.com/Tiffolin/Design4", live: "https://tiffolin.github.io/Design4/", image: forth },
  { title: "Design 5", repo: "https://github.com/Tiffolin/Design5", live: "https://tiffolin.github.io/Design5/", image: fifth },
];

const Webdesigns = () => {
  return (
    <div className= "page">
    <section className="projects projects--web">
      <h2 className="projects__title">Projects: Web Designs</h2>
      <Instructions />

      <div className="projects__grid">
        {WEB_DESIGNS.map(({ title, repo, live, image }) => (
          <div className="project-card" key={title}>
            <a href={repo} className="project-card__repo">
              <span>{title}</span>
              <img src={github} alt="GitHub" />
              <span>REPO</span>
            </a>

            <a href={live} className="project-card__preview">
              <img src={image} alt={`${title} screenshot`} />
            </a>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Webdesigns;
