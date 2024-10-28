import React from "react";
const experiences = [
    { role: "Frontend Developer", company: "Tech Corp", duration: "2022 - Present" },
    { role: "Web Developer Intern", company: "Web Solutions", duration: "2021 - 2022" },
  ];
  
  const Experience: React.FC = () => {
    return (
      <section className="p-8 bg-white">
        <h2 className="text-2xl font-bold text-center mb-4">Experience</h2>
        <ul className="space-y-4">
          {experiences.map((exp, index) => (
            <li key={index} className="border p-4 rounded-md">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p>{exp.company}</p>
              <p>{exp.duration}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  
export default Experience