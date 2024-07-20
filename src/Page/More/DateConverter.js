import React from "react";

import "../../css/DateConverter.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { SidebarOnly } from "../../Component/SidebarOnly";
import Newsdiv from "../../Component/Newsdiv";
import NepaliBlogdiv from "../../Component/NepaliBlogdiv";

const DateConverter = () => {
  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-lg-3">
            <SidebarOnly />
          </div>
          <div className="col-lg-9">
            <div className="centerdivtopitem">
              <div className="Date_converter_center">
                <div className="bg-color mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="p-0 m-0">NEPALI TO ENGLISH DATE CONVERTER</h6>
                    <Link to="/">
                      <button className="btn btn-success">
                        <IoIosArrowBack />
                        Back to calendar
                      </button>
                    </Link>
                  </div>

                  <div className="description my-3">
                    <p className="p-0 m-0">
                      The Bikram Sambat (BS) calendar is a lunar calendar used in
                      Nepal, India (Bharat or Hindustan), Bangladesh and some other
                      parts of south east Asia. It is based on the ancient Hindu lunar
                      calendar and is approximately 56.7 years ahead of the Gregorian
                      calendar
                    </p>

                    <p className="p-0 m-0">
                      <Link to="/"> Nepali Patro’ </Link> Date Converter: To convert a
                      date from the Bikram Sambat calendar to the Gregorian calendar
                      (AD), you can use a date converter tool available on
                    </p>
                    <p>
                      <Link to="/"> Nepali Patro</Link>
                      app and website, which allows users to input a date in the
                      Bikram Sambat (BS) calendar and convert it to a date in the
                      Gregorian calendar (AD).
                    </p>
                  </div>

                  <select className="Adtobs form-control">
                    <option value="B.StoA.D">B.S to A.D</option>
                    <option value="A.DtoB.s">A.D to B.s</option>
                  </select>

                  <div className="datechange">
                    <input type="number" value="2024" className="form-control" />
                    <select className="form-control">
                      <option>jan</option>
                      <option>Feb</option>
                      <option>Mar</option>
                      <option>Apr</option>
                      <option>May</option>
                    </select>
                    <input type="number" value="1" className="form-control" />
                  </div>

                  <div className="convert_now">
                    <button className="btn btn-danger">Convert Now</button>
                  </div>
                </div>
                <Newsdiv />
                <NepaliBlogdiv />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DateConverter;
