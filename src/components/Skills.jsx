const skillGroups = [
  { title: "Frontend", icon: "fa-code", skills: ["HTML", "CSS", "JavaScript", "ReactJS"] },
  { title: "Programming", icon: "fa-laptop-code", skills: ["Python", "Java", "C++"] },
  { title: "Database", icon: "fa-database", skills: ["MySQL","MongoDB", "MS SQL" ,"PostgreSQL"] },
  { title: "Backend / Web", icon: "fa-server", skills: ["PHP(Laravel)", "Node.js","Express.js", "NestJS"] },
  { title: "Tools", icon: "fa-toolbox", skills: ["Git", "GitHub", "Excel"] }
];

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <p className="small-title">What I use</p>
        <h2>My Skills</h2>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <div className="skill-icon"><i className={`fa-solid ${group.icon}`}></i></div>
            <h3>{group.title}</h3>
            <ul>
              {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;