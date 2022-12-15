import React from "react";
import "./portfolio.css";
import landingpage from "../../assets/shop.png";
import quiz from "../../assets/quiz.png";
import drawing from "../../assets/drawing.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={landingpage} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/rezazain/Shop"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://shopminiapp.netlify.app/"
              className="btn"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={quiz} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/rezazain/Quiz"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://quizminiapp.netlify.app/"
              className="btn"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={drawing} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            {" "}
            <a
              href="https://drawingminiapp.netlify.app/"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://shopminiapp.netlify.app/"
              className="btn"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
