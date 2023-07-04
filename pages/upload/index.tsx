import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header";
import Mainn from "@/Components/Mainn";
import SideBar from "@/Components/SideBar";
import React from "react";

const UploadFiles = () => {
  return (
    <div className="upload-files">
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
            <Mainn />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UploadFiles;
