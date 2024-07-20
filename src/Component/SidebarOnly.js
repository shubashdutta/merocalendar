import React, { useEffect, useState } from "react";
import { LuSunset } from "react-icons/lu";
import { TiStarburstOutline } from "react-icons/ti";
import { WiSunrise } from "react-icons/wi";
import { Link } from "react-router-dom";

import { TiStarburst } from "react-icons/ti";

import { IoIosArrowDown } from "react-icons/io";

import { MdKeyboardArrowUp } from "react-icons/md";

export const SidebarOnly = () => {
  const [localtime, setLoaclTime] = useState("");

  const timeinsec = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    let seconds = date.getSeconds();

    const AMpm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;

    const minutesStr = minutes < 10 ? "0" + minutes : minutes;
    const secondsStr = seconds < 10 ? "0" + seconds : seconds;
    const showTime = hours + ":" + minutesStr + ":" + secondsStr + " " + AMpm;

    setLoaclTime(showTime);
  };

  const [Isclicked, setIsClicked] = useState(false);

  const handleToggle = () => {
    setIsClicked(!Isclicked);
  };

  const [StarIsClicked, setStarIsClicked] = useState(false);

  const starisclicked = () => {
    setStarIsClicked(!StarIsClicked);
  };

  useEffect(() => {
    const interval = setInterval(timeinsec, 1000);
    return () => clearInterval(interval);
  });
  return (
    <>
      <div className="sidebar">
        <div className="inside-div">
          <div className="d-flex justify-content-between">
            <ul className="p-0 m-0 date-wrapper">
              <div className="day">
                <h2>24</h2>
                <span>Monday</span>
              </div>
              <p className="m-0 p-0">08 July, 2024</p>
            </ul>
            <div className="date-content">
              <h4 className="p-0 m-0">Ashar,2081</h4>
              <p className="p-0 m-0 mt-2 mb-2"> N.S. 1144, Dillatho </p>
              <p className="p-0 m-0"> Tritiya, Asadh Shuklapaksha </p>
            </div>
          </div>

          <div className="news-content border-top border-bottom mt-2 mb-2">
            <p className="m-0">
              Luto Falne, Kandakarak Puja, Dakshinaya Start, Shrawane Sankranti
            </p>
          </div>
          <div className="Timedate">
            <h2>{localtime}</h2>

            <div className="sun">
              <div className="sunicon">
                <div className="d-flex flex-column align-items-center">
                  <WiSunrise style={{ fontSize: "16px" }} />
                  <li>05:15</li>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <LuSunset style={{ fontSize: "16px" }} />
                  <li>19:04</li>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3  mb-3 text-right">
            <p className="ptag" onClick={handleToggle}>
              Today's panchange{" "}
              {Isclicked ? (
                <>
                  <MdKeyboardArrowUp />
                </>
              ) : (
                <>
                  <IoIosArrowDown />
                </>
              )}
            </p>
          </div>

          {Isclicked && (
            <div className="panchanga-form border">
              <div className="grid column-2 text-center">
                <div className="border">
                  <p>
                    <strong> वि.सं.</strong>
                  </p>
                  <p>Shrawan 02, 2081</p>
                </div>
                <div className="border">
                  <p>
                    <strong>ई.सं.</strong>
                  </p>
                  <p>17 Jul, 2024</p>
                </div>
                <div className="border">
                  <p>
                    <strong> शक संवत्</strong>
                  </p>
                  <p>११४४ दिल्लाथ्व</p>
                </div>
                <div className="border">
                  <p>
                    <strong>नेपाल संवत्</strong>
                  </p>
                  <p>११४४ दिल्लाथ्व</p>
                </div>
              </div>

              <div className="grid column-3 text-center">
                <div className="border">
                  <p>कालयुक्त</p>
                </div>
                <div className="border">
                  <p>दक्षिणायन</p>
                </div>
                <div className="border">
                  <p>वर्षा</p>
                </div>
              </div>

              <div className="grid column-2 text-center">
                <div className="border">
                  <p>बुधवार</p>
                </div>

                <div className="border">
                  <p>आषाढ शुक्लपक्ष</p>
                </div>
              </div>

              <div className="grid column-2 text-center">
                <div className="border">
                  <p>
                    <strong>तिथि</strong>
                  </p>
                </div>
                <div className="border">
                  <p>एकादशी १८:०२ बजेसम्म, त्यसपछी द्वादशी</p>
                </div>
                <div className="border">
                  <p>
                    <strong>नक्षत्र</strong>
                  </p>
                </div>
                <div className="border">
                  <p>अनुराधा ०१:२७ बजेसम्म, त्यसपछी ज्येष्ठा</p>
                </div>

                <div className="border">
                  <p>
                    <strong>योग</strong>
                  </p>
                </div>

                <div className="border">
                  <p>शुभ ०६:०३ बजेसम्म, त्यसपछी शुक्ल</p>
                </div>

                <div className="border">
                  <p>
                    <strong>करण</strong>
                  </p>
                </div>

                <div className="border">
                  <p>
                    वणिज ०५:४३ बजेसम्म, त्यसपछी भद्रा १८:०२बजेसम्म, त्यसपछी वव
                  </p>
                </div>
              </div>

              <div className="grid column-2 text-center">
                <div className="border">
                  <p>
                    <strong>चन्द्रराशि</strong>
                  </p>
                  <p>वृश्चिक</p>
                </div>
                <div className="border">
                  <p>
                    <strong>आनन्दादि योग</strong>
                  </p>
                  <p>सौम्य</p>
                </div>
              </div>

              <div className="grid column-3 text-center">
                <div className="border">
                  <p>
                    <strong>दिनमान</strong>
                  </p>
                  <p>१३:३९</p>
                </div>
                <div className="border">
                  <p>
                    <strong>सूर्योदय</strong>
                  </p>
                  <p>५:२०</p>
                </div>

                <div className="border">
                  <p>
                    <strong>सूर्यास्त</strong>
                  </p>
                  <p>१८:५९</p>
                </div>
              </div>

              <div className="border">
                <p>
                  हरिशयनी एकादशी व्रत, तुलसी रोपण, चतुर्मास व्रत शुरु,
                  हरिवासरयोग १८:२ देखी १:२७ बजेसम्म ।
                </p>
              </div>

              <div className="border">
                <p>
                  <strong>
                    सूर्योदय कालिन ग्रहस्पष्ट तालिका राशि, अंशा, कला र विकलामा
                  </strong>
                </p>
              </div>

              <div className="grid column-2 text-center">
                <div className="border">
                  <p>
                    <strong>सूर्य</strong>
                  </p>
                  <p>७।६।२।२७</p>
                </div>
                <div className="border">
                  <p>
                    <strong>चन्द्र</strong>
                  </p>
                  <p>७।६।२।२७</p>
                </div>

                <div className="border">
                  <p>
                    <strong>मंगल</strong>
                  </p>
                  <p>३।२६।१३।३९</p>
                </div>
                <div className="border">
                  <p>
                    <strong>बुध</strong>
                  </p>
                  <p>३।२६।१३।३९</p>
                </div>

                <div className="border">
                  <p>
                    <strong>शनि</strong>
                  </p>
                  <p>३।२६।१३।३९</p>
                </div>
                <div className="border">
                  <p>
                    <strong>शनि</strong>
                  </p>
                  <p>३।२६।१३।३९</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div></div>
        <div>
          <div className="sidebarevent">
            <div className="star">
              <h6>UPCOMING EVENTS</h6>

              <p onClick={starisclicked}>
                {StarIsClicked ? (
                  <TiStarburstOutline
                    style={{ fontSize: "30px", marginTop: "10px" }}
                  />
                ) : (
                  <TiStarburst
                    style={{ fontSize: "30px", marginTop: "10px" }}
                  />
                )}
              </p>
            </div>
            <div className="upcomingevenetdown">
              <img
                src="https://api.nepalipatro.com.np/storage/banners/6A2uUKVGV9l0zyBD.png"
                alt=""
              />

              <div className="ptagunderhtga">
                <h6>Bhanu Bhakta Jayanti</h6>
                <p>Ashar 29, 2081 - 13 Jul, 2024</p>
              </div>

              <div className="days">
                <h5>5</h5>
                <p className="dayptag">Days left</p>
              </div>
            </div>
            <div className="upcomingevenetdown">
              <img
                src="https://api.nepalipatro.com.np/storage/banners/LoymNyCtqLI0I4tG.jpg"
                alt=""
              />

              <div className="ptagunderhtga">
                <h6>Luto Falne</h6>
                <p>Shrawan 01, 2081 - 16 Jul, 2024</p>
              </div>

              <div className="days">
                <h5>6</h5>
                <p className="dayptag">Days left</p>
              </div>
            </div>
            <div className="upcomingevenetdown">
              <img
                src="https://api.nepalipatro.com.np/storage/banners/kdEmUZhrB2o2onoa.jpg"
                alt=""
              />

              <div className="ptagunderhtga">
                <h6>Kamaiya Mukti Diwas</h6>
                <p>Shrawan 02, 2081-17 Jul,2024</p>
              </div>

              <div className="days">
                <h5>7</h5>
                <p className="dayptag">Days left</p>
              </div>
            </div>
            <div className="upcomingevenetdown">
              <img
                src="https://api.nepalipatro.com.np/storage/banners/0JvME9WKDapD8AVI.png"
                alt=""
              />

              <div className="ptagunderhtga">
                <h6>Tulsi Ropan</h6>
                <p>Shrawan 02, 2081 - 17 Jul, 2024</p>
              </div>

              <div className="days">
                <h5>7</h5>
                <p className="dayptag">Days left</p>
              </div>
            </div>
            <div className="upcomingevenetdown">
              <img
                src="https://api.nepalipatro.com.np/storage/banners/CLZmIWcXYgclLemZ.png"
                alt=""
              />

              <div className="ptagunderhtga">
                <h6>BP Smriti Diwas</h6>
                <p>Shrawan 06, 2081 - 21 Jul, 2024</p>
              </div>

              <div className="days">
                <h5>11</h5>
                <p className="dayptag">Days left</p>
              </div>
            </div>
            <div className="upcomingevenetdown">
              <img
                src="https://api.nepalipatro.com.np/storage/banners/lqljmFGDwLgwwgD7.jpg"
                alt=""
              />

              <div className="ptagunderhtga">
                <h6>Guru Purnima</h6>
                <p>Shrawan 06, 2081 - 21 Jul, 2024</p>
              </div>

              <div className="days">
                <h5>11</h5>
                <p className="dayptag">Days left</p>
              </div>
            </div>

            <div className="ddownseemore">
              <p className="seemore">See more upcoming Days</p>
            </div>
          </div>

          
          <div className="Currency_Converter container-fluid pt-3 pb-3">
            <h6>CURRENCY CONVERTER</h6>
            <div className="Currency-date">
              <p className="Currency">Ashar 26, 2081 - 10 Jul, 2024</p>
            </div>

            <div>
              <p>Amount</p>
              <div className="row">
                <div className="col-lg-6">
                  <div>
                    <input type="text" name="amount" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <select
                    name="selectcountry"
                    id="country"
                    className="form-control"
                  >
                    <option value="U.S Dollar">U.S Dollar</option>
                    <option value="India">India Rupee</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <p>Converted to</p>
              <div className="row">
                <div className="col-lg-6">
                  <div>
                    <input type="text" name="amount" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <select
                    name="selectcountrytochnage"
                    id="countrychnage"
                    className="form-control"
                  >
                    <option value="Nepali">Nepalese Rupee</option>
                    <option value="India">India Rupee</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="currencyhtag mt-2">
              <h5>1 U.S Dollar equals</h5>
              <h5 style={{ color: "#FF612F" }}>133.28 Nepalese Rupee</h5>

              <div className="learnmore">
                <Link to="/Gold-silver-rates">
                  <p>Learn more</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="TodaysGoldrate container-fluid pt-4 pb-4">
            <h6>TODAYS'S GOLD, SILVER RATE</h6>
            <div className="Currency-date mt-2 mb-2">
              <p className="Currency">Ashar 26, 2081 - 10 Jul, 2024</p>
            </div>

            <div className="">
              <div className="Hallmarkgold">
                <div className="d-flex">
                  <img
                    src="data:image/png;base64,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"
                    alt="img"
                  />
                  <div className="pertola">
                    <h5>Hallmark</h5>
                    <p>Per Tola</p>
                  </div>
                </div>
                <p>NRs.144,100</p>
              </div>
              <div className="Hallmarkgold">
                <div className="d-flex">
                  <img
                    src="data:image/png;base64,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"
                    alt="img"
                  />
                  <div className="pertola">
                    <h5>Hallmark</h5>
                    <p>Per Tola</p>
                  </div>
                </div>
                <p>NRs.143,400</p>
              </div>
              <div className="Hallmarkgold">
                <div className="d-flex">
                  <img
                    src="data:image/png;base64,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"
                    alt="img"
                  />
                  <div className="pertola">
                    <h5>Hallmark</h5>
                    <p>Per Tola</p>
                  </div>
                </div>
                <p>NRs.1,870</p>
              </div>
            </div>
            <div className="learnmore">
              <Link to="/Gold-silver-rates">
                <p>Learn more</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
