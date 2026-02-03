import React from "react";

import Instructions from "../instructions/Instructions";
import githubIcon from "../images/github2.png";
import pokemonImage from "../images/projScreenshot/pokemon.png";

const projects = [
  {
    title: "Find a home for my Pokémon",
    repo: "https://github.com/Tiffolin/Find-a-Home-for-my-Pokemon",
    live: "https://tiffolin.github.io/Find-a-Home-for-my-Pokemon/",
    image: pokemonImage,
  },
];

const AppProjects = () => {
  return (
    <div className= "page">
    <section className="projects">
      <h2 className="projects__title">Projects : Apps</h2>

      <Instructions />

      <div className="projects__grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <a
              href={project.repo}
              className="project-card__repo"
              target="_blank"
              rel="noreferrer"
            >
              <span>{project.title}</span>
              <img
                src={githubIcon}
                alt="GitHub repository"
                className="project-card__icon"
              />
              <span>REPO</span>
            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="project-card__preview"
            >
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="project-card__image img-fluid"
              />
            </a>
          </article>
        ))}
      </div>
    </section>
    </div>
  );
};

export default AppProjects;
