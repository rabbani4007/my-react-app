import React from "react";
import "./GithubSearch.css";
import "boxicons";
export default function GithubSearch() {
  return (
    <div className="github-search">
      <h1>GithubSearch TEst</h1>
      <form className="example" action="">
        <input type="text" placeholder="Search github repos.." name="search" />
        <button type="submit">
          <box-icon name="search"></box-icon>
        </button>
      </form>
    </div>
  );
}
