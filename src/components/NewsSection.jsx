import React, { useEffect, useState } from "react";
import axios from "axios";

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [visibleArticles, setVisibleArticles] = useState(3); // Initial number of articles to show
  const articlesPerPage = 3; // Number of articles to load at once

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axios.get(
          "https://saurav.tech/NewsAPI/everything/cnn.json"
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }

    fetchNews();
  }, []);

  const handleViewMore = () => {
    setVisibleArticles(visibleArticles + articlesPerPage);
  };

  return (
    <div className="p-4">
      <h2>News Section</h2>
      {news.slice(0, visibleArticles).map((article) => (
        <div key={article.title} className="mb-4">
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-2/3 rounded"
          />
          <h3 className="text-lg font-semibold mt-2">
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </h3>
          <p>{article.description}</p>
        </div>
      ))}
      {visibleArticles < news.length && (
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded"
          onClick={handleViewMore}
        >
          View More
        </button>
      )}
    </div>
  );
};

export default NewsSection;
