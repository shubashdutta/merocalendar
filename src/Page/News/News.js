import React, { useState } from "react";
import "../../css/news.css";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { AiTwotoneLike } from "react-icons/ai";
import { CiBookmarkCheck } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { Newsdatalist, Recommended } from "../../Data/Newspagedata/Newsdata";
import { IoSearchSharp } from "react-icons/io5";
import { blognewsdata } from "../../Data/CenterpageNews";
import { TbLocationShare } from "react-icons/tb";
import { FaRegBookmark } from "react-icons/fa";

import { InlineReactionButtons } from "sharethis-reactjs";
import { InlineShareButtons } from "sharethis-reactjs";
import { StickyShareButtons } from "sharethis-reactjs";
import { InlineFollowButtons } from "sharethis-reactjs";

const News = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isToogle, setIsToogle] = useState(false);

  const handleToggle = () => {
    setIsToogle(!isToogle);
  };
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-lg-2">
            <div className="bg-color p-0 pt-3 pb-3 sidesticky">
              <div className="left_side-news">
                <ul>
                  <li>
                    <Link>
                      <FaRegNewspaper />
                      <span>Latest</span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FaMoneyBillTrendUp />
                      <span>Trending</span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <AiTwotoneLike />
                      <span>Recommended</span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <CiBookmarkCheck />
                      <span>Bookmark</span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <IoMdNotificationsOutline />
                      <span>Notification</span>
                    </Link>
                  </li>
                </ul>

                <ul className="none-icon-cate">
                  <li>
                    <Link>Notification</Link>
                  </li>
                  <li>
                    <Link>Sports</Link>
                  </li>
                  <li>
                    <Link>Health</Link>
                  </li>
                  <li>
                    <Link>Technology</Link>
                  </li>
                  <li>
                    <Link>Business</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="news">
              <div className="w-100 news-search">
                <input
                  className="form-control rounded-start"
                  type="search"
                  placeholder="Find what you want"
                />
                <span>
                  <IoSearchSharp />
                </span>
              </div>

              <div className="news-wrapper container p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="news-title">
                    <h5>Latest</h5>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <p className="m-0 p-0 fs-10 mb-1">Quic News</p>
                    <div class="checkbox-apple">
                      <input
                        class="yep"
                        id="check-apple"
                        type="checkbox"
                        checked={isToogle}
                        onChange={handleToggle}
                      />
                      <label for="check-apple"></label>
                    </div>
                  </div>
                </div>
                {isToogle ? (
                  <>
                    {Newsdatalist.map((newdatalist, key) => (
                      <ul>
                        <Link
                          to="https://risingnepaldaily.com/news/45872?utm_source=nepalipatro&utm_medium=np_mobile&utm_campaign=np_news"
                          target="_blank"
                        >
                          <li>{newdatalist.Title}</li>
                        </Link>
                      </ul>
                    ))}
                  </>
                ) : (
                  <>
                    {blognewsdata.map((val, key) => (
                      <>
                        {/* <img src={News.Imgurl} alt="" />
                        <h3>{News.Title}</h3>
                        <h4>{News.About}</h4> */}
                        <div key={key}>
                          <img src={val.Imgurl} alt="img" />
                          <h3>{val.title}</h3>
                          <h6>{val.About}</h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center mt-2 mb-5">
                              <div className="news-reference">
                                <img src={val.ref_logo} alt="img" />
                                <p>{val.news_ref}</p>
                              </div>
                              <div>
                                <p className="m-0 fs-10">{val.time_ago}</p>
                              </div>
                            </div>
                            <div className="d-flex gap-10">
                              <span>
                                <FaRegBookmark
                                  style={{
                                    display: isHovered ? "none" : "block",
                                  }}
                                />
                              </span>
                              <span>
                                <div
                                  className="share-container"
                                  onMouseEnter={() => setIsHovered(true)}
                                  onMouseLeave={() => setIsHovered(false)}
                                >
                                  <TbLocationShare
                                    style={{
                                      display: isHovered ? "none" : "block",
                                    }}
                                  />
                                  {isHovered && (
                                    <div>
                                      <InlineShareButtons
                                        config={{
                                          alignment: "center",
                                          color: "social",
                                          enabled: true,
                                          font_size: 10,

                                          language: "en",
                                          networks: [
                                            "whatsapp",
                                            "linkedin",
                                            "messenger",
                                            "facebook",
                                            "twitter",
                                          ],

                                          size: 30,
                                          url: "https://www.sharethis.com",
                                          image: "https://bit.ly/2CMhCMC",
                                        }}
                                      />
                                      <hr />
                                    </div>
                                  )}
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="Viwe_source">
              <h5>VIEW SOURCES</h5>
            </div>

            <div className="News_Recommended">
              <h4>Recommended</h4>
              {Recommended.map((NewsTitle, key) => (
                <>
                  <div>
                    <h6>{NewsTitle.Title}</h6>
                    {/* <span>{NewsTitle.Time}</span> */}
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

export default News;
