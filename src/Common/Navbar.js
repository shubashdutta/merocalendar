import React from "react";
import { Link } from "react-router-dom";
import { MdMobileFriendly } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";

import logo from "../Assets/Img/2.png";

const Navbar = () => {
  return (
    <>
      <div className="sticky-top">
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light "
          id="navbar"
        >
          <Link className="navbar-brand" to="/">
            <img src={logo}  alt={logo} className="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto align-items-center">
              <li className="nav-item active">
                <Link className="nav-link" to="/" id="navbarcalendar">
                  Calendar <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="navbaritem" to="/Horoscope">
                  Horoscope
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="navbaritem" to="/Paramasha">
                  Paramarsha
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" id="navbaritem" to="/Bolgs_page">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="navbaritem" to="/New's">
                  News
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" id="navbaritem" to="/Nepali-Radio's">
                  Radios
                </Link>
              </li>
              <div class="dropdown">
                <li class="dropbtn">
                  More <FaAngleDown />
                </li>
                <div class="dropdown-content">
                  <Link to="/Forex">Forex</Link>
                  <Link to="/Gold-silver-rates">Bullion</Link>
                  <Link to="/Nepali-to-english-date">Date Converter</Link>
                  <Link to="/Nepali-Holiday">Government Holiday</Link>
                  <Link to="/Suva-sait">Suva sait and Muhurat</Link>
                </div>
              </div>
            </ul>
            <form className="navabar-end">
              <Link to="">
                {" "}
                <li
                  className="app"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MdMobileFriendly style={{ marginRight: "5px" }} />
                  Apps
                </li>
              </Link>

              <Link to="/login_mero-calendar">
                <button
                  class="btn"
                  type="submit"
                  style={{ fontWeight: "bold", cursor: "pointer" }}
                >
                  <CiLogin /> Login
                </button>
              </Link>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
