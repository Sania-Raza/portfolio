import { articles } from "../data/articles";

function Articles() {
  return (
    <section className="section articles-section" id="articles">
      <div className="section-heading">
        <p className="small-title">Writing & learning</p>
        <h2>LinkedIn Articles</h2>
      </div>
      {articles.length > 0 ? (
        <div className="articles-grid">
          {articles.map((article) => (
            <article className="article-card" key={article.title}>
              <div className="article-icon"><i className="fa-brands fa-linkedin-in"></i></div>
              <div>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.link} target="_blank" rel="noreferrer">
                  Read Article <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="articles-empty">
          <i className="fa-brands fa-linkedin"></i>
          <h3>My LinkedIn Articles</h3>
          <p>Add your LinkedIn article links in <strong>src/data/articles.js</strong> and they will appear here.</p>
          <a className="button secondary-button" href="https://www.linkedin.com/in/sania-raza-1b666b296/" target="_blank" rel="noreferrer">
            Visit LinkedIn
          </a>
        </div>
      )}
    </section>
  );
}

export default Articles;