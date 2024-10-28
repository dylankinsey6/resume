import React from "react";
const projects = [
    { name: "Portfolio Website", description: "A personal portfolio built with Next.js." },
    { name: "E-commerce Site", description: "An online store with a responsive design and user authentication." },
  ];
  
  const Projects: React.FC = () => {
    return (
      <section className="p-8 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="border p-4 rounded-md">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  export default Projects
  