import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import "boxicons";
import "./components/layout/header/Header";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import GithubSearch from "./components/github-search/GithubSearch";
import NewsPortal from "./components/news-portal/NewsPortal";
import Home from "./components/home/Home";
import About from "./components/about/About";

function App() {
  return (
    <div className="app1">
      <Router>
        <Header />

        <div className="component">
          <Routes>
            <Route path="/news-portal" element={<NewsPortal />} />
            <Route path="/contact" element={<GithubSearch />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
