import React from "react";
import NavList from "./component/NavList";
import Search from "./component/Search";
import Suggestions from "./component/Suggestions";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="top-wrap">
            <div className="header__left">
              <div className="logo-menu">
                <div className="logo-wrap">
                  <a href="#" className="logo">
                    <img src="./assets/img/logo.png" alt="" />
                  </a>
                </div>
                <a className="menu-btn">
                  <img src="./assets/img/icon-nav.png" alt="" />
                  <div className="wrap">
                    <span>Danh Mục</span>
                    <span className="text-icon">
                      Sản Phẩm
                      <img src="./assets/img/icon-down.png" alt="" />
                    </span>
                  </div>
                </a>
              </div>
            {/* search */}
            <Search/>
            </div>
            <div className="header__right">
              <div className="user">
                <img
                  className="user__img"
                  src="./assets/img/icon-user.png"
                  alt=""
                />
                <div className="user__text">
                  <span>Tài Khoản</span>
                  <span className="account-label">
                    <span>Mai Hoa</span>
                    <img src="./assets/img/icon-down.png" alt="" />
                  </span>
                </div>
                <div className="user__dropdown">
                  <a href="#">
                    <p className="title">Đơn hàng của tôi</p>
                  </a>
                  <a href="#">
                    <p className="title">Thoát tài khoản</p>
                  </a>
                </div>
              </div>
              <div className="cart">
                <div className="cart__icon">
                  <img src="./assets/img/icon-cart.png" alt="" />
                  <span>1</span>
                </div>
                <div className="cart__text"> Giỏ Hàng</div>
              </div>
            </div>
            <NavList/>
          </div>
          <div className="bottom-wrap">
            <div className="wrap-left">
              <a href="#" className="freeship">
                <img src="./assets/img/icon-freeship.png" alt="" />
              </a>
              <Suggestions/>
            </div>
            <div className="wrap-right">
              <div className="seller">
                <i className="fa fa-home" aria-hidden="true" />
                <span>Bán hàng cùng Tiki</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
