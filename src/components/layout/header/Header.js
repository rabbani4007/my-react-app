import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "boxicons";

export default function Header() {
  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          <span>R</span>ABBANI4007
        </Link>
        <box-icon name="menu" id="menu-icon"></box-icon>
        <nav className="navbar">
          <Link to="/" className="active">
            Home
          </Link>
          <Link to="/news-portal">News Portal</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </header>
    </>
  );
}
