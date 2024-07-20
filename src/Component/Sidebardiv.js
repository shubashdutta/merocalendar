/* eslint-disable no-undef */
import React from "react";
import { IoCalendarSharp } from "react-icons/io5";

import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

import { IoIosPrint } from "react-icons/io";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import "react-ad-bs-calendar/dist/style.css";
import "../css/celendar.css";
import Calendar from "react-ad-bs-calendar";
// import CurrencyConverter from "./Nepalicalendar";
import Centerpagedown from "./Centerpagedown";
import { SidebarOnly } from "./SidebarOnly";
import { Link } from "react-router-dom";

const Sidebardiv = () => {
  // const apiformoneychnager = async () => {
  //   try {
  //     const apidata = await fetch(
  //       "https://api.exchangerate-api.com/v4/latest/USD",
  //       {
  //         method: "GET",
  //       }
  //     );

  //     if (apidata.status !== 200) {
  //       throw new Error("error");
  //     }

  //     const result = await apidata.json();

  //     // eslint-disable-next-line array-callback-return
  //     Array.of(result).map((data) => {
  //       console.log(data.rates);
  //     });
  //   } catch (error) {
  //     console.log("error to get data ");
  //   }
  // };

  return (
    <>
      <div className="container-fluid mt-4">
        <div className="side-div1 row">
          <div className="col-lg-3">
            <SidebarOnly />
          </div>
          <div className="col-lg-9">
            <div className="centerdivtopitem">
              <h5>Ashar 2081 | Jun/Jul 2024</h5>

              <form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>

              <Link to="/merocalendar">
                <button className="Mycalendars">
                  <IoCalendarSharp
                    style={{ marginRight: "10px", fontSize: "20px" }}
                  />
                  My Calendars
                </button>
              </Link>
            </div>
            <div class="mail-tools tooltip-demo m-t-md">
              <div class="btn-group float-right mb-2 mx-1">
                <button class="btn btn-default btn-lg large-width">
                  Yearly
                </button>
                <button
                  class="btn btn-default btn-lg large-width"
                  title="List/Grid View"
                >
                  <BsFillGrid3X3GapFill />
                </button>
                <button
                  class="btn btn-default btn-lg large-width"
                  title="Print"
                >
                  <IoIosPrint />
                </button>
              </div>
              <div class="header-button">
                <div class="btn-group mb-2 mx-1">
                  <button
                    data-toggle="dropdown"
                    class="btn btn-default btn-lg dropdown-toggle"
                    aria-expanded="false"
                  >
                    B.S.
                  </button>
                  <ul
                    class="dropdown-menu w-100 text-center"
                    x-placement="bottom-start"
                  >
                    <li class="dropdown-item">A.D.</li>
                    <li class="dropdown-item">B.S.</li>
                  </ul>
                </div>
                <div class="btn-group mb-2 mx-1">
                  <button class="btn btn-default btn-lg px-4" title="Previous">
                    <FaChevronCircleLeft />
                  </button>
                  <button class="btn btn-default btn-lg">Current Month</button>
                  <button class="btn btn-default btn-lg px-4" title="Next">
                    <FaChevronCircleRight />
                  </button>
                </div>
                <div class="btn-group mb-2 mx-1">
                  <button class="btn btn-default btn-lg">
                    Select Year and Month
                  </button>
                </div>
              </div>
            </div>
            <hr style={{ color: "#ef3a0c" }} />

            <div>
              <Calendar />
            </div>

            <Centerpagedown />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebardiv;
