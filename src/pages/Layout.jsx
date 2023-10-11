import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import NewsSection from "../components/NewsSection";
import Footer from "../components/Footer";
import axios from "axios";
import SearchResults from "../components/SearchResults";

const Layout = () => {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };
  return (
    <div>
      <div>
        <Navbar onSearch={handleSearch} />
      </div>
      <div className="flex h-full">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-3/4">
          {searchTerm ? (
            <SearchResults searchTerm={searchTerm} news={news} />
          ) : (
            <NewsSection />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
