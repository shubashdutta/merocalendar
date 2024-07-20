import React from "react";
import "../../css/paramarsha.css";
import { Paramarshadata } from "../../Data/Data";
import { FaBook, FaPhoneAlt, FaStar, FaStarHalf } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import Img from "../../Common/Img";

const Paramarsha = (data) => {
  return (
    <>
      <div className="banner-wrapper">
        <div className="paramarsh-banner">
          <Img
            scr="https://api.nepalipatro.com.np/storage/banners/0WiiYwWtXFTDpwF2.jpg"
            alt="img"
          />
        </div>
        <div className="pramash-content ">
          <h1>Vaidik Paramarsha</h1>
          <h6>
            One after another unexpected trouble in your life! Are you worried
            about love-marriage, marital crisis, marital relationship, business,
            family problem, tribulation, abroad education/travel, financial
            gain, physical or mental problem, children, or any other kind of
            problem? To get out of all these problems and get the right path,
            take astrology consultation from our experienced astrological
            (jyotish) acharyas and professor gurus.
          </h6>
        </div>
      </div>

      <div
        className="container position-relative"
        style={{ marginTop: "-2rem", zIndex: "1" }}
      >
        <div
          className="bg-color border-radius"
          style={{ padding: "40px 20px" }}
        >
          <div className="container">
            <div className="row">
              {Paramarshadata.map((data, key) => (
                <div className="col-lg-3">
                  <div>
                    <div className="paramasha_insidediv">
                      <Img scr={data.ImgUrl} alt="img" />
                      <div className="pt-4 pb-4">
                        <h6 className="darkmode">{data.title}</h6>
                        <p>{data.About}</p>
                      </div>
                    </div>
                    <div className="Div_for_booking">
                      <p>{data.Booking}</p>
                      <div className="Booking_div_btn">
                        <h5>{data.Price}</h5>
                        <button>Booking</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="line container">
        <span>OR</span>
      </div>

      <div className="container">
        <div className="border-radius bg-color">
          <div className="callus">
            <div className="call-icon">
              <FaPhoneAlt />
            </div>
            <h3>Call us</h3>
            <h6>Call our representative directly for prompt assistance</h6>
            <a href="tel:977 98275231212">+977 98XXXXXXX</a>
          </div>
        </div>
      </div>

      <div className="line container">
        <span>Our Experts</span>
      </div>

      <div className="Our_Experts">
        <div className="Experts_insidediv Regular bg-color border-radius">
          <div className="d-flex p-3">
            <div className="expert-img">
              <img
                src="https://images.pexels.com/photos/2280551/pexels-photo-2280551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className=" px-3">
              <h6>उपप्रा. लक्ष्मी प्रसाद बराल</h6>

              <div className="mt-2 mb-2 rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>

              <p>
                <FaBook style={{ marginRight: "10px" }} />
                उपप्राध्यापक, नेपाल संस्कृत विश्वविद्यालय, वालमीकि विद्यापीठ
              </p>

              <p>
                <IoLocation style={{ marginRight: "10px" }} />
                काठमाडौँ ,नेपाल
              </p>
            </div>
          </div>
          <p className="px-3">उपप्राध्यापक, नेपाल संस्कृत विश्वविद्यालय</p>
        </div>
      </div>
    </>
  );
};

export default Paramarsha;
