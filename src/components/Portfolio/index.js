import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'note-taker',
      description: 'MERN Stack',
      link: "https://note-taker01.herokuapp.com",
      repo: "https://lim204.github.io/note-taker/"
    },
    {
      name: 'weather-dashboard',
      description: 'MERN Stack',
      link: "https://lim204.github.io/Weather-Dashboard/",
      repo: "https://lim204.github.io/Weather-Dashboard/"
    },
    {
      name: 'spin-the-globe',
      description: 'HTML/CSS',
      link: "https://repopanda.github.io/spin-the-globe/",
      repo: "https://github.com"
    },
    {
      name: 'leftovers',
      description: 'Node/IoT',
      link: "https://leftovers.herokuapp.com",
      repo: "https://github.com"
    },
    {
      name: 'workday-scheduler',
      description: 'React/JavaScript/CSS',
      link: "https://lim204.github.io/workday-scheduler/",
      repo: "https://github.com"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
