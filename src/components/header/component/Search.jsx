import React from "react";

const Search = () => {
  return (
    <>
      <div className="search">
        <div className="search__input">
          <input type="text" placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..." />
          <div className="search-dropdown">
            <h3>Lịch sử tìm kiếm</h3>
            <ul>
              <li><a href="#"> thịt</a></li>
            </ul>
          </div>
        </div>
        <button>
          <img src="./assets/img/icon-search.png" alt="" />
          Tìm Kiếm
        </button>
      </div>
    </>
  );
};

export default Search;
