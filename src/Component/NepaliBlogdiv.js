import React from "react";
import { Link } from "react-router-dom";

const NepaliBlogdiv = () => {
  return (
    <>
      <div className="centerpagedowndivhomepage mt-3">
        <h3>Mero calendar Blog</h3>
        <div className="mero-calendar row">
          <div className="col-lg-4">
            <img
              src="https://nepalipatro.com.np/blog/wp-content/uploads/2021/06/world-population-day-creatives-landscape.jpg"
              alt="img"
            />

            <div className="nepalipartopandhtag">
              <p>International Days</p>
              <h5>World Population Day</h5>
            </div>
          </div>
          <div className="col-lg-4">
            <img
              src="https://nepalipatro.com.np/blog/wp-content/uploads/2020/07/MicrosoftTeams-image-89.png"
              alt="img"
            />

            <div className="nepalipartopandhtag">
              <p>National Days</p>
              <h5>Bhanu Jayanti</h5>
            </div>
          </div>
          <div className="col-lg-4">
            <img
              src="https://nepalipatro.com.np/blog/wp-content/uploads/2024/06/examination_board-1d-1.png"
              alt="img"
            />

            <div className="nepalipartopandhtag">
              <p>Notice</p>
              <h5>How to check SEE result?</h5>
            </div>
          </div>
        </div>

        <div className="nepalipartolearnmore">
          <Link to="/New's">
            <span style={{ textDecoration: "none" }}>learnmore</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NepaliBlogdiv;
