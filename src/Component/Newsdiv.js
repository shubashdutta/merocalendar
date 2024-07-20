import React, { useState } from "react";
import { blognewsdata } from "../Data/CenterpageNews";
import { Link } from "react-router-dom";

import Img from "../Common/Img";
const Newsdiv = () => {
  const [selectedCategory, setSelectedCategory] = useState("Latest");
  const categories = [...new Set(blognewsdata.map((item) => item.category))];
  const filteredItems = blognewsdata.filter(
    (item) => item.category === selectedCategory
  );
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <div className="row">
        <div className="col-lg-7">
          <div className="rounded bg-color">
            <div className="mt-3 mb-3">
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                {categories.map((category, index) => (
                  <li key={index} className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${
                        selectedCategory === category ? "active" : ""
                      }`}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="divimg row">
              {filteredItems.map((val, key) => (
                <div key={key} className={`col-lg-${key === 0 ? "12" : "6"}`}>
                  <Link
                    to="https://english.himalayatimes.com.np/2024/07/83128/?utm_source=nepalipatro&utm_medium=np_mobile&utm_campaign=np_news"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <img src={val.Imgurl} alt="img" /> */}

                    <Img scr={val.Imgurl} alt="img" />
                    <h6>{val.About}</h6>
                    <div className="d-flex justify-content-between align-items-center mt-2 mb-4">
                      <div className="news-reference">
                        <img src={val.ref_logo} alt="img" />
                        <p>{val.news_ref}</p>
                      </div>
                      <div>
                        <p>{val.time_ago}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <div className="learnmore">
              <Link to="/New's">
                <p>Learn more</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="rounded rightsidediv bg-color">
            <div className="">
              <h5>RECOMMENDED</h5>
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
    </>
  );
};

export default Newsdiv;
