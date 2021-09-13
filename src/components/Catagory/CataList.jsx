import React from "react";
import CataItem from "./CataItem";

const CataList = () => {
  return (
    <>
      <div className="container">
        <div className="nav-tabbar">
          <ul>
          <CataItem/>
          <CataItem/>
          <CataItem/>
          <CataItem/>
           
          </ul>
        </div>
      </div>
    </>
  );
};

export default CataList;
