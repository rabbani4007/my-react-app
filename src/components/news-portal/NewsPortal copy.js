import React, { useState, useEffect } from "react";
import "./NewsPortal.css";
import "boxicons";

import api from "../../services/news-api";

export default function NewsPortal() {
  const [newsArticles, setNewsArticles] = useState([]);

  // fetch the news getTopHeadlines
  async function getTopHeadlines(country) {
    const result = await api.getTopHeadlines(country).then((data) => {
      setNewsArticles([...data.articles]);
      console.log(newsArticles);
    });
  }

  useEffect(() => {
    getTopHeadlines("in");
  }, []);

  return (
    <>
      <section className="news-portal" id="news-portal">
        <h2 className="heading">
          Latest <span>News</span>
        </h2>

        <div className="news-portal-container">
          {newsArticles &&
            newsArticles.map((newsArticle, index) => (
              <div className="news-portal-box" key={index}>
                <img src="images/project-1.jpg" alt="" />
                <div className="news-portal-layer">
                  <h4>{newsArticle.title}</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nulla, similique.
                  </p>
                  <a
                    href="https://rabbani4007.github.io/resume/"
                    target="_blank"
                  >
                    <box-icon name="rocket" id="menu-icon"></box-icon>
                  </a>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
