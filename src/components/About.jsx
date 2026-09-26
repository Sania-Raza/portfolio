function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-heading">
        <p className="small-title">Get to know me</p>
        <h2>About Me</h2>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src="/images/myimg.png" alt="Sania Raza" />
        </div>
        <div className="about-text">
          <p>Hello! I'm Sania Raza, an IT student and aspiring developer who enjoys turning ideas into practical software projects.</p>
          <p>I have worked with technologies including HTML, CSS, JavaScript, Python, Java, C++, PHP, React, MySQL and SQL Server. I am especially interested in improving my web development and problem-solving skills through real projects.</p>
          <p>My goal is to keep learning, build useful applications, and gain professional experience through internships and development work.</p>
          <a className="button primary-button" href="/Sania-Resume.pdf" download>Download Resume</a>
        </div>
      </div>
    </section>
  );
}

export default About;