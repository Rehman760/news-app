import axios from "axios";
import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;

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

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = news.slice(indexOfFirstArticle, indexOfLastArticle);

  return (
    <div className="bg-gray-200 p-4 h-full border-spacing-1 border-yellow-50">
      <h2>Latest News</h2>
      <ul>
        {currentArticles.map((item) => (
          <li key={item.title}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-none  text-2xl space-x-2"
            >
              {item.title}
            </a>
            <img src={item.urlToImage} alt={item.title} />
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <button
          className="bg-blue-500 text-white px-2 py-1"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>{" "}
        <button
          className="bg-blue-500 text-white px-2 py-1"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastArticle >= news.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
