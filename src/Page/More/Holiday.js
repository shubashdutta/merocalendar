import React from "react";
import "../../css/holiday.css";
import { SidebarOnly } from "../../Component/SidebarOnly";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Holiday = () => {
  return (
    <>
      {/* <SidebarOnly /> */}
      <div className="row">
        <div className="col-lg-3">
          <SidebarOnly />
        </div>
        <div className="col-lg-9 centerdiv">
          <div className="centerdivtopitem">
            <div className="">
              <div className="Holiday_page">
                <h6>NEPALI TO ENGLISH DATE CONVERTER</h6>

                <Link to="/">
                  <button>
                    <IoIosArrowBack />
                    Back to calendar
                  </button>
                </Link>
              </div>

              <select>
                <option>2081</option>
                <option>2082</option>
                <option>2083</option>
              </select>

              {/* {Holidaypagedata.map((data, key) => (
                <div className="holiday_info">
                  <h6>{data.Title}</h6>
                  <p>{data.About}</p>
                </div>
              ))} */}

              {/* <Calendardowndiv />
              <Newsdiv />
              <NepaliBlogdiv /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Holiday;
