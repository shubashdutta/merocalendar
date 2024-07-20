import React, { useEffect, useState } from "react";

import "../Radio/Radiopage.css";
import { Radiodata } from "../../Data/Radiodata";

import Img from "../../Common/Img";

import videoplay from "../../Assets/video/radio.mp4";
import { json } from "react-router-dom";

const Radiopage = () => {
  const [radio, setRadio] = useState([]);
  const [loding, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const radiodata = async () => {
      try {
        const res = await fetch(
          "https://radio-and-podcast.nepalipatro.com.np/api/public/radio/v2/web-radios?sort_by=asc"
        );

        if (res.ok) {
          const data = await res.json();
          console.log("API Response:", data); // Ensure this logs an array

          // Check if the data is an array
          if (Array.isArray(data)) {
            setRadio(data);
          } else {
            console.error("Expected an array but got:", data);
            setError("Unexpected data format");
          }
        } else {
          throw new Error("Network response was not ok");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    radiodata();
  }, []);

  if (loding) return <p>Loading...</p>;
  if (error) {
    <p>Error:{error}</p>;
  }
  if (!Array.isArray(radio) || radio.length === 0) {
    return <p>No data available.</p>;
  }

  return (
    <>
      <div className=" container-fluid">
        {/* <video
          width="100%"
          height="800px"
          className=" container-fluid"
          autoPlay
          loop
          muted
        >
          <source src={videoplay} type="video/mp4" />
        </video> */}

        <Img
          src="https://zeno.fm/_next/image/?url=https%3A%2F%2Fimages.zeno.fm%2F99Ft4RmALhues3VdlZB4KgA1J2XsUSwTgtLKNgzyyKg%2Frs%3Afit%3A1500%3A600%2Fg%3Ace%3A0%3A0%2FaHR0cHM6Ly9zdHJlYW0tdG9vbHMuemVub21lZGlhLmNvbS9jb250ZW50L3N0YXRpb25zL2E5ODFlYjZmLWJiNzUtNDI0Zi04NGIyLWNlZjM2NGE2ZjI5ZC9taWNyb3NpdGUvYmFja2dyb3VuZF9pbWFnZS8_dXBkYXRlZD0xNjY4NDE1NzA4MDAw.webp&w=1920&q=70"
          alt="radioimg"
        />

        <div className=" container">
          <div className="row">
            {radio.map((radioapidata) => (
              <a
                href=""
                className="col-lg-2 col-md-3 col-4 mt-2 mb-5  rounded "
              >
                <div>
                  <Img src={radioapidata.image} alt="radioimg" />
                  <p className="text-center">{radioapidata.station_name}</p>
                </div>
              </a>
            ))}
            {/* {radio.map((radiodatapi) => (
              <div key={radiodatapi.id} className="">
                <img src={radiodatapi.image} alt={radiodatapi.station_name} />
                <h2>{radiodatapi.station_name}</h2>
                <a
                  href={radiodatapi.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Radiopage;
