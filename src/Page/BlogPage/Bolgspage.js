import React from "react";
import "../../css/blog.css";
import { BolgPage } from "../../Data/BolgsPage";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";

const Bolgspage = () => {
  return (
    <>
      <div className="container mt-4 mb-4">
        <div className="Bolgs_page">
          <div className="Top">
            <h3>
              All information abouts dates,religious Festivals and days related to
              Nepal
            </h3>

            <div className="search d-flex">
              <input text="search" placeholder="Search Blogs" className="form-control" />
              <button>Search </button>
            </div>
          </div>

          <div className="row">
            {BolgPage.map((Bolgsdata, key) => (
              <div className="col-lg-4" key={key}>
                <div className="Bolgspage_centerdiv">
                  <div className="blog-img">
                    <img src={Bolgsdata.ImgUrl} alt="img" />
                    <Link to={"/"} className="tag">
                      Festivals
                    </Link>
                  </div>
                  <div className="d-flex justify-content-between align-items-end">
                    <div>
                      <h5>{Bolgsdata.Title}</h5>
                      <p>{Bolgsdata.Date}</p>
                      <h6>{Bolgsdata.About}</h6>
                    </div>
                    <div>
                      <FaRegComment /> <span>4</span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bolgspage;
