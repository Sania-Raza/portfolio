function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-text">
        <p className="small-title">Hello, I'm</p>
        <h1>Sania Raza</h1>
        <h2>IT Student & Aspiring Developer</h2>
        <p className="hero-description">
          I enjoy building practical web applications, learning new technologies,
          and improving my problem-solving skills through hands-on projects.
        </p>
        <div className="button-group">
          <a className="button primary-button" href="#projects">View My Work</a>
          <a className="button secondary-button" href="/Sania-Resume.pdf" download>Download Resume</a>
        </div>
        <div className="hero-socials">
          <a href="https://github.com/Sania-Raza" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/sania-raza-1b666b296/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero.avif" alt="Sania Raza" />
      </div>
    </section>
  );
}

export default Hero;