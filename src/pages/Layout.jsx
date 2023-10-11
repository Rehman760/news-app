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
    <div className="min-h-screen flex flex-col">
      <Navbar onSearch={handleSearch} />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 bg-gray-200">
          <Sidebar />
        </div>
        <div className="w-full md:w-3/4 bg-gray-100">
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
