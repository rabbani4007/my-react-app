import React from "react";
import "./Footer.css";
import "boxicons";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2023 by RABBANI4007 | All Rights Reserved.</p>
        </div>
        <div className="footer-iconTop">
          <a href="#home">
            <box-icon name="up-arrow-alt"></box-icon>
          </a>
        </div>
      </footer>
    </>
  );
}
