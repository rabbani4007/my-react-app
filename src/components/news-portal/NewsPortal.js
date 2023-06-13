import React, { useState, useEffect } from "react";
import "./NewsPortal.css";
import "boxicons";

import api from "../../services/news-api";

export default function NewsPortal() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [totalArticles, setTotalArticles] = useState(0);

  // fetch the news getTopHeadlines
  async function getTopHeadlines(country) {
    const result = await api.getTopHeadlines(country).then((data) => {
      setNewsArticles([...data.articles]);
      setTotalArticles(data.totalResults);
      console.log(newsArticles);
      console.log(data.totalResults);
    });
  }

  useEffect(() => {
    getTopHeadlines("in");
  }, []);

  return (
    <>
      <div className="news-portal">
        <h2>News Portal</h2>
      </div>
      <section className="content-wrapper">
        {newsArticles &&
          newsArticles.map((newsArticle, index) => (
            <div className="news-card" key={index}>
              <a
                href={newsArticle.url}
                target="_blank"
                className="news-card__card-link"
              ></a>
              <img
                src={newsArticle.urlToImage}
                alt=""
                className="news-card__image"
              />
              <div className="news-card__text-wrapper">
                <h2 className="news-card__title">{newsArticle.title}</h2>
                <div className="news-card__post-date">
                  {newsArticle.publishedAt}
                </div>
                <div className="news-card__details-wrapper">
                  <p className="news-card__excerpt">
                    {newsArticle.description}&hellip;
                  </p>
                  <a
                    href={newsArticle.url}
                    target="_blank"
                    className="news-card__read-more"
                  >
                    Read more <i className="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
      </section>
    </>
  );
}
