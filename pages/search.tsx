import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header";
import Searchbar from "@/Components/Searchbar";
import SideBar from "@/Components/SideBar";
import React from "react";

const Search = () => {
  return (
    <div className="">
      <Header isLogged />
      <div className="main-area">
        <div className="search-wrap">
          <SideBar
            sideBarName="Welcome back @username"
            uploadFile="Upload"
            searchArea="Search"
            analyticsArea="Analytics"
          />
          <div className="right-area">
            <Searchbar
              type="text"
              placeholder="Type in a keyword to begin search|"
              text="Search"
            />
            <div className="search-error">
                <strong className="error-text">Error</strong>
                <p>No results were found for “Keyword”</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
