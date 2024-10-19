import React, { useState } from 'react';

const projects = [
  {
    name: 'Wanderlust',
    description: 'An Airbnb clone built with the MERN stack',
    image: 'https://via.placeholder.com/300x200.png?text=Wanderlust',
    link: 'https://github.com/faijalam/wanderlust',
  },
  {
    name: 'Task Manager',
    description: 'A full-stack task management application',
    image: 'https://via.placeholder.com/300x200.png?text=Task+Manager',
    link: 'https://github.com/faijalam/task-manager',
  },
  {
    name: 'Weather App',
    description: 'A weather application using OpenWeatherMap API',
    image: 'https://via.placeholder.com/300x200.png?text=Weather+App',
    link: 'https://github.com/faijalam/weather-app',
  },
];

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-item"
            onMouseEnter={() => setActiveProject(index)}
            onMouseLeave={() => setActiveProject(null)}
          >
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            {activeProject === index && (
              <div className="project-details">
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;