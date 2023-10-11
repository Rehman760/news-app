import React from "react";

const SearchResults = ({ searchTerm, news }) => {
  // Filter the news based on the search term
  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 h-full">
      <h2>Search Results</h2>
      {filteredNews.length > 0 ? (
        filteredNews.map((article) => (
          <div key={article.title} className="mb-4">
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-full h-auto"
            />
            <h3 className="text-lg font-semibold mt-2">
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </h3>
            <p>{article.description}</p>
          </div>
        ))
      ) : (
        <div className="h-full">
          <p>No results found.</p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
