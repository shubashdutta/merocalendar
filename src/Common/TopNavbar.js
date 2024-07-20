import React, { useEffec, useEffect, useState } from "react";
import "../css/topnavbar.css";
import { FaRegSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light-theme"
  );

  const togglemode = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <div className="Topnavbar">
        <ul className="flex">
          <li>Contact</li>
          <li>Subscription</li>
          <li className="icon">
            <FaFacebook style={{ marginRight: "10px", fontSize: "15px" }} />
          </li>
          <li>
            <SiInstagram style={{ marginRight: "10px", fontSize: "15px" }} />
          </li>
          <li>
            <FaXTwitter style={{ marginRight: "10px", fontSize: "15px" }} />
          </li>
          <li>
            <IoLogoYoutube style={{ marginRight: "10px", fontSize: "15px" }} />
          </li>
        </ul>

        <ul className="End-side">
          <li id="dark" onClick={togglemode}>
            {theme === "dark-theme" ? (
              <FaMoon style={{ marginRight: "10px" }} />
            ) : (
              <FaRegSun style={{ marginRight: "10px" }} />
            )}
            Theme
          </li>

          <div class="dropdown">
            <li class="dropbt">Language</li>
            <div class="dropdown-content">
              <Link>English</Link>
              <Link>Hind</Link>
              <Link>Nepali</Link>
            </div>
          </div>

          <li style={{ marginTop: "0px" }}>
            <IoMdNotifications />
          </li>
        </ul>
      </div>
      {/* <Navbar />
      <Sidebardiv /> */}

      {/* <Cele /> */}
    </>
  );
};

export default TopNavbar;
