// Skills.js
import React, { useEffect, useState } from 'react';
import './Skills.css';

const SkillItem = ({ skill, level }) => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Trigger initial animation on load
    const initialTimeout = setTimeout(() => {
      setHovered(true);
    }, 100); // Adjust the timeout value for the initial animation duration

    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <div className={`skill-item`}>
      <div className="skill-name">{skill}</div>
      <div className="skill-level">
        <div className="skill-fill" style={{ width: `${hovered ? level : 0}%` }}></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="skills-list">
        <SkillItem skill="JavaScript" level={80} />
        <SkillItem skill="React" level={75} />
        <SkillItem skill="Node.js" level={70} />
        <SkillItem skill="HTML/CSS" level={85} />
        <SkillItem skill="Python" level={65} />
        {/* Add more skills as needed */}
      </div>
    </div>
  );
};

export default Skills;
