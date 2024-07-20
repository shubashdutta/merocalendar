import React from "react";
import { FaInfoCircle } from "react-icons/fa";

import "./../css/horoscope.css";
import { Rasidata } from "../Data/Data";
import { blognewsdata } from "../Data/CenterpageNews";
import { Link } from "react-router-dom";
import Img from "../Common/Img";

export const Horoscope = () => {
  return (
    <>
      <div className="container">
        <div className="topdivofhoroscoppage">
          <h5>
            <FaInfoCircle />
            "We take serious concern over some daily, weekly, monthly and annual
            horoscope content that may have been written on this website without
            proper attribution or the author's name being clearly stated, or
            that may have been copied from other websites without permission. We
            request that all concerned parties refrain from copying horoscope
            content. We will take legal action if we find that any content has
            been copied in the future.”
          </h5>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="bg-color border-radius">
              <div className="">
                <ul
                  class="nav nav-pills flex-row justify-content-between"
                  id="pills-tab "
                  role="tablist"
                >
                  <div className="horroscope-title">
                    <h5>आजको राशिफल - Today's Horoscope</h5>
                  </div>
                  <div className="d-flex">
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Yearly
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        monthly
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Weekly
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-disabled-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-disabled"
                        type="button"
                        role="tab"
                        aria-controls="pills-disabled"
                        aria-selected="false"
                      >
                        Daily
                      </button>
                    </li>
                  </div>
                </ul>
              </div>
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                  tabindex="0"
                >
                  <div className="">
                    <div className="horoscope-content">
                      <h6>
                        27th-Ashar 2081 | Thursday 11th-July 2024. Ashadha
                        Shuklapaksha, Panchami Tithi, Shashti after 8:36 PM.
                        Purvaphalguni Nakshatra, Uttarphalguni after 12:35 PM.
                        Chandrarashi Singh, Virgo after 19:13 hrs. [Auto
                        Translated by Google Translate] Deputy Prof. Lakshmi
                        Prasad Baral (Astrologer)
                      </h6>

                      <div className="grid column-2">
                        {Rasidata.map((data, key) => (
                          <div className="custom-card">
                            <div className="">
                              <Img scr={data.imgUrl} alt="Horoscope" />
                              <h2 className="custom-card-title">
                                {data.title}
                              </h2>
                              <p>{data.p}</p>
                              <p className="custom-card-content">
                                {data.About}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                  tabindex="0"
                >
                  ...
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                  tabindex="0"
                >
                  ...
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-disabled"
                  role="tabpanel"
                  aria-labelledby="pills-disabled-tab"
                  tabindex="0"
                >
                  ...
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="rounded rightsidediv bg-color sidesticky">
              <div className="single-data">
                <h5>LATEST</h5>

                <Img
                  scr="https://risingnepaldaily.com/storage/media/53580/koshibb.jpg"
                  alt="img"
                />

                <h6>Misery of Bhojpur roads in rainy season</h6>
                <div className="d-flex justify-content-between align-items-center mt-2 mb-4">
                  <div className="news-reference">
                    <img
                      src="https://api-news.nepalipatro.com.np/api/sources-favicon/images/175"
                      alt="img"
                    />
                    <p>Khabarhub</p>
                  </div>
                  <div className="timetag">
                    <p>12M AAGO</p>
                  </div>
                </div>

                {blognewsdata.map((val, key) => (
                  <>
                    <div key={key}>
                      <Link to="" target="_blank">
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="recommended-img">
                              <img src={val.Imgurl} alt="img" />
                            </div>
                          </div>
                          <div className="col-lg-8">
                            <h6>{val.About}</h6>
                            <div className="d-flex justify-content-between align-items-center mt-2 mb-4">
                              <div className="news-reference">
                                <img src={val.ref_logo} alt="img" />
                                <p>{val.news_ref}</p>
                              </div>
                              <div className="timetag">
                                <p>{val.time_ago}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </>
                ))}

                <div className="learnmore">
                  <Link to="/New's">
                    <p>Learn more</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
