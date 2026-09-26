function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-heading">
        <p className="small-title">Let's connect</p>
        <h2>Contact Me</h2>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Have a project or opportunity?</h3>
          <p>Feel free to reach out. I am open to learning opportunities, internships, collaborations, and development projects.</p>
          <div className="contact-links">
            <a href="https://github.com/Sania-Raza" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i> GitHub</a>
            <a href="https://www.linkedin.com/in/sania-raza-1b666b296/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
          </div>
        </div>
        <form className="contact-form" action="https://formsubmit.co/sania.raza.pk@email.com" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="Message" placeholder="Your Message" rows="6"></textarea>
          <button type="submit">Send Message</button>
          <input type="hidden" name="_next" value="https://684b300fb827224ab6df18ac--hilarious-cactus-c2311f.netlify.app/" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
        </form>
      </div>
    </section>
  );
}

export default Contact;