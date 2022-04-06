import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/logo-motela.png";
import { HiOutlineMail, HiOutlineClock } from 'react-icons/hi';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="header">
      <div className="header__top">
        <div className="header__top__left">
          <p className="header__top__left__email"> <HiOutlineMail className="font-bold" /> <span>motala@gmail.com</span></p>
          <p className="header__top__left__time"> <HiOutlineClock /><span> MON - SAT: 08.00 - 22:00</span></p>
        </div>
        <div className="header__top__right">
          <FaShoppingCart/> <span> Cart : 0 Items - $0.00</span>
        </div>
      </div>
      <div className="header__bottom">
        <div className="header__bottom__logo">
          <img src={logo} alt="" />
        </div>
        <div className="header__bottom__navigation">
          <div>
            <div className="container">
              <nav className="header__bottom__navigation__wrapper">
                <div className="flex items-center mean-menu">
                  <ul className="flex navbar-nav">
                    <li className="menu-item dropdown active nav-item">
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                      <ul className="dropdown-menu" role="menu">
                        <li className="menu-item nav-item">
                          <Link to="/" className="dropdown-item">
                            Home One
                          </Link>
                        </li>
                        <li className="menu-item nav-item">
                          <Link to="/" className="dropdown-item">
                            Home Two
                          </Link>
                        </li>
                        <li className="menu-item nav-item">
                          <Link to="/" className="dropdown-item">
                            Home Three
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item dropdown nav-item">
                      <Link to="/" className="nav-link">
                        Room
                      </Link>
                      <ul className="dropdown-menu" role="menu">
                        <li className="menu-item nav-item">
                          <Link to="/" className="dropdown-item">
                            Room
                          </Link>
                        </li>
                        <li className="menu-item nav-item">
                          <Link to="/" className="dropdown-item">
                            Single Room
                          </Link>
                        </li>
                        <li className="menu-item nav-item">
                          <Link to="/" className="dropdown-item">
                            Double Room
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="menu-item dropdown nav-item">
                      <Link to="/" className="nav-link">
                        About
                      </Link>
                      <ul className="dropdown-menu" role="menu">
                        <li className="menu-item nav-item">
                          <Link to="/" className="dropdown-item">
                            About 1
                          </Link>
                        </li>

                        <li className="menu-item nav-item">
                          <Link to="/" className="dropdown-item">
                            About 2
                          </Link>
                        </li>
                        <li className="menu-item nav-item">
                          <Link to="/" className="dropdown-item">
                            About 3
                          </Link>
                        </li>
                        <li className="menu-item nav-item">
                          <Link to="/" className="dropdown-item">
                            About 4
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item dropdown nav-item">
                      <Link to="/" className="nav-link">
                        Shop
                      </Link>
                      <ul className="dropdown-menu" role="menu">
                        <li className="menu-item nav-item">
                          <Link to="/" className="dropdown-item">
                            Shop 1
                          </Link>
                        </li>
                        <li className="menu-item nav-item">
                          <Link to="/" className="dropdown-item">
                            Shop 2
                          </Link>
                        </li>
                        <li className="menu-item nav-item">
                          <Link to="/" className="dropdown-item">
                            Shop 4
                          </Link>
                        </li>
                        <li className="menu-item nav-item">
                          <Link to="/" className="dropdown-item">
                            Shop 3
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="menu-item dropdown nav-item">
                      <Link to="/" className="nav-link">
                        Pages
                      </Link>
                      <ul className="dropdown-menu" role="menu">
                        <li className="menu-item nav-item">
                          <Link to="/" className="dropdown-item">
                            Prices
                          </Link>
                        </li>
                        <li className="menu-item nav-item">
                          <Link to="/" className="dropdown-item">
                            Gallery
                          </Link>
                        </li>

                        <li className="menu-item nav-item">
                          <Link to="/" className="dropdown-item">
                            FAQ’s
                          </Link>
                        </li>
                        <li className="menu-item nav-item">
                          <Link to="/404" className="dropdown-item">
                            404
                          </Link>
                        </li>

                        <li className="menu-item nav-item">
                          <Link to="/" className="dropdown-item">
                            Coming Soon
                          </Link>
                        </li>
                        <li className="menu-item nav-item">
                          <Link to="/" className="nav-link">
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item dropdown nav-item">
                      <Link to="/" className="nav-link">
                        News
                      </Link>
                      <ul className="dropdown-menu" role="menu">
                        <li className="menu-item nav-item">
                          <Link to="/" className="dropdown-item">
                            Our news
                          </Link>
                        </li>

                        <li className="menu-item nav-item">
                          <Link to="/" className="dropdown-item">
                            World News
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item dropdown nav-item">
                      <Link to="/" className="nav-link">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className="header__bottom__btn">
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
